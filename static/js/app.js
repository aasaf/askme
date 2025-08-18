// AskMe - AI-Powered Marketing Validation Platform
// Helper function to get persona avatar images
function getPersonaAvatar(personaKey) {
    const avatars = {
        'young_professional': 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        'creative_freelancer': 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face',
        'small_business_owner': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        'tech_enthusiast': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
        'parent_consumer': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    };
    return avatars[personaKey] || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face';
}

class AskMeValidator {
    constructor() {
        this.initializeEventListeners();
        this.loadPersonas();
        this.initializeAnimations();
    }

    initializeEventListeners() {
        const form = document.getElementById('creativeForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Add navigation interactions
        this.initializeNavigation();
        
        // Add sidebar interactions
        this.initializeSidebar();
    }

    initializeNavigation() {
        // Navigation menu interactions
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });

        // User profile dropdown
        const userProfile = document.querySelector('.user-profile');
        if (userProfile) {
            userProfile.addEventListener('click', () => {
                this.showNotification('Profile menu coming soon!', 'info');
            });
        }

        // Action buttons
        const newProjectBtn = document.querySelector('.btn-secondary');
        if (newProjectBtn) {
            newProjectBtn.addEventListener('click', () => {
                this.showNotification('New project feature coming soon!', 'info');
            });
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

    async loadPersonas() {
        try {
            const response = await fetch('/personas');
            const data = await response.json();
            this.renderPersonasGrid(data.personas);
        } catch (error) {
            console.error('Error loading personas:', error);
            this.showNotification('Failed to load personas. Please refresh the page.', 'error');
        }
    }

    renderPersonasGrid(personas) {
        const grid = document.getElementById('personasGrid');
        if (!grid) return;

        grid.innerHTML = personas.map(persona => `
            <div class="persona-card" data-persona="${persona.key}">
                <div class="avatar-image">
                    <img src="${getPersonaAvatar(persona.key)}" alt="${persona.name}" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'" />
                </div>
                <div class="avatar-status" style="display: none;">
                    <i class="fas fa-spinner fa-spin"></i>
                </div>
                <div class="click-result" style="display: none;">
                    <div class="click-icon"></div>
                </div>
                
                <!-- Enhanced Popup -->
                <div class="persona-popup">
                    <div class="popup-header">
                        <div class="popup-avatar">
                            <img src="${getPersonaAvatar(persona.key)}" alt="${persona.name}" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'" />
                        </div>
                        <div class="popup-info">
                            <div class="popup-name">${persona.name}</div>
                            <div class="popup-description">${persona.description}</div>
                        </div>
                    </div>
                    <div class="popup-confidence">
                        <div class="confidence-label">Confidence Score:</div>
                        <div class="confidence-bar">
                            <div class="confidence-fill" style="width: 0%"></div>
                        </div>
                    </div>
                    <div class="popup-reasoning">
                        <div class="reasoning-label">AI Analysis:</div>
                        <div class="reasoning-content"></div>
                    </div>
                </div>
            </div>
        `).join('');

        // Add hover effects for popups
        this.initializePersonaPopups();
    }

    initializePersonaPopups() {
        const personaCards = document.querySelectorAll('.persona-card');
        personaCards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                const popup = card.querySelector('.persona-popup');
                if (popup) {
                    // Debug positioning
                    console.log('Card hovered:', card);
                    console.log('Popup found:', popup);
                    
                    // Use absolute positioning (CSS handles the positioning)
                    popup.style.position = 'absolute';
                    
                    // Ensure popup is visible above the card
                    popup.style.opacity = '1';
                    popup.style.visibility = 'visible';
                    popup.style.pointerEvents = 'auto';
                    
                    // Ensure popup is above navbar and other elements
                    popup.style.zIndex = '10000';
                    
                    // Debug final popup state
                    console.log('Popup visible:', popup.style.opacity, popup.style.visibility);
                }
            });

            card.addEventListener('mouseleave', () => {
                const popup = card.querySelector('.persona-popup');
                if (popup) {
                    popup.style.opacity = '0';
                    popup.style.visibility = 'hidden';
                    popup.style.pointerEvents = 'none';
                }
            });
        });

        // Remove resize handler since we're using absolute positioning
    }

    async handleFormSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const content = {
            text: formData.get('creativeText'),
            image_description: formData.get('imageDescription')
        };

        if (!content.text.trim()) {
            this.showNotification('Please enter creative content to validate.', 'error');
            return;
        }

        // Show loading state
        this.showLoadingModal();
        this.setButtonLoadingState(true);
        this.resetPersonasGrid();
        
        try {
            const results = await this.simulatePersonas(content);
            this.displayResults(results);
            this.showNotification('Validation completed successfully!', 'success');
        } catch (error) {
            console.error('Simulation error:', error);
            this.showNotification('An error occurred during validation. Please try again.', 'error');
        } finally {
            this.hideLoadingModal();
            this.setButtonLoadingState(false);
        }
    }

    setButtonLoadingState(loading) {
        const submitBtn = document.getElementById('simulateBtn');
        if (submitBtn) {
            if (loading) {
                submitBtn.classList.add('loading');
                submitBtn.disabled = true;
            } else {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        }
    }

    async simulatePersonas(content) {
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

    resetPersonasGrid() {
        const personaCards = document.querySelectorAll('.persona-card');
        personaCards.forEach(card => {
            const avatarStatus = card.querySelector('.avatar-status');
            const clickResult = card.querySelector('.click-result');
            
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
        
        // Update each persona card with animation delay
        results.forEach((result, index) => {
            setTimeout(() => {
                this.updatePersonaCard(result);
            }, index * 200); // Stagger the animations
        });

        // Show summary after a delay
        setTimeout(() => {
            this.displaySummary(summary);
        }, results.length * 200 + 300);
    }

    updatePersonaCard(result) {
        const card = document.querySelector(`[data-persona="${result.persona}"]`);
        if (!card) return;

        const avatarStatus = card.querySelector('.avatar-status');
        const clickResult = card.querySelector('.click-result');
        const popup = card.querySelector('.persona-popup');

        // Hide avatar status
        if (avatarStatus) {
            avatarStatus.style.display = 'none';
        }

        // Update click result
        if (clickResult) {
            const clickIcon = clickResult.querySelector('.click-icon');
            
            if (result.will_click) {
                clickIcon.innerHTML = '<i class="fas fa-check"></i>';
                clickResult.className = 'click-result click-yes';
            } else {
                clickIcon.innerHTML = '<i class="fas fa-times"></i>';
                clickResult.className = 'click-result click-no';
            }
            
            clickResult.style.display = 'flex';
        }

        // Update popup content
        if (popup) {
            const confidenceFill = popup.querySelector('.confidence-fill');
            const reasoningContent = popup.querySelector('.reasoning-content');
            
            if (confidenceFill) {
                confidenceFill.style.width = `${(result.confidence / 10) * 100}%`;
            }
            
            if (reasoningContent) {
                reasoningContent.textContent = result.reasoning;
            }
        }

        // Add animation
        card.classList.add('fade-in');
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

    showLoadingModal() {
        const modal = document.getElementById('loadingModal');
        if (modal) {
            modal.style.display = 'flex';
            
            // Start progress animation
            const progressFill = modal.querySelector('.progress-fill');
            if (progressFill) {
                progressFill.style.animation = 'progressFill 2s ease-in-out infinite';
            }
        }
    }

    hideLoadingModal() {
        const modal = document.getElementById('loadingModal');
        if (modal) {
            modal.style.display = 'none';
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
