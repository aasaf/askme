#!/bin/bash

echo "🚀 Starting Marketing Content Validator..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found!"
    echo "📝 Please copy env.example to .env and add your Google API key:"
    echo "   cp env.example .env"
    echo "   # Then edit .env and add: GOOGLE_API_KEY=your_actual_key_here"
    exit 1
fi

# Check if GOOGLE_API_KEY is set
if ! grep -q "GOOGLE_API_KEY=" .env || grep -q "GOOGLE_API_KEY=your_google_api_key_here" .env; then
    echo "⚠️  Please set your actual Google API key in the .env file!"
    exit 1
fi

# Install dependencies if needed
echo "📦 Installing dependencies..."
pip install -r requirements.txt

# Start the application
echo "🌟 Starting FastAPI server..."
echo "🌐 Open your browser to: http://localhost:8000"
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

python main.py
