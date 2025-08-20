// AskMe - AI-Powered Marketing Validation Platform
// Helper function to get agent avatar images - 25 unique avatars with no duplicates
function getAgentAvatar(agentKey) {
    const avatars = {
        // Professional and diverse avatars - all unique
        'young_professional': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        'creative_freelancer': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face',
        'small_business_owner': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        'tech_enthusiast': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        'parent_consumer': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        'senior_executive': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        'millennial_shopper': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        'entrepreneur': 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=150&h=150&fit=crop&crop=face',
        'digital_native': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        'influencer': 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face',
        
        'marketing_manager': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
        'data_analyst': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        'content_creator': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        'brand_strategist': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        'social_media_expert': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        'seo_specialist': 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=150&h=150&fit=crop&crop=face',
        'ppc_analyst': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        'email_marketer': 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face',
        'growth_hacker': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        'conversion_optimizer': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face',
        
        'ux_designer': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        'ui_developer': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        'product_manager': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        'business_analyst': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        'sales_director': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        'customer_success': 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=150&h=150&fit=crop&crop=face',
        'market_researcher': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        'competitive_analyst': 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face',
        'brand_manager': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        'creative_director': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face',
        
        'digital_strategist': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        'campaign_manager': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        'lead_generation': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        'retention_specialist': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        'loyalty_manager': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        'affiliate_coordinator': 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=150&h=150&fit=crop&crop=face',
        'influencer_manager': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        'partnership_director': 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face',
        'event_planner': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        'pr_specialist': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face',
        
        'content_strategist': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        'copywriter': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        'graphic_designer': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        'video_producer': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        'photographer': 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        'illustrator': 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=150&h=150&fit=crop&crop=face',
        'animator': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        'web_designer': 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=150&h=150&fit=crop&crop=face',
        'mobile_designer': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        '3d_artist': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face'
    };
    
    // If agent key not found, return a random avatar from the collection
    if (!avatars[agentKey]) {
        const avatarKeys = Object.keys(avatars);
        const randomKey = avatarKeys[Math.floor(Math.random() * avatarKeys.length)];
        return avatars[randomKey];
    }
    
    return avatars[agentKey];
}

