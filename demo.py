#!/usr/bin/env python3
"""
Demo script for the Marketing Content Validator
Shows how to use the API endpoints programmatically
"""

import requests
import json
import time

BASE_URL = "http://localhost:8000"

def test_personas_endpoint():
    """Test the personas endpoint"""
    print("🎭 Testing Personas Endpoint...")
    try:
        response = requests.get(f"{BASE_URL}/personas")
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Found {len(data['personas'])} personas:")
            for persona in data['personas']:
                print(f"   • {persona['name']}: {persona['description']}")
        else:
            print(f"❌ Error: {response.status_code}")
    except Exception as e:
        print(f"❌ Connection error: {e}")

def test_simulation_endpoint():
    """Test the simulation endpoint with sample content"""
    print("\n🚀 Testing Simulation Endpoint...")
    
    # Sample marketing content
    sample_content = {
        "text": "Transform your business with our AI-powered analytics platform! Get 50% off your first month. Limited time offer - don't miss out! 🚀 #AI #Analytics #BusinessGrowth",
        "image_description": "Professional dashboard showing colorful charts and graphs with business metrics"
    }
    
    print(f"📝 Testing with content: {sample_content['text'][:100]}...")
    
    try:
        response = requests.post(
            f"{BASE_URL}/simulate",
            json=sample_content,
            headers={"Content-Type": "application/json"}
        )
        
        if response.status_code == 200:
            data = response.json()
            print(f"✅ Simulation completed successfully!")
            print(f"📊 Summary:")
            print(f"   • Total personas: {data['summary']['total_personas']}")
            print(f"   • Would click: {data['summary']['will_click_count']}")
            print(f"   • Average confidence: {data['summary']['average_confidence']:.1f}/10")
            
            print(f"\n🎯 Individual Results:")
            for result in data['results']:
                status = "✅ Would Click" if result['will_click'] else "❌ Wouldn't Click"
                print(f"   • {result['persona_name']}: {status} (Confidence: {result['confidence']}/10)")
                print(f"     Reasoning: {result['reasoning'][:100]}...")
                print()
        else:
            print(f"❌ Error: {response.status_code}")
            print(f"Response: {response.text}")
    except Exception as e:
        print(f"❌ Connection error: {e}")

def main():
    """Run the demo"""
    print("🚀 Marketing Content Validator - API Demo")
    print("=" * 50)
    
    # Wait for server to be ready
    print("⏳ Waiting for server to be ready...")
    time.sleep(2)
    
    # Test endpoints
    test_personas_endpoint()
    test_simulation_endpoint()
    
    print("\n" + "=" * 50)
    print("🎉 Demo completed!")
    print(f"🌐 Open your browser to {BASE_URL} to use the web interface")
    print("💡 Try different content variations to see how personas respond differently")

if __name__ == "__main__":
    main()
