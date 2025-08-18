import os
import asyncio
from typing import List, Dict, Any
from fastapi import FastAPI, Request, Form, UploadFile, File
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
import google.generativeai as genai
from dotenv import load_dotenv
import json

# Load environment variables
load_dotenv()

# Configure Google Gemini
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
model = genai.GenerativeModel('gemini-2.0-flash')

app = FastAPI(title="Marketing Content Validator", version="1.0.0")

# Mount static files and templates
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Marketing personas with different system prompts
MARKETING_PERSONAS = {
    "young_professional": {
        "name": "Young Professional (25-35)",
        "description": "Career-focused, tech-savvy, values efficiency and quality",
        "system_prompt": """You are a young professional aged 25-35, working in a corporate environment. 
        You're tech-savvy, value efficiency, quality, and professional growth. You're active on LinkedIn and 
        occasionally on Instagram. You're skeptical of overly promotional content but appreciate genuine value. 
        You make decisions based on ROI and personal/professional benefit. You're busy and have limited attention span.
        
        When evaluating content, focus on: Does this solve a real problem? Is it efficient? What's the ROI? 
        Is it authentic or just hype? Keep your analysis concise and actionable."""
    },
    "creative_freelancer": {
        "name": "Creative Freelancer (22-30)",
        "description": "Artistic, independent, values authenticity and creative expression",
        "system_prompt": """You are a creative freelancer aged 22-30, working in design, writing, or creative services. 
        You value authenticity, creative expression, and genuine human connection. You're active on Instagram, TikTok, 
        and Pinterest. You're drawn to visually appealing content and stories that resonate emotionally. 
        You're skeptical of corporate messaging and prefer brands that feel human and relatable.
        
        When evaluating content, focus on: Does this feel authentic? Is it visually/emotionally appealing? 
        Does it connect on a human level? Is it creative or just corporate? Keep your analysis concise and punchy."""
    },
    "small_business_owner": {
        "name": "Small Business Owner (35-50)",
        "description": "Practical, budget-conscious, values ROI and proven solutions",
        "system_prompt": """You are a small business owner aged 35-50, running a local business or startup. 
        You're practical, budget-conscious, and focused on ROI. You're active on Facebook and LinkedIn. 
        You need solutions that work and provide measurable results. You're skeptical of hype and prefer 
        proven, practical approaches. You value time-saving and cost-effective solutions.
        
        When evaluating content, focus on: What's the cost? What's the ROI? Is it proven? Does it save time? 
        Is it practical or just hype? Keep your analysis concise and business-focused."""
    },
    "tech_enthusiast": {
        "name": "Tech Enthusiast (18-28)",
        "description": "Early adopter, values innovation and cutting-edge solutions",
        "system_prompt": """You are a tech enthusiast aged 18-28, always eager to try new technologies and solutions. 
        You're active on Twitter, Reddit, and YouTube. You value innovation, efficiency, and being ahead of the curve. 
        You're drawn to cutting-edge features and technical specifications. You're skeptical of outdated approaches 
        and appreciate transparency about capabilities and limitations.
        
        When evaluating content, focus on: Is this innovative? What are the technical specs? Is it cutting-edge? 
        What's the efficiency gain? Is it transparent? Keep your analysis concise and tech-focused."""
    },
    "parent_consumer": {
        "name": "Parent Consumer (30-45)",
        "description": "Family-oriented, values safety, convenience and family benefits",
        "system_prompt": """You are a parent aged 30-45, juggling work and family responsibilities. 
        You're active on Facebook, Instagram, and Pinterest. You value safety, convenience, and solutions 
        that benefit your family. You're practical and look for products/services that save time and money. 
        You're drawn to content that shows real family situations and practical benefits. 
        You're skeptical of overly perfect portrayals and prefer authenticity.
        
        When evaluating content, focus on: Is this family-safe? Does it save time/money? Is it convenient? 
        Does it benefit my family? Is it authentic? Keep your analysis concise and family-focused."""
    }
}

class CreativeContent(BaseModel):
    text: str
    image_description: str = ""

class SimulationResult(BaseModel):
    persona: str
    persona_name: str
    will_click: bool
    reasoning: str
    confidence: int  # 1-10 scale