// Detailed agent information
const AGENT_DETAILS = {
    'young_professional': {
        name: 'Young Professional',
        description: 'Career-focused, tech-savvy, values efficiency',
        age: '25-35',
        platforms: 'LinkedIn, Instagram',
        values: 'Efficiency, Quality, ROI',
        clickRate: '70%',
        resonates: ['Professional Growth', 'Efficiency', 'ROI', 'Problem Solving', 'Quality'],
        deters: ['Overly Promotional', 'Hype', 'Unprofessional', 'Waste of Time'],
        feedback: '"I appreciate content that shows clear value and professional benefits. This feels genuine and addresses my career needs."'
    },
    'creative_freelancer': {
        name: 'Creative Freelancer',
        description: 'Artistic, independent, values authenticity',
        age: '22-30',
        platforms: 'Instagram, TikTok, Pinterest',
        values: 'Authenticity, Creative Expression',
        clickRate: '60%',
        resonates: ['Authentic Stories', 'Creative Expression', 'Human Connection', 'Visual Appeal', 'Emotional Resonance'],
        deters: ['Corporate Messaging', 'Generic Content', 'Salesy Approach', 'Impersonal'],
        feedback: '"I love when brands feel human and relatable. This content speaks to my creative soul and feels genuine."'
    },
    'small_business_owner': {
        name: 'Small Business Owner',
        description: 'Practical, budget-conscious, values ROI',
        age: '35-50',
        platforms: 'Facebook, LinkedIn',
        values: 'ROI, Practical Solutions',
        clickRate: '80%',
        resonates: ['Practical Benefits', 'Proven Results', 'ROI', 'Time Saving', 'Cost Effective'],
        deters: ['Hype', 'Expensive', 'Unproven', 'Complicated'],
        feedback: '"I need solutions that work and provide measurable results. This feels practical and business-focused."'
    },
    'tech_enthusiast': {
        name: 'Tech Enthusiast',
        description: 'Early adopter, values innovation',
        age: '18-28',
        platforms: 'Twitter, Reddit, YouTube',
        values: 'Innovation, Efficiency',
        clickRate: '75%',
        resonates: ['Innovation', 'Cutting-edge', 'Technical Specs', 'Efficiency', 'Transparency'],
        deters: ['Outdated', 'Basic', 'Unclear', 'Limited'],
        feedback: '"I\'m always excited about new tech. This feels innovative and transparent about capabilities."'
    },
    'parent_consumer': {
        name: 'Parent Consumer',
        description: 'Family-oriented, values safety & convenience',
        age: '30-45',
        platforms: 'Facebook, Instagram, Pinterest',
        values: 'Safety, Convenience',
        clickRate: '65%',
        resonates: ['Family Safe', 'Convenient', 'Time Saving', 'Cost Effective', 'Authentic'],
        deters: ['Unsafe', 'Complicated', 'Expensive', 'Fake'],
        feedback: '"As a parent, I need solutions that are safe and convenient for my family. This feels trustworthy."'
    },
    'senior_executive': {
        name: 'Senior Executive',
        description: 'Strategic thinker, values leadership & growth',
        age: '45-60',
        platforms: 'LinkedIn, Industry Publications',
        values: 'Strategic Thinking, Leadership',
        clickRate: '70%',
        resonates: ['Strategic Value', 'Leadership', 'Growth', 'Business Challenges', 'Credibility'],
        deters: ['Tactical', 'Basic', 'Uncredible', 'Superficial'],
        feedback: '"I look for content that demonstrates strategic thinking and addresses real business challenges."'
    },
    'millennial_shopper': {
        name: 'Millennial Shopper',
        description: 'Value-conscious, socially aware, mobile-first',
        age: '28-38',
        platforms: 'Instagram, TikTok, Mobile Apps',
        values: 'Authenticity, Social Responsibility',
        clickRate: '60%',
        resonates: ['Authentic', 'Socially Responsible', 'Good Value', 'Aligned Values', 'Mobile Friendly'],
        deters: ['Fake', 'Irresponsible', 'Overpriced', 'Misaligned'],
        feedback: '"I want brands that align with my values and feel genuine. This content resonates with my priorities."'
    },
    'entrepreneur': {
        name: 'Entrepreneur',
        description: 'Risk-taker, values innovation & growth',
        age: '25-45',
        platforms: 'LinkedIn, Twitter, Startup Communities',
        values: 'Innovation, Growth',
        clickRate: '80%',
        resonates: ['Innovation', 'Disruptive', 'Growth Potential', 'Bold', 'Inspiring'],
        deters: ['Conventional', 'Safe', 'Limited Growth', 'Boring'],
        feedback: '"I\'m drawn to content that challenges the status quo and inspires action. This feels bold and innovative."'
    },
    'digital_native': {
        name: 'Digital Native',
        description: 'Born online, values speed & connectivity',
        age: '18-25',
        platforms: 'TikTok, Instagram, Emerging Platforms',
        values: 'Speed, Connectivity',
        clickRate: '70%',
        resonates: ['Digital Native', 'Authentic', 'Fast', 'Engaging', 'Shareable'],
        deters: ['Forced', 'Fake', 'Slow', 'Boring', 'Unshareable'],
        feedback: '"This feels native to digital platforms and resonates with my generation. It\'s fast and engaging."'
    },
    'influencer': {
        name: 'Influencer',
        description: 'Content creator, values engagement & authenticity',
        age: '22-35',
        platforms: 'Multiple Social Platforms',
        values: 'Engagement, Authenticity',
        clickRate: '65%',
        resonates: ['Authentic', 'Engaging', 'Creative', 'Storytelling', 'Shareable'],
        deters: ['Fake', 'Boring', 'Uncreative', 'Unshareable'],
        feedback: '"I can tell this would resonate with my audience. It feels authentic and tells a compelling story."'
    }
};

