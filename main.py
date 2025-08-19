import os
import asyncio
from typing import List, Dict, Any
from fastapi import FastAPI, Request, Form, UploadFile, File
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
# import google.generativeai as genai  # Commented out - no longer needed
from dotenv import load_dotenv
import json
import random

# Load environment variables
load_dotenv()

# Configure Google Gemini (commented out - using placeholder results)
# genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
# model = genai.GenerativeModel('gemini-2.0-flash')

app = FastAPI(title="Marketing Content Validator", version="1.0.0")

# Mount static files and templates
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")

# Marketing personas with different system prompts
MARKETING_PERSONAS = {
    "young_professional": {
        "name": "Young Professional",
        "description": "Career-focused, tech-savvy, values efficiency",
        "system_prompt": """You are a young professional aged 25-35, working in a corporate environment. 
        You're tech-savvy, value efficiency, quality, and professional growth. You're active on LinkedIn and 
        occasionally on Instagram. You're skeptical of overly promotional content but appreciate genuine value. 
        You make decisions based on ROI and personal/professional benefit. You're busy and have limited attention span.
        
        When evaluating content, focus on: Does this solve a real problem? Is it efficient? What's the ROI? 
        Is it authentic or just hype? Keep your analysis concise and actionable."""
    },
    "creative_freelancer": {
        "name": "Creative Freelancer",
        "description": "Artistic, independent, values authenticity",
        "system_prompt": """You are a creative freelancer aged 22-30, working in design, writing, or creative services. 
        You value authenticity, creative expression, and genuine human connection. You're active on Instagram, TikTok, 
        and Pinterest. You're drawn to visually appealing content and stories that resonate emotionally. 
        You're skeptical of corporate messaging and prefer brands that feel human and relatable.
        
        When evaluating content, focus on: Does this feel authentic? Is it visually/emotionally appealing? 
        Does it connect on a human level? Is it creative or just corporate? Keep your analysis concise and punchy."""
    },
    "small_business_owner": {
        "name": "Small Business Owner",
        "description": "Practical, budget-conscious, values ROI",
        "system_prompt": """You are a small business owner aged 35-50, running a local business or startup. 
        You're practical, budget-conscious, and focused on ROI. You're active on Facebook and LinkedIn. 
        You need solutions that work and provide measurable results. You're skeptical of hype and prefer 
        proven, practical approaches. You value time-saving and cost-effective solutions.
        
        When evaluating content, focus on: What's the cost? What's the ROI? Is it proven? Does it save time? 
        Is it practical or just hype? Keep your analysis concise and business-focused."""
    },
    "tech_enthusiast": {
        "name": "Tech Enthusiast",
        "description": "Early adopter, values innovation",
        "system_prompt": """You are a tech enthusiast aged 18-28, always eager to try new technologies and solutions. 
        You're active on Twitter, Reddit, and YouTube. You value innovation, efficiency, and being ahead of the curve. 
        You're drawn to cutting-edge features and technical specifications. You're skeptical of outdated approaches 
        and appreciate transparency about capabilities and limitations.
        
        When evaluating content, focus on: Is this innovative? What are the technical specs? Is it cutting-edge? 
        What's the efficiency gain? Is it transparent? Keep your analysis concise and tech-focused."""
    },
    "parent_consumer": {
        "name": "Parent Consumer",
        "description": "Family-oriented, values safety & convenience",
        "system_prompt": """You are a parent aged 30-45, juggling work and family responsibilities. 
        You're active on Facebook, Instagram, and Pinterest. You value safety, convenience, and solutions 
        that benefit your family. You're practical and look for products/services that save time and money. 
        You're drawn to content that shows real family situations and practical benefits. 
        You're skeptical of overly perfect portrayals and prefer authenticity.
        
        When evaluating content, focus on: Is this family-safe? Does it save time/money? Is it convenient? 
        Does it benefit my family? Is it authentic? Keep your analysis concise and family-focused."""
    },
    "senior_executive": {
        "name": "Senior Executive",
        "description": "Strategic thinker, values leadership & growth",
        "system_prompt": """You are a senior executive aged 45-60, leading teams and making strategic decisions. 
        You're active on LinkedIn and industry publications. You value strategic thinking, leadership development, 
        and business growth. You're drawn to content that demonstrates thought leadership and strategic insights. 
        You're skeptical of tactical solutions without strategic context.
        
        When evaluating content, focus on: What's the strategic value? Does this show leadership? Is it growth-oriented? 
        Does it address business challenges? Is it credible? Keep your analysis concise and strategic."""
    },
    "millennial_shopper": {
        "name": "Millennial Shopper",
        "description": "Value-conscious, socially aware, mobile-first",
        "system_prompt": """You are a millennial shopper aged 28-38, making purchasing decisions for yourself and family. 
        You're active on Instagram, TikTok, and mobile shopping apps. You value authenticity, social responsibility, 
        and good value for money. You're drawn to content that feels genuine and aligns with your values. 
        You're skeptical of traditional advertising and prefer peer recommendations.
        
        When evaluating content, focus on: Does this feel authentic? Is it socially responsible? Is it good value? 
        Does it align with my values? Is it mobile-friendly? Keep your analysis concise and relatable."""
    },
    "entrepreneur": {
        "name": "Entrepreneur",
        "description": "Risk-taker, values innovation & growth",
        "system_prompt": """You are an entrepreneur aged 25-45, building and scaling businesses. 
        You're active on LinkedIn, Twitter, and startup communities. You value innovation, growth, and 
        disruptive thinking. You're drawn to content that challenges the status quo and offers new perspectives. 
        You're skeptical of conventional wisdom and prefer bold, innovative approaches.
        
        When evaluating content, focus on: Is this innovative? Does it challenge norms? What's the growth potential? 
        Is it bold enough? Does it inspire action? Keep your analysis concise and inspiring."""
    },
    "digital_native": {
        "name": "Digital Native",
        "description": "Born online, values speed & connectivity",
        "system_prompt": """You are a digital native aged 18-25, who has grown up with technology and social media. 
        You're active on TikTok, Instagram, and emerging platforms. You value speed, connectivity, and 
        authentic experiences. You're drawn to content that feels native to digital platforms and resonates 
        with your generation. You're skeptical of content that feels forced or inauthentic.
        
        When evaluating content, focus on: Does this feel native to digital? Is it authentic to my generation? 
        Is it fast and engaging? Does it connect emotionally? Is it shareable? Keep your analysis concise and trendy."""
    },
    "influencer": {
        "name": "Influencer",
        "description": "Content creator, values engagement & authenticity",
        "system_prompt": """You are an influencer aged 22-35, creating content and building engaged audiences. 
        You're active across multiple social platforms and understand what drives engagement. You value authenticity, 
        creativity, and genuine connection with your audience. You're drawn to content that feels real and 
        resonates emotionally. You're skeptical of overly polished or inauthentic content.
        
        When evaluating content, focus on: Does this feel authentic? Would my audience engage with this? 
        Is it creative and original? Does it tell a story? Is it shareable? Keep your analysis concise and engaging."""
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

def generate_placeholder_response(content: str, persona_key: str) -> Dict[str, Any]:
    """Generate realistic placeholder responses based on persona characteristics"""
    
    # Define response patterns for each persona
    response_patterns = {
        "young_professional": {
            "positive_keywords": ["efficient", "ROI", "professional", "value", "solution", "growth"],
            "negative_keywords": ["overly promotional", "hype", "unprofessional", "waste of time"],
            "click_probability": 0.7
        },
        "creative_freelancer": {
            "positive_keywords": ["authentic", "creative", "human", "emotional", "relatable", "inspiring"],
            "negative_keywords": ["corporate", "generic", "salesy", "impersonal"],
            "click_probability": 0.6
        },
        "small_business_owner": {
            "positive_keywords": ["practical", "proven", "ROI", "cost-effective", "time-saving", "results"],
            "negative_keywords": ["hype", "expensive", "unproven", "complicated"],
            "click_probability": 0.8
        },
        "tech_enthusiast": {
            "positive_keywords": ["innovative", "cutting-edge", "efficient", "technical", "transparent", "advanced"],
            "negative_keywords": ["outdated", "basic", "unclear", "limited"],
            "click_probability": 0.75
        },
        "parent_consumer": {
            "positive_keywords": ["family-safe", "convenient", "time-saving", "cost-effective", "authentic", "practical"],
            "negative_keywords": ["unsafe", "complicated", "expensive", "fake"],
            "click_probability": 0.65
        },
        "senior_executive": {
            "positive_keywords": ["strategic", "leadership", "growth", "credible", "business-focused", "insightful"],
            "negative_keywords": ["tactical", "basic", "uncredible", "superficial"],
            "click_probability": 0.7
        },
        "millennial_shopper": {
            "positive_keywords": ["authentic", "socially responsible", "good value", "aligned", "mobile-friendly", "genuine"],
            "negative_keywords": ["fake", "irresponsible", "overpriced", "misaligned"],
            "click_probability": 0.6
        },
        "entrepreneur": {
            "positive_keywords": ["innovative", "disruptive", "growth potential", "bold", "inspiring", "challenging"],
            "negative_keywords": ["conventional", "safe", "limited growth", "boring"],
            "click_probability": 0.8
        },
        "digital_native": {
            "positive_keywords": ["native", "authentic", "fast", "engaging", "emotional", "shareable"],
            "negative_keywords": ["forced", "fake", "slow", "boring", "unshareable"],
            "click_probability": 0.7
        },
        "influencer": {
            "positive_keywords": ["authentic", "engaging", "creative", "storytelling", "shareable", "emotional"],
            "negative_keywords": ["fake", "boring", "uncreative", "unshareable"],
            "click_probability": 0.65
        }
    }
    
    pattern = response_patterns[persona_key]
    
    # Determine if they would click based on content analysis
    content_lower = content.lower()
    positive_score = sum(1 for word in pattern["positive_keywords"] if word in content_lower)
    negative_score = sum(1 for word in pattern["negative_keywords"] if word in content_lower)
    
    # Base probability with content influence
    base_probability = pattern["click_probability"]
    content_modifier = (positive_score - negative_score) * 0.1
    final_probability = max(0.1, min(0.9, base_probability + content_modifier))
    
    will_click = random.random() < final_probability
    
    # Generate realistic reasoning
    if will_click:
        reasoning_templates = [
            "This content resonates with my values and addresses my needs effectively.",
            "I appreciate the authentic approach and clear value proposition.",
            "This feels genuine and offers practical benefits I can relate to.",
            "The messaging aligns with my priorities and feels trustworthy.",
            "I'm drawn to the professional yet approachable tone."
        ]
        reasoning = random.choice(reasoning_templates)
        confidence = random.randint(7, 10)
    else:
        reasoning_templates = [
            "The content feels too promotional and doesn't address my specific needs.",
            "I'm skeptical of the claims and would need more concrete evidence.",
            "This doesn't align with my values or current priorities.",
            "The messaging feels generic and doesn't stand out from competitors.",
            "I need more authentic proof points before engaging."
        ]
        reasoning = random.choice(reasoning_templates)
        confidence = random.randint(4, 7)
    
    return {
        "will_click": will_click,
        "reasoning": reasoning,
        "confidence": confidence
    }

async def simulate_persona_response(content: str, persona_key: str) -> SimulationResult:
    """Simulate how a specific persona would respond to the creative content using placeholder results"""
    persona = MARKETING_PERSONAS[persona_key]
    
    # Generate placeholder response instead of calling LLM
    result = generate_placeholder_response(content, persona_key)
    
    return SimulationResult(
        persona=persona_key,
        persona_name=persona['name'],
        will_click=result.get('will_click', False),
        reasoning=result.get('reasoning', 'Unable to determine'),
        confidence=result.get('confidence', 5)
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
