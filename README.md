# Bixify - AI-Powered Marketing Validation Platform

A modern, enterprise-grade web application that validates marketing content using AI-powered persona simulations. Get instant insights from diverse perspectives to optimize your campaigns before launch.

## ✨ Features

### 🎯 **Content Validation**
- AI-powered analysis of marketing content, ad copy, and creative messaging
- Multi-persona simulation for comprehensive audience insights
- Visual and text content support
- Real-time confidence scoring and reasoning

### 🚀 **Modern Enterprise UI**
- Professional, responsive design that looks like a real company application
- Fixed navigation with sidebar for easy access to features
- Interactive dashboard with real-time statistics
- Smooth animations and micro-interactions
- Mobile-responsive design

### 🧠 **AI Persona Simulations**
- 5 diverse persona types for comprehensive validation
- Young Professional, Creative Freelancer, Small Business Owner, Tech Enthusiast, Parent Consumer
- Confidence scoring with detailed reasoning
- Click-through prediction analysis

### 📊 **Analytics & Insights**
- Real-time validation summary
- Success rate tracking
- Performance metrics dashboard
- Export and sharing capabilities

## 🎨 **Design Highlights**

- **Professional Navigation**: Fixed top bar with brand identity and user profile
- **Smart Sidebar**: Quick actions, statistics, and navigation menu
- **Modern Cards**: Clean, elevated design with hover effects and shadows
- **Color System**: Professional blue-based palette with semantic colors
- **Typography**: Inter font family for excellent readability
- **Responsive Grid**: Adaptive layout that works on all devices
- **Micro-interactions**: Smooth animations and transitions throughout

## 🛠 **Technology Stack**

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend**: Python with FastAPI
- **Styling**: Custom CSS with CSS Variables and modern layout techniques
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter (Google Fonts)
- **Responsive**: CSS Grid and Flexbox for modern layouts

## 🚀 **Getting Started**

### Prerequisites
- Python 3.8+
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd askme
   ```

2. **Create virtual environment**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

5. **Run the application**
   ```bash
   python main.py
   ```

6. **Open in browser**
   ```
   http://localhost:8000
   ```

## 📱 **Usage**

### Content Validation Workflow

1. **Navigate to Dashboard**: Access the main validation interface
2. **Input Content**: Describe your marketing content and visual elements
3. **Run Validation**: Click "Run Validation" to start AI analysis
4. **Review Results**: View persona-by-persona insights and confidence scores
5. **Analyze Summary**: Check overall validation metrics and recommendations

### Navigation Features

- **Dashboard**: Main content validation interface
- **Analytics**: Performance metrics and historical data (coming soon)
- **Templates**: Pre-built content templates (coming soon)
- **Team**: Collaboration features (coming soon)

### Keyboard Shortcuts

- `Ctrl/Cmd + Enter`: Submit validation form
- `Escape`: Close modals and popups

## 🎯 **Persona Types**

| Persona | Description | Best For |
|---------|-------------|----------|
| **Young Professional** | Career-focused, tech-savvy individuals | B2B, professional services |
| **Creative Freelancer** | Artistic, independent workers | Creative services, design |
| **Small Business Owner** | Entrepreneurial, practical mindset | Local business, B2B |
| **Tech Enthusiast** | Early adopters, innovation-focused | Tech products, SaaS |
| **Parent Consumer** | Family-oriented, value-conscious | Consumer goods, family services |

## 🔧 **Configuration**

### Environment Variables

```bash
# API Configuration
API_HOST=0.0.0.0
API_PORT=8000

# AI Model Settings
AI_MODEL=gpt-4
AI_TEMPERATURE=0.7
AI_MAX_TOKENS=1000

# Security
SECRET_KEY=your-secret-key-here
```

### Customization

The application uses CSS custom properties for easy theming:

```css
:root {
    --primary-500: #3b82f6;    /* Main brand color */
    --secondary-500: #64748b;  /* Secondary text */
    --success-500: #22c55e;    /* Success states */
    --warning-500: #f59e0b;    /* Warning states */
    --error-500: #ef4444;      /* Error states */
}
```

## 📱 **Responsive Design**

The application is fully responsive with breakpoints:

- **Desktop**: 1400px+ (5-column persona grid)
- **Large Tablet**: 1200px-1399px (4-column grid)
- **Tablet**: 1024px-1199px (3-column grid)
- **Mobile**: 768px-1023px (2-column grid)
- **Small Mobile**: <768px (1-column grid)

## 🚀 **Performance Features**

- **Lazy Loading**: Images and content load as needed
- **Smooth Animations**: CSS transitions and keyframe animations
- **Optimized Rendering**: Efficient DOM manipulation
- **Progressive Enhancement**: Works without JavaScript for basic functionality

## 🔮 **Future Enhancements**

- [ ] **Advanced Analytics**: Detailed performance metrics and reporting
- [ ] **Content Templates**: Pre-built templates for common use cases
- [ ] **Team Collaboration**: Multi-user support and sharing
- [ ] **API Integration**: Connect with external marketing platforms
- [ ] **A/B Testing**: Built-in content testing capabilities
- [ ] **Export Options**: PDF reports and data export
- [ ] **Dark Mode**: Light/dark theme toggle
- [ ] **Mobile App**: Native mobile applications

## 🤝 **Contributing**

We welcome contributions! Please see our contributing guidelines for details.

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 **License**

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 **Acknowledgments**

- **Font Awesome** for the icon library
- **Inter Font** for excellent typography
- **Unsplash** for high-quality placeholder images
- **FastAPI** for the robust backend framework

## 📞 **Support**

For support and questions:

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs and feature requests via GitHub Issues
- **Discussions**: Join community discussions on GitHub

---

**Bixify** - Transform your marketing content with AI-powered insights. 🚀