class AskMeValidator {
    constructor() {
        this.uploadedImages = [];
        this.currentValidationResults = []; // Store current validation results
        this.initializeEventListeners();
        this.loadAgents();
        this.initializeAnimations();
    }

    initializeEventListeners() {
        // Chat input functionality
        this.initializeChatInput();
        
        // Image upload functionality
        this.initializeImageUpload();

        // Add sidebar interactions
        this.initializeSidebar();

        // Add agent info modal functionality
        this.initializeAgentInfoModal();
        
        // Add back to agents button functionality
        this.initializeBackToAgentsButton();
    }

    initializeChatInput() {
        const chatInput = document.getElementById('chatInput');
        const sendBtn = document.getElementById('sendBtn');

        if (chatInput && sendBtn) {
            // Auto-resize textarea
            chatInput.addEventListener('input', () => {
                this.adjustTextareaHeight(chatInput);
                this.updateSendButtonState();
            });

            // Handle Enter key (Shift+Enter for new line, Enter to send)
            chatInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.handleSendMessage();
                }
            });

            // Send button click
            sendBtn.addEventListener('click', () => {
                this.handleSendMessage();
            });
        }
    }

    initializeImageUpload() {
        const uploadBtn = document.getElementById('uploadBtn');
        const imageInput = document.getElementById('imageInput');

        if (uploadBtn && imageInput) {
            uploadBtn.addEventListener('click', () => {
                imageInput.click();
            });

            imageInput.addEventListener('change', (e) => {
                this.handleImageUpload(e.target.files);
            });
        }
    }

    adjustTextareaHeight(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }

    updateSendButtonState() {
        const chatInput = document.getElementById('chatInput');
        const sendBtn = document.getElementById('sendBtn');
        
        if (chatInput && sendBtn) {
            const hasText = chatInput.value.trim().length > 0;
            const hasImages = this.uploadedImages.length > 0;
            
            sendBtn.disabled = !(hasText || hasImages);
        }
    }

    handleImageUpload(files) {
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.addUploadedImage(e.target.result, file.name);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    addUploadedImage(imageData, fileName) {
        const imageId = 'img_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        
        this.uploadedImages.push({
            id: imageId,
            data: imageData,
            name: fileName
        });

        this.renderUploadedImages();
        this.updateSendButtonState();
    }

    removeUploadedImage(imageId) {
        this.uploadedImages = this.uploadedImages.filter(img => img.id !== imageId);
        this.renderUploadedImages();
        this.updateSendButtonState();
    }

    renderUploadedImages() {
        const container = document.getElementById('uploadedImages');
        if (!container) return;

        container.innerHTML = '';
        
        this.uploadedImages.forEach(image => {
            const imageElement = document.createElement('div');
            imageElement.className = 'uploaded-image';
            imageElement.innerHTML = `
                <img src="${image.data}" alt="${image.name}" title="${image.name}">
                <button type="button" class="remove-btn" data-image-id="${image.id}">
                    <i class="fas fa-times"></i>
                </button>
            `;

            // Add remove button event listener
            const removeBtn = imageElement.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                this.removeUploadedImage(image.id);
            });

            container.appendChild(imageElement);
        });
    }

    handleSendMessage() {
        const chatInput = document.getElementById('chatInput');
        const message = chatInput.value.trim();
        
        if (!message && this.uploadedImages.length === 0) {
            return;
        }

        // Clear input
        chatInput.value = '';
        this.adjustTextareaHeight(chatInput);
        
        // Clear images
        this.uploadedImages = [];
        this.renderUploadedImages();
        
        // Update button state
        this.updateSendButtonState();
        
        // Process the message (this would integrate with your existing validation logic)
        this.processContentValidation(message);
    }

    processContentValidation(content) {
        // Show loading modal
        this.showLoadingModal();
        
        // Simulate processing (using placeholder results - much faster)
        setTimeout(() => {
            this.hideLoadingModal();
            this.runSimulation(content);
        }, 800); // Reduced from 2000ms to 800ms for better UX
    }

    showLoadingModal() {
        const modal = document.getElementById('loadingModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    hideLoadingModal() {
        const modal = document.getElementById('loadingModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    async runSimulation(content) {
        try {
            // Reset agents grid
            this.resetAgentsGrid();
            
            // Simulate API call delay (reduced for placeholder results)
            await new Promise(resolve => setTimeout(resolve, 400)); // Reduced from 1000ms to 400ms
            
            // Generate mock results
            const results = await this.simulateAgents({
                text: content,
                image_description: this.uploadedImages.length > 0 ? `${this.uploadedImages.length} image(s) uploaded` : ''
            });
            
            // Display results
            this.displayResults(results);
            
            // Show success notification
            this.showNotification('Content validation completed successfully!', 'success');
            
        } catch (error) {
            console.error('Simulation error:', error);
            this.showNotification('An error occurred during validation. Please try again.', 'error');
        }
    }



    initializeSidebar() {
        // Sidebar menu interactions
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        sidebarItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                sidebarItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                // Show notification for non-active items
                if (!item.classList.contains('active') || !item.textContent.includes('Content Validation')) {
                    this.showNotification(`${item.textContent.trim()} feature coming soon!`, 'info');
                }
            });
        });
    }

    initializeAnimations() {
        // Add entrance animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe cards and sections
        document.querySelectorAll('.section-card, .sidebar-stats').forEach(el => {
            observer.observe(el);
        });
    }

    async loadAgents() {
        try {
            const response = await fetch('/personas');
            const data = await response.json();
            
            // Generate 50 agents with unique keys and names
            const expandedAgents = this.generateExpandedAgents(data.personas);
            this.renderAgentsGrid(expandedAgents);
        } catch (error) {
            console.error('Error loading agents:', error);
            this.showNotification('Failed to load agents. Please refresh the page.', 'error');
            
            // Fallback: try to render with default agents if API fails
            try {
                const fallbackAgents = this.generateExpandedAgents([]);
                this.renderAgentsGrid(fallbackAgents);
            } catch (fallbackError) {
                console.error('Fallback agent loading also failed:', fallbackError);
            }
        }
    }

    generateExpandedAgents(baseAgents) {
        const expandedAgents = [];
        const agentTypes = [
            'marketing_manager', 'data_analyst', 'content_creator', 'brand_strategist', 'social_media_expert',
            'seo_specialist', 'ppc_analyst', 'email_marketer', 'growth_hacker', 'conversion_optimizer',
            'ux_designer', 'ui_developer', 'product_manager', 'business_analyst', 'sales_director',
            'customer_success', 'market_researcher', 'competitive_analyst', 'brand_manager', 'creative_director',
            'digital_strategist', 'campaign_manager', 'lead_generation', 'retention_specialist', 'loyalty_manager',
            'affiliate_coordinator', 'influencer_manager', 'partnership_director', 'event_planner', 'pr_specialist',
            'content_strategist', 'copywriter', 'graphic_designer', 'video_producer', 'photographer',
            'illustrator', 'animator', 'web_designer', 'mobile_designer', '3d_artist', 'art_director',
            'creative_consultant', 'brand_consultant', 'marketing_consultant', 'growth_consultant'
        ];

        // Add base agents
        baseAgents.forEach(agent => {
            expandedAgents.push(agent);
        });

        // Add expanded agents
        agentTypes.forEach((type, index) => {
            if (expandedAgents.length < 28) {
                expandedAgents.push({
                    key: type,
                    name: type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                    description: `Professional ${type.split('_').join(' ')} with expertise in their field`
                });
            }
        });

        return expandedAgents.slice(0, 28);
    }

    renderAgentsGrid(agents) {
        const grid = document.getElementById('agentsGrid');
        if (!grid) return;

        grid.innerHTML = agents.map((agent, index) => `
            <div class="agent-avatar" data-agent="${agent.key}" title="Click to see ${agent.name} details">
                <img src="${getAgentAvatar(agent.key)}" alt="${agent.name}" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'" />
                <div class="avatar-status" style="display: none;">
                    <i class="fas fa-spinner fa-spin"></i>
                </div>
                <div class="click-result" style="display: none;">
                    <div class="click-indicator"></div>
                </div>
            </div>
        `).join('');

        // Add click event listeners to agent avatars
        if (typeof this.addAgentClickListeners === 'function') {
            this.addAgentClickListeners();
        } else {
            console.error('addAgentClickListeners method not found');
        }
    }

    addAgentClickListeners() {
        // Add click event listeners to agent avatars
        const agentAvatars = document.querySelectorAll('.agent-avatar');
        agentAvatars.forEach(avatar => {
            // Remove existing listeners to avoid duplicates
            if (avatar.clickHandler) {
                avatar.removeEventListener('click', avatar.clickHandler);
            }
            
            // Create new click handler
            avatar.clickHandler = () => {
                const agentKey = avatar.dataset.agent;
                if (agentKey) {
                    this.showAgentInfoModal(agentKey);
                }
            };
            
            // Add new listener
            avatar.addEventListener('click', avatar.clickHandler);
        });
    }

    async simulateAgents(content) {
        const response = await fetch('/simulate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(content)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json();
    }

    resetAgentsGrid() {
        const agentAvatars = document.querySelectorAll('.agent-avatar');
        agentAvatars.forEach(avatar => {
            const avatarStatus = avatar.querySelector('.avatar-status');
            const clickResult = avatar.querySelector('.click-result');
            
            if (avatarStatus) {
                avatarStatus.style.display = 'flex';
            }
            
            if (clickResult) {
                clickResult.style.display = 'none';
            }
        });

        // Hide summary
        const summary = document.getElementById('simulationSummary');
        if (summary) summary.style.display = 'none';
    }

    displayResults(data) {
        const { results, summary } = data;
        
        // Store current validation results for agent info modal
        this.currentValidationResults = results;
        
        // Update each agent card with animation delay
        results.forEach((result, index) => {
            setTimeout(() => {
                this.updateAgentCard(result);
            }, index * 200); // Stagger the animations
        });

        // Show summary after a delay
        setTimeout(() => {
            this.displaySummary(summary);
        }, results.length * 200 + 300);

        // Show results section and hide agents section after validation
        setTimeout(() => {
            const agentsSection = document.querySelector('.agents-section-fullscreen');
            const resultsSection = document.getElementById('resultsSection');
            
            if (agentsSection && resultsSection) {
                agentsSection.style.display = 'none';
                resultsSection.style.display = 'block';
                resultsSection.classList.add('fade-in');
                
                // Re-add click event listeners to agent avatars in results view
                if (typeof this.addAgentClickListeners === 'function') {
                    this.addAgentClickListeners();
                }
            }
        }, results.length * 200 + 500);
    }

    updateAgentCard(result) {
        const avatar = document.querySelector(`[data-agent="${result.persona}"]`);
        if (!avatar) return;

        const avatarStatus = avatar.querySelector('.avatar-status');
        const clickResult = avatar.querySelector('.click-result');

        // Hide avatar status
        if (avatarStatus) {
            avatarStatus.style.display = 'none';
        }

        // Update click result with colored circle
        if (clickResult) {
            const clickIndicator = clickResult.querySelector('.click-indicator');
            
            if (clickIndicator) {
                if (result.will_click) {
                    clickResult.className = 'click-result click-yes';
                    clickIndicator.style.backgroundColor = '#22c55e'; // Green
                    clickIndicator.style.borderColor = '#16a34a';
                    clickIndicator.style.border = '3px solid #16a34a';
                    console.log('Updated agent card to green:', result.persona, clickIndicator);
                } else {
                    clickResult.className = 'click-result click-no';
                    clickIndicator.style.backgroundColor = '#ef4444'; // Red
                    clickIndicator.style.borderColor = '#dc2626';
                    clickIndicator.style.border = '3px solid #dc2626';
                    console.log('Updated agent card to red:', result.persona, clickIndicator);
                }
                
                clickResult.style.display = 'flex';
            } else {
                console.error('Click indicator not found for agent:', result.persona);
            }
        } else {
            console.error('Click result not found for agent:', result.persona);
        }

        // Add animation
        avatar.classList.add('fade-in');
    }

    displaySummary(summary) {
        const summaryElement = document.getElementById('simulationSummary');
        if (!summaryElement) return;

        const totalPersonas = document.getElementById('totalPersonas');
        const willClickCount = document.getElementById('willClickCount');
        const averageConfidence = document.getElementById('averageConfidence');

        if (totalPersonas) totalPersonas.textContent = summary.total_personas;
        if (willClickCount) willClickCount.textContent = summary.will_click_count;
        if (averageConfidence) averageConfidence.textContent = `${summary.average_confidence.toFixed(1)}%`;

        summaryElement.style.display = 'block';
        summaryElement.classList.add('slide-in');
    }

    resetToAgentsView() {
        const agentsSection = document.querySelector('.agents-section-fullscreen');
        const resultsSection = document.getElementById('resultsSection');
        
        if (agentsSection && resultsSection) {
            resultsSection.style.display = 'none';
            agentsSection.style.display = 'block';
            agentsSection.classList.add('fade-in');
            
            // Reset agents grid
            this.resetAgentsGrid();
            
            // Re-add click listeners to agents
            if (typeof this.addAgentClickListeners === 'function') {
                this.addAgentClickListeners();
            }
        }
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(n => n.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        
        const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
        
        notification.innerHTML = `
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${type === 'success' ? '#dcfce7' : type === 'error' ? '#fee2e2' : '#dbeafe'};
            color: ${type === 'success' ? '#166534' : type === 'error' ? '#991b1b' : '#1e40af'};
            padding: 16px 20px;
            border-radius: 12px;
            border: 1px solid ${type === 'success' ? '#bbf7d0' : type === 'error' ? '#fecaca' : '#bfdbfe'};
            z-index: 1001;
            max-width: 400px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            gap: 12px;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Close button functionality
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    initializeAgentInfoModal() {
        // Close button functionality
        const closeBtn = document.getElementById('agentInfoClose');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.hideAgentInfoModal();
            });
        }

        // Close modal when clicking outside
        const modal = document.getElementById('agentInfoModal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.hideAgentInfoModal();
                }
            });
        }
    }

    initializeBackToAgentsButton() {
        const backBtn = document.getElementById('backToAgentsBtn');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                this.resetToAgentsView();
            });
        }
    }

    showAgentInfoModal(agentKey) {
        const agentData = AGENT_DETAILS[agentKey];
        if (!agentData) return;

        const modal = document.getElementById('agentInfoModal');
        if (!modal) return;

        // Populate modal content
        const avatar = document.getElementById('agentInfoAvatar');
        const name = document.getElementById('agentInfoName');
        const description = document.getElementById('agentInfoDescription');
        const age = document.getElementById('agentInfoAge');
        const platforms = document.getElementById('agentInfoPlatforms');
        const values = document.getElementById('agentInfoValues');
        const clickRate = document.getElementById('agentInfoClickRate');
        const resonates = document.getElementById('agentInfoResonates');
        const deters = document.getElementById('agentInfoDeters');
        const feedback = document.getElementById('agentInfoFeedback');
        const clickReasoningSection = document.getElementById('clickReasoningSection');
        const clickReasoning = document.getElementById('agentInfoClickReasoning');

        if (avatar) avatar.src = getAgentAvatar(agentKey);
        if (name) name.textContent = agentData.name || agentKey.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
        if (description) description.textContent = agentData.description || '';
        if (age) age.textContent = agentData.age || '';
        if (platforms) platforms.textContent = agentData.platforms || '';
        if (values) values.textContent = agentData.values || '';
        if (clickRate) clickRate.textContent = agentData.clickRate || '';
        
        if (resonates) {
            resonates.innerHTML = agentData.resonates.map(tag => 
                `<span class="tag">${tag}</span>`
            ).join('');
        }
        
        if (deters) {
            deters.innerHTML = agentData.deters.map(tag => 
                `<span class="tag">${tag}</span>`
            ).join('');
        }
        
        if (feedback) {
            feedback.textContent = agentData.feedback || '';
        }

        // Check if we have current validation results for this agent
        const currentResults = this.getCurrentValidationResults();
        const agentResult = currentResults.find(result => result.persona === agentKey);
        
        if (agentResult && clickReasoningSection && clickReasoning) {
            // Show click reasoning section
            clickReasoningSection.style.display = 'block';
            
            const willClick = agentResult.will_click;
            const reasoning = agentResult.reasoning;
            const confidence = agentResult.confidence;
            
            clickReasoning.innerHTML = `
                <div class="click-analysis-content">
                    <div class="click-indicator ${willClick ? 'will-click' : 'wont-click'}">
                        <div class="decision-circle ${willClick ? 'yes' : 'no'}"></div>
                    </div>
                    <div class="click-reasoning">
                        <strong>${willClick ? 'Would Click' : 'Would Not Click'}</strong><br>
                        ${reasoning}
                    </div>
                </div>
                <div class="click-confidence">
                    <span class="confidence-label">Confidence:</span>
                    <div class="confidence-bar">
                        <div class="confidence-fill" style="width: ${(confidence / 10) * 100}%"></div>
                    </div>
                    <span class="confidence-value">${confidence}/10</span>
                </div>
            `;
        } else if (clickReasoningSection) {
            // Hide click reasoning section if no current results
            clickReasoningSection.style.display = 'none';
        }

        // Show modal
        modal.style.display = 'flex';
    }

    getCurrentValidationResults() {
        // This method would return the current validation results
        // For now, we'll return an empty array - this would be populated
        // when the user runs a validation and we want to show the results
        return this.currentValidationResults;
    }

    hideAgentInfoModal() {
        const modal = document.getElementById('agentInfoModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AskMeValidator();
});

// Enhanced utility functions
document.addEventListener('DOMContentLoaded', () => {
    // Auto-resize textareas with smooth animation
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.max(120, this.scrollHeight) + 'px';
        });
    });

    // Add character count with better styling
    const creativeText = document.getElementById('creativeText');
    if (creativeText) {
        const charCount = document.createElement('div');
        charCount.className = 'char-count';
        charCount.style.cssText = `
            text-align: right;
            font-size: 12px;
            color: #64748b;
            margin-top: 8px;
            font-weight: 500;
        `;
        creativeText.parentNode.appendChild(charCount);

        const updateCharCount = () => {
            const count = creativeText.value.length;
            const maxCount = 1000;
            const percentage = (count / maxCount) * 100;
            
            charCount.textContent = `${count}/${maxCount} characters`;
            
            // Change color based on usage
            if (percentage > 80) {
                charCount.style.color = '#dc2626';
            } else if (percentage > 60) {
                charCount.style.color = '#f59e0b';
            } else {
                charCount.style.color = '#64748b';
            }
        };

        creativeText.addEventListener('input', updateCharCount);
        updateCharCount();
    }

    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Ctrl/Cmd + Enter to submit form
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const form = document.getElementById('creativeForm');
            if (form) {
                form.dispatchEvent(new Event('submit'));
            }
        }
        
        // Escape to close modals
        if (e.key === 'Escape') {
            const modal = document.getElementById('loadingModal');
            if (modal && modal.style.display === 'flex') {
                modal.style.display = 'none';
            }
        }
    });
});