def parse_gemini_response(response_text: str) -> Dict[str, Any]:
    """Parse Gemini response and extract JSON data"""
    try:
        # Clean the response text - remove markdown code blocks and extra formatting
        cleaned_text = response_text.strip()
        if cleaned_text.startswith('```json'):
            cleaned_text = cleaned_text[7:]
        if cleaned_text.endswith('```'):
            cleaned_text = cleaned_text[:-3]
        cleaned_text = cleaned_text.strip()
        
        # Try to parse the cleaned JSON
        result = json.loads(cleaned_text)
        return result
    except json.JSONDecodeError:
        # If that fails, try removing newlines and extra spaces
        try:
            cleaned_text = response_text.replace('\n', ' ').replace('\r', ' ')
            if cleaned_text.startswith('```json'):
                cleaned_text = cleaned_text[7:]
            if cleaned_text.endswith('```'):
                cleaned_text = cleaned_text[:-3]
            cleaned_text = cleaned_text.strip()
            
            result = json.loads(cleaned_text)
            return result
        except json.JSONDecodeError:
            # Final fallback - extract key information manually
            will_click = 'will_click": true' in response_text.lower()
            confidence = 5  # Default confidence
            
            # Extract reasoning - look for content between "reasoning": and the next quote
            reasoning = "Unable to parse response"
            if '"reasoning":' in response_text:
                try:
                    start = response_text.find('"reasoning":') + 12
                    # Find the next quote after the start
                    quote_start = response_text.find('"', start)
                    if quote_start != -1:
                        # Find the next quote after the content starts
                        quote_end = response_text.find('"', quote_start + 1)
                        if quote_end != -1:
                            reasoning = response_text[quote_start + 1:quote_end].strip()
                        else:
                            # If no closing quote, try to find the next comma or brace
                            end = response_text.find(',', quote_start + 1)
                            if end == -1:
                                end = response_text.find('}', quote_start + 1)
                            if end != -1:
                                reasoning = response_text[quote_start + 1:end].strip()
                except:
                    reasoning = "Response parsing error"
            
            return {
                "will_click": will_click,
                "reasoning": reasoning,
                "confidence": confidence
            }

async def simulate_persona_response(content: str, persona_key: str) -> SimulationResult:
    """Simulate how a specific persona would respond to the creative content"""
    persona = MARKETING_PERSONAS[persona_key]
    
    prompt = f"""
    {persona['system_prompt']}
    
    You are evaluating a social media marketing creative. Based on your persona, determine if you would click on this ad and why.
    
    Creative Content: {content}
    
    IMPORTANT: Respond ONLY with valid JSON in this exact format, no additional text or formatting:
    {{
        "will_click": true/false,
        "reasoning": "Keep your analysis concise and focused (2-3 sentences max). Focus on the key factors that would influence your decision as this persona. Be specific about what resonates or doesn't resonate with your values and needs.",
        "confidence": 1-10
    }}
    
    Be authentic to your persona. Consider what would motivate or deter someone like you from engaging with this content.
    Keep your reasoning brief, punchy, and actionable. Focus on the most important factors only.
    Only respond with the JSON object, no markdown, no explanations outside the JSON.
    """
    
    try:
        response = model.generate_content(prompt)
        response_text = response.text.strip()
        
        # Parse the response using our improved parser
        result = parse_gemini_response(response_text)
        
        return SimulationResult(
            persona=persona_key,
            persona_name=persona['name'],
            will_click=result.get('will_click', False),
            reasoning=result.get('reasoning', 'Unable to determine'),
            confidence=result.get('confidence', 5)
        )
            
    except Exception as e:
        return SimulationResult(
            persona=persona_key,
            persona_name=persona['name'],
            will_click=False,
            reasoning=f"Error generating response: {str(e)}",
            confidence=1
        )

@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/simulate")
async def simulate_creative(content: CreativeContent):
    """Simulate all personas' responses to the creative content"""
    
    # Run all simulations concurrently
    tasks = [
        simulate_persona_response(content.text, persona_key) 
        for persona_key in MARKETING_PERSONAS.keys()
    ]
    
    results = await asyncio.gather(*tasks)
    
    return {
        "results": [result.dict() for result in results],
        "summary": {
            "total_personas": len(results),
            "will_click_count": sum(1 for r in results if r.will_click),
            "average_confidence": sum(r.confidence for r in results) / len(results)
        }
    }

@app.get("/personas")
async def get_personas():
    """Get information about all available marketing personas"""
    return {
        "personas": [
            {
                "key": key,
                "name": persona["name"],
                "description": persona["description"]
            }
            for key, persona in MARKETING_PERSONAS.items()
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
