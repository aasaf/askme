// Bixify - AI-Powered Marketing Validation Platform
// Network Graph Visualization with Black Mode UI

// Helper function to get agent avatar images
function getAgentAvatar(agentKey) {
    const avatars = {
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
        'data_analyst': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
        'content_creator': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=face',
        'brand_strategist': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face',
        'social_media_expert': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop&crop=face',
        'seo_specialist': 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=150&h=150&fit=crop&crop=face',
        'ppc_analyst': 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face',
        'email_marketer': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
        'growth_hacker': 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=150&h=150&fit=crop&crop=face',
        'conversion_optimizer': 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=150&h=150&fit=crop&crop=face',
        'ux_designer': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
        'ui_developer': 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
        'product_manager': 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face',
        'business_analyst': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
        'sales_director': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        'customer_success': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
        'market_researcher': 'https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=150&h=150&fit=crop&crop=face',
        'competitive_analyst': 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=150&h=150&fit=crop&crop=face',
        'brand_manager': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        'creative_director': 'https://images.unsplash.com/photo-1499996860823-5214fccb8fa8?w=150&h=150&fit=crop&crop=face',
        'digital_strategist': 'https://images.unsplash.com/photo-1489424731084-a5d8b49a3d95?w=150&h=150&fit=crop&crop=face',
        'campaign_manager': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
        'lead_generation': 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
        'retention_specialist': 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
        'loyalty_manager': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
        'affiliate_coordinator': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        'influencer_manager': 'https://images.unsplash.com/photo-1542596594-649edbc13630?w=150&h=150&fit=crop&crop=face',
        'partnership_director': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
        'event_planner': 'https://images.unsplash.com/photo-1488426862026-3ee34dd7df49?w=150&h=150&fit=crop&crop=face',
        'pr_specialist': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
        'content_strategist': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face',
        'copywriter': 'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=150&h=150&fit=crop&crop=face',
        'graphic_designer': 'https://images.unsplash.com/photo-1554306274-f23873003529?w=150&h=150&fit=crop&crop=face',
        'video_producer': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face',
        'photographer': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
        'illustrator': 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face',
        'animator': 'https://images.unsplash.com/photo-1535874681523-38c6d25262aa?w=150&h=150&fit=crop&crop=face',
        'web_designer': 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
        'mobile_designer': 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
        '3d_artist': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face'
    };
    
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
    }
};

// Node colors array
const NODE_COLORS = [
    '#3b82f6',
    '#a855f7',
    '#14b8a6',
    '#f97316',
    '#ef4444'
];

// Network Graph Class
class NetworkGraph {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.edges = [];
        this.selectedNode = null;
        this.animationId = null;
        this.animationEnabled = true; // Enable animation for subtle movement
        this.simulating = false; // Track if simulation is in progress
        this.simulationStartTime = 0; // Track simulation start time
        this.animationPhase = 'idle'; // 'idle', 'loading', 'updating', 'complete'
        
        this.resizeCanvas();
        window.addEventListener('resize', () => {
            this.resizeCanvas();
        });
        
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleHover(e));
        
        this.initNetwork();
        this.startAnimation(); // Start animation loop
    }
    
    resizeCanvas() {
        const container = this.canvas.parentElement;
        if (!container) return;
        
        // Calculate available width: window width minus sidebar (280px)
        // When results panel is visible, also subtract its width (400px) to center the network
        const sidebarWidth = 280;
        const resultsPanelWidth = 400;
        const resultsPanel = document.getElementById('resultsPanel');
        const isResultsVisible = resultsPanel && resultsPanel.style.display !== 'none';
        
        // Center network between sidebars when results panel is visible
        const availableWidth = isResultsVisible 
            ? window.innerWidth - sidebarWidth - resultsPanelWidth
            : window.innerWidth - sidebarWidth;
        const availableHeight = window.innerHeight;
        
        // Store old dimensions BEFORE any changes (in CSS pixels)
        const oldWidth = this.canvas.width || availableWidth;
        const oldHeight = this.canvas.height || availableHeight;
        
        // Only resize if dimensions actually changed significantly (more than 10px difference)
        // This prevents unnecessary resizing when results panel appears/disappears
        const widthDiff = Math.abs(oldWidth - availableWidth);
        const heightDiff = Math.abs(oldHeight - availableHeight);
        
        if (widthDiff < 10 && heightDiff < 10 && this.nodes.length > 0) {
            // No significant change - just redraw
            this.draw();
            return;
        }
        
        // Set canvas size directly (1:1 with CSS pixels to avoid scaling issues)
        // This ensures node sizes remain constant visually
        this.canvas.width = availableWidth;
        this.canvas.height = availableHeight;
        
        // If this is the first initialization, create nodes
        if (this.nodes.length === 0) {
            this.initNetwork();
        } else {
            // Canvas was resized - reposition nodes but PRESERVE all properties including radius
            if (oldWidth > 0 && oldHeight > 0 && (widthDiff >= 10 || heightDiff >= 10)) {
                this.repositionNodes(oldWidth, oldHeight, availableWidth, availableHeight);
            }
        }
        
        this.draw();
    }
    
    repositionNodes(oldWidth, oldHeight, newWidth, newHeight) {
        // Reposition nodes proportionally when canvas resizes
        // CRITICAL: Only change positions, NEVER change radius or any other node properties
        const scaleX = newWidth / oldWidth;
        const scaleY = newHeight / oldHeight;
        
        this.nodes.forEach(node => {
            // Store original radius if not already stored
            if (!node.originalRadius) {
                node.originalRadius = node.radius;
            }
            
            // Scale positions proportionally
            node.x = node.x * scaleX;
            node.y = node.y * scaleY;
            
            // Ensure nodes stay in bounds
            node.x = Math.max(node.radius, Math.min(newWidth - node.radius, node.x));
            node.y = Math.max(node.radius, Math.min(newHeight - node.radius, node.y));
            
            // CRITICAL: Never change radius - restore original if somehow modified
            if (node.originalRadius && node.radius !== node.originalRadius) {
                node.radius = node.originalRadius;
            }
        });
        
        // Recreate edges based on new positions (but don't change node properties)
        this.edges = [];
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(this.nodes[i].x - this.nodes[j].x, 2) +
                    Math.pow(this.nodes[i].y - this.nodes[j].y, 2)
                );
                
                // Connect nodes that are close to each other (within 150px)
                // More connections - 80% chance to connect nearby nodes
                if (distance < 150 && Math.random() > 0.2) {
                    this.edges.push({
                        source: this.nodes[i],
                        target: this.nodes[j]
                    });
                }
            }
        }
    }
    
    initNetwork() {
        // Create fewer nodes with more connections
        const nodeCount = 80; // Fewer nodes for clearer network
        
        // Use a grid-like distribution with some randomness for natural look
        const cols = Math.ceil(Math.sqrt(nodeCount * (this.canvas.width / this.canvas.height)));
        const rows = Math.ceil(nodeCount / cols);
        const cellWidth = this.canvas.width / cols;
        const cellHeight = this.canvas.height / rows;
        
        for (let i = 0; i < nodeCount; i++) {
            const color = NODE_COLORS[Math.floor(Math.random() * NODE_COLORS.length)];
            const col = i % cols;
            const row = Math.floor(i / cols);
            
            // Add randomness to grid positions for natural distribution
            const x = col * cellWidth + (Math.random() - 0.5) * cellWidth * 0.6 + cellWidth / 2;
            const y = row * cellHeight + (Math.random() - 0.5) * cellHeight * 0.6 + cellHeight / 2;
            
            // Keep nodes in bounds
            const finalX = Math.max(6, Math.min(this.canvas.width - 6, x));
            const finalY = Math.max(6, Math.min(this.canvas.height - 6, y));
            
            const nodeRadius = 4 + Math.random() * 2; // Small nodes (4-6px) - fixed size
            // Add subtle random velocity for gentle animation
            const speed = 0.1 + Math.random() * 0.1; // Very slow movement
            const angle = Math.random() * Math.PI * 2;
            this.nodes.push({
                id: i,
                x: finalX,
                y: finalY,
                vx: Math.cos(angle) * speed, // Subtle horizontal movement
                vy: Math.sin(angle) * speed, // Subtle vertical movement
                radius: nodeRadius, // Fixed size - never changes
                originalRadius: nodeRadius, // Store original for safety
                color: color,
                agentKey: Object.keys(AGENT_DETAILS)[i % Object.keys(AGENT_DETAILS).length]
            });
        }
        
        // Create edges (connections between nodes) - create a dense network
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const distance = Math.sqrt(
                    Math.pow(this.nodes[i].x - this.nodes[j].x, 2) +
                    Math.pow(this.nodes[i].y - this.nodes[j].y, 2)
                );
                
                // Connect nodes that are close to each other (within 150px)
                // More connections - 80% chance to connect nearby nodes
                if (distance < 150 && Math.random() > 0.2) {
                    this.edges.push({
                        source: this.nodes[i],
                        target: this.nodes[j]
                    });
                }
            }
        }
    }
    
    update() {
        // Only update if animation is enabled
        if (!this.animationEnabled) return;
        
        // Update node positions (simple physics simulation with gentle movement)
        this.nodes.forEach(node => {
            // Store original position bounds for gentle oscillation
            if (!node.originalX) {
                node.originalX = node.x;
                node.originalY = node.y;
                node.maxDistance = 20 + Math.random() * 30; // Max distance from origin (20-50px)
            }
            
            // Update position
            node.x += node.vx;
            node.y += node.vy;
            
            // Calculate distance from original position
            const distance = Math.sqrt(
                Math.pow(node.x - node.originalX, 2) + 
                Math.pow(node.y - node.originalY, 2)
            );
            
            // If too far from original position, reverse direction
            if (distance > node.maxDistance) {
                const angle = Math.atan2(node.y - node.originalY, node.x - node.originalX);
                node.vx = -Math.cos(angle) * (0.1 + Math.random() * 0.1);
                node.vy = -Math.sin(angle) * (0.1 + Math.random() * 0.1);
            }
            
            // Bounce off canvas edges
            if (node.x < node.radius || node.x > this.canvas.width - node.radius) {
                node.vx *= -1;
            }
            if (node.y < node.radius || node.y > this.canvas.height - node.radius) {
                node.vy *= -1;
            }
            
            // Keep nodes in bounds
            node.x = Math.max(node.radius, Math.min(this.canvas.width - node.radius, node.x));
            node.y = Math.max(node.radius, Math.min(this.canvas.height - node.radius, node.y));
        });
    }
    
    stopAnimation() {
        this.animationEnabled = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }
    
    startAnimation() {
        this.animationEnabled = true;
        if (!this.animationId) {
            this.animate();
        }
    }
    
    startSimulation() {
        this.simulating = true;
        this.animationPhase = 'loading';
        this.simulationStartTime = Date.now();
    }
    
    stopSimulation() {
        this.simulating = false;
        this.animationPhase = 'idle';
        this.simulationStartTime = 0;
    }
    
    draw() {
        // Clear entire canvas (in device pixels)
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Draw edges with gradient - more visible connections
        this.edges.forEach(edge => {
            const gradient = this.ctx.createLinearGradient(
                edge.source.x, edge.source.y,
                edge.target.x, edge.target.y
            );
            
            // Animate edges during simulation - more visible pulsing
            let edgeOpacity = 0.25;
            if (this.animationPhase === 'loading' || this.animationPhase === 'updating') {
                const time = Date.now() - this.simulationStartTime;
                // Stronger pulse for all edges
                const pulse = Math.sin(time / 300) * 0.25 + 0.25;
                edgeOpacity = 0.2 + pulse;
            }
            
            gradient.addColorStop(0, `rgba(255, 255, 255, ${edgeOpacity})`);
            gradient.addColorStop(0.5, `rgba(255, 255, 255, ${edgeOpacity * 0.6})`);
            gradient.addColorStop(1, `rgba(255, 255, 255, ${edgeOpacity * 0.4})`);
            
            this.ctx.strokeStyle = gradient;
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(edge.source.x, edge.source.y);
            this.ctx.lineTo(edge.target.x, edge.target.y);
            this.ctx.stroke();
        });
        
        // Draw nodes (colored circles without icons)
        this.nodes.forEach((node, index) => {
            // Ensure radius never changes - restore original if modified
            if (node.originalRadius && node.radius !== node.originalRadius) {
                node.radius = node.originalRadius;
            }
            
            const nodeRadius = node.radius;
            let drawRadius = nodeRadius;
            let glowIntensity = 8;
            let pulseIntensity = 0;
            
            // Animation effects during simulation - ALL nodes animate
            if (this.animationPhase === 'loading') {
                const time = Date.now() - this.simulationStartTime;
                // All nodes pulse together with slight variation for wave effect
                const waveOffset = (index * 0.1) % (Math.PI * 2);
                const pulse = Math.sin((time / 400) + waveOffset) * 0.4 + 0.6;
                pulseIntensity = (1 - pulse) * 20;
                drawRadius = nodeRadius * (1 + (1 - pulse) * 0.4);
                glowIntensity = 12 + pulseIntensity;
            } else if (this.animationPhase === 'updating') {
                // Pulsing effect when updating colors - all nodes
                const time = Date.now() - this.simulationStartTime;
                const waveOffset = (index * 0.1) % (Math.PI * 2);
                const pulse = Math.sin((time / 200) + waveOffset) * 0.3 + 0.7;
                pulseIntensity = (1 - pulse) * 15;
                drawRadius = nodeRadius * (1 + (1 - pulse) * 0.3);
                glowIntensity = 10 + pulseIntensity;
            }
            
            // Draw glow effect for selected node or during simulation
            if (this.selectedNode === node || this.animationPhase !== 'idle') {
                this.ctx.shadowBlur = glowIntensity;
                this.ctx.shadowColor = node.color;
            } else {
                this.ctx.shadowBlur = 8;
                this.ctx.shadowColor = node.color;
            }
            
            // Draw node circle with gradient
            const gradient = this.ctx.createRadialGradient(
                node.x - drawRadius * 0.3, node.y - drawRadius * 0.3, 0,
                node.x, node.y, drawRadius
            );
            
            // Brighten color during simulation
            let baseColor = node.color;
            if (this.animationPhase === 'loading' || this.animationPhase === 'updating') {
                baseColor = this.lightenColor(node.color, 15);
            }
            
            gradient.addColorStop(0, this.lightenColor(baseColor, 20));
            gradient.addColorStop(1, baseColor);
            
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, drawRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = gradient;
            this.ctx.fill();
            
            // Draw border with glow
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            this.ctx.lineWidth = 1.5;
            this.ctx.stroke();
            
            // Draw pulsing ring during simulation - all nodes get rings
            if (this.animationPhase === 'loading' || this.animationPhase === 'updating') {
                const time = Date.now() - this.simulationStartTime;
                // Create wave effect with slight offset per node
                const waveOffset = (index * 0.15) % 1000;
                const ringProgress = ((time - waveOffset) % 1200) / 1200;
                if (ringProgress < 0.6) {
                    const ringRadius = drawRadius + ringProgress * 25;
                    const ringOpacity = (0.6 - ringProgress) * 0.8;
                    this.ctx.strokeStyle = `rgba(168, 85, 247, ${ringOpacity})`;
                    this.ctx.lineWidth = 2;
                    this.ctx.beginPath();
                    this.ctx.arc(node.x, node.y, ringRadius, 0, Math.PI * 2);
                    this.ctx.stroke();
                }
            }
            
            // Reset shadow
            this.ctx.shadowBlur = 0;
        });
    }
    
    lightenColor(color, percent) {
        const num = parseInt(color.replace("#",""), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, (num >> 16) + amt);
        const G = Math.min(255, (num >> 8 & 0x00FF) + amt);
        const B = Math.min(255, (num & 0x0000FF) + amt);
        return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
    }
    
    animate() {
        this.update();
        this.draw();
        // Continue animation loop
        if (this.animationEnabled) {
            this.animationId = requestAnimationFrame(() => this.animate());
        } else {
            this.animationId = null;
        }
    }
    
    handleClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        // Get click coordinates relative to canvas
        // Account for any CSS scaling
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        // Find clicked node - check with a slightly larger hit area for easier clicking
        for (let node of this.nodes) {
            const distance = Math.sqrt(
                Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2)
            );
            
            // Use a slightly larger hit area (1.5x radius) for easier clicking
            const hitRadius = node.radius * 1.5;
            
            if (distance < hitRadius) {
                this.selectedNode = node;
                // Trigger node details modal via validator
                if (window.bixifyValidator) {
                    window.bixifyValidator.showNodeDetails(node);
                }
                return;
            }
        }
        
        this.selectedNode = null;
    }
    
    handleHover(e) {
        const rect = this.canvas.getBoundingClientRect();
        // Account for CSS scaling
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        // Change cursor if hovering over node
        let hovering = false;
        for (let node of this.nodes) {
            const distance = Math.sqrt(
                Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2)
            );
            
            // Use slightly larger hit area for hover detection too
            const hitRadius = node.radius * 1.5;
            
            if (distance < hitRadius) {
                hovering = true;
                break;
            }
        }
        
        this.canvas.style.cursor = hovering ? 'pointer' : 'default';
    }
}

// Main Bixify Validator Class
class BixifyValidator {
    constructor() {
        this.uploadedImages = [];
        this.currentValidationResults = [];
        this.networkGraph = null;
        this.currentSelectedAgentKey = null;
        this.currentFollowUpAgent = null;
        
        this.initializeEventListeners();
        this.initializeNetworkGraph();
    }
    
    initializeEventListeners() {
        // Chat input functionality
        const chatInput = document.getElementById('chatInput');
        const simulateBtn = document.getElementById('simulateBtn');
        const imageInput = document.getElementById('imageInput');
        
        if (chatInput) {
            chatInput.addEventListener('input', () => {
                this.adjustTextareaHeight(chatInput);
            });
            
            chatInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                    this.handleSimulate();
                }
            });
        }
        
        if (simulateBtn) {
            simulateBtn.addEventListener('click', () => this.handleSimulate());
        }
        
        if (imageInput) {
            imageInput.addEventListener('change', (e) => {
                this.handleImageUpload(e.target.files);
            });
        }
        
        // Share button
        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                this.shareResults();
            });
        }
        
        // Generate variants button
        const generateVariantsBtn = document.getElementById('generateVariantsBtn');
        if (generateVariantsBtn) {
            generateVariantsBtn.addEventListener('click', () => {
                this.regenerateVariants();
            });
        }
        
        // Close results button
        const closeResultsBtn = document.getElementById('closeResultsBtn');
        if (closeResultsBtn) {
            closeResultsBtn.addEventListener('click', () => {
                this.closeResultsPanel();
            });
        }
        
        // Target Audience Modal
        this.initializeTargetAudienceModal();
        
        // Node Details Modal
        this.initializeNodeDetailsModal();
        
        // Sidebar Tabs
        this.initializeSidebarTabs();
        
    }
    
    initializeSidebarTabs() {
        const tabs = document.querySelectorAll('.sidebar-tab');
        const tabContents = document.querySelectorAll('.sidebar-tab-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const targetTab = tab.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Show corresponding content
                const targetContent = document.getElementById(targetTab + 'Tab');
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
        
        // Make test items clickable
        const testItems = document.querySelectorAll('.test-item');
        testItems.forEach(item => {
            item.addEventListener('click', () => {
                // In a real app, this would load the test results
                this.showNotification('Loading test results...', 'info');
            });
        });
    }
    
    initializeTargetAudienceModal() {
        // Target Audience button click
        const targetAudienceBtn = document.getElementById('targetAudienceBtn');
        if (targetAudienceBtn) {
            targetAudienceBtn.addEventListener('click', () => {
                this.showTargetAudienceModal();
            });
        }
        
        // Close target audience modal
        const targetAudienceClose = document.getElementById('targetAudienceClose');
        if (targetAudienceClose) {
            targetAudienceClose.addEventListener('click', () => {
                this.hideTargetAudienceModal();
            });
        }
        
        // Create Target Audience button
        const createTargetAudienceBtn = document.getElementById('createTargetAudienceBtn');
        if (createTargetAudienceBtn) {
            createTargetAudienceBtn.addEventListener('click', () => {
                this.showCreateTargetAudienceModal();
            });
        }
        
        // Back button in create modal
        const createAudienceBack = document.getElementById('createAudienceBack');
        if (createAudienceBack) {
            createAudienceBack.addEventListener('click', () => {
                this.hideCreateTargetAudienceModal();
                this.showTargetAudienceModal();
            });
        }
        
        // Create Society button
        const createSocietyBtn = document.getElementById('createSocietyBtn');
        if (createSocietyBtn) {
            createSocietyBtn.addEventListener('click', () => {
                this.handleCreateSociety();
            });
        }
        
        // Existing audience items click
        const audienceItems = document.querySelectorAll('.audience-item');
        audienceItems.forEach(item => {
            item.addEventListener('click', () => {
                const audienceName = item.getAttribute('data-audience');
                this.selectTargetAudience(audienceName);
            });
        });
        
        // Close modal when clicking outside (but not when clicking inside modal content)
        const targetAudienceModal = document.getElementById('targetAudienceModal');
        if (targetAudienceModal) {
            targetAudienceModal.addEventListener('click', (e) => {
                if (e.target === targetAudienceModal) {
                    this.hideTargetAudienceModal();
                }
            });
            
            // Prevent clicks inside modal-content from closing the modal
            const modalContent = targetAudienceModal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }
        }
            
        const createTargetAudienceModal = document.getElementById('createTargetAudienceModal');
        if (createTargetAudienceModal) {
            createTargetAudienceModal.addEventListener('click', (e) => {
                if (e.target === createTargetAudienceModal) {
                    this.hideCreateTargetAudienceModal();
                }
            });
            
            // Prevent clicks inside modal-content from closing the modal
            const modalContent = createTargetAudienceModal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }
        }
    }
    
    showTargetAudienceModal() {
        const modal = document.getElementById('targetAudienceModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }
    
    hideTargetAudienceModal() {
        const modal = document.getElementById('targetAudienceModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
    
    showCreateTargetAudienceModal() {
        this.hideTargetAudienceModal();
        const modal = document.getElementById('createTargetAudienceModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }
    
    hideCreateTargetAudienceModal() {
        const modal = document.getElementById('createTargetAudienceModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
    
    selectTargetAudience(audienceName) {
        const selectedElement = document.getElementById('selectedTargetAudience');
        if (selectedElement) {
            selectedElement.textContent = audienceName;
        }
        this.hideTargetAudienceModal();
    }
    
    handleCreateSociety() {
        const input = document.getElementById('createAudienceInput');
        const description = input?.value.trim();
        
        if (!description) {
            this.showNotification('Please enter a description for your audince', 'error');
            return;
        }
        
        // Here you would typically send the data to your backend
        // For now, we'll just show a success message and update the UI
        this.showNotification('Audience created successfully!', 'success');
        
        // Update the selected target audience
        const selectedElement = document.getElementById('selectedTargetAudience');
        if (selectedElement) {
            // Extract a short name from the description
            const shortName = description.length > 30 ? description.substring(0, 30) + '...' : description;
            selectedElement.textContent = shortName;
        }
        
        // Clear input and close modal
        if (input) {
            input.value = '';
        }
        this.hideCreateTargetAudienceModal();
    }
    
    
    closeResultsPanel() {
        const resultsPanel = document.getElementById('resultsPanel');
        const chatInputContainer = document.getElementById('chatInputContainer');
        const networkContentArea = document.querySelector('.network-content-area');
        
        if (resultsPanel) {
            resultsPanel.style.display = 'none';
        }
        
        if (chatInputContainer) {
            chatInputContainer.classList.remove('hidden');
        }
        
        // Remove margin adjustment
        if (networkContentArea) {
            networkContentArea.classList.remove('has-results');
        }
        
        // DON'T resize canvas - just redraw to ensure everything is visible
        // The network should remain unchanged visually
        // Animation should already be running, but ensure it continues
        if (this.networkGraph) {
            this.networkGraph.draw();
            if (!this.networkGraph.animationEnabled) {
                this.networkGraph.startAnimation();
            }
        }
    }
    
    shareResults() {
        if (navigator.share) {
            navigator.share({
                title: 'Bixify Validation Results',
                text: 'Check out my content validation results!',
                url: window.location.href
            }).catch(err => {
                this.showNotification('Results copied to clipboard!', 'success');
            });
        } else {
            // Fallback: copy to clipboard
            const resultsText = `Bixify Validation Results\nImpact Score: ${document.getElementById('impactScore')?.textContent || 'N/A'}`;
            navigator.clipboard.writeText(resultsText).then(() => {
                this.showNotification('Results copied to clipboard!', 'success');
            });
        }
    }
    
    regenerateVariants() {
        const variantInstructions = document.getElementById('variantInstructions')?.value || '';
        if (this.currentValidationResults && this.currentValidationResults.length > 0) {
            this.generateVariants(this.currentValidationResults);
            this.showNotification('New variants generated!', 'success');
        }
    }
    
    initializeNetworkGraph() {
        this.networkGraph = new NetworkGraph('networkCanvas');
    }
    
    adjustTextareaHeight(textarea) {
        textarea.style.height = 'auto';
        const scrollHeight = textarea.scrollHeight;
        const newHeight = Math.min(scrollHeight, 200);
        textarea.style.height = newHeight + 'px';
    }
    
    handleImageUpload(files) {
        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.uploadedImages.push({
                        id: 'img_' + Date.now(),
                        data: e.target.result,
                        name: file.name
                    });
                    this.showNotification('Image uploaded successfully', 'success');
                };
                reader.readAsDataURL(file);
            }
        });
    }
    
    async handleSimulate() {
        const chatInput = document.getElementById('chatInput');
        const message = chatInput?.value.trim();
        
        if (!message && this.uploadedImages.length === 0) {
            this.showNotification('Please enter some content or upload an image', 'error');
            return;
        }
        
        // Show loading overlay and lock chat input
        this.showSimulationLoading();
        
        // Start simulation animations
        if (this.networkGraph) {
            this.networkGraph.startSimulation();
        }
        
        try {
            // Add minimum delay to show loading animation (at least 1.5 seconds)
            const minDelay = 1500;
            const startTime = Date.now();
            
            const results = await this.simulateAgents({
                text: message || '',
                image_description: this.uploadedImages.length > 0 ? `${this.uploadedImages.length} image(s) uploaded` : ''
            });
            
            // Ensure minimum delay has passed
            const elapsed = Date.now() - startTime;
            if (elapsed < minDelay) {
                await new Promise(resolve => setTimeout(resolve, minDelay - elapsed));
            }
            
            this.currentValidationResults = results.results;
            
            // Update network graph with results (with animation)
            // Loading overlay will be hidden after results are displayed in updateNetworkWithResults
            if (this.networkGraph) {
                await this.updateNetworkWithResults(results.results);
            }
            
        } catch (error) {
            console.error('Simulation error:', error);
            this.showNotification('An error occurred during validation. Please try again.', 'error');
            
            // Stop simulation animations on error
            if (this.networkGraph) {
                this.networkGraph.stopSimulation();
            }
            
            // Hide loading overlay on error
            this.hideSimulationLoading();
        }
    }
    
    showSimulationLoading() {
        const loadingOverlay = document.getElementById('chatLoadingOverlay');
        const chatInputContainer = document.getElementById('chatInputContainer');
        const chatInput = document.getElementById('chatInput');
        const simulateBtn = document.getElementById('simulateBtn');
        const allActionBtns = document.querySelectorAll('.action-btn');
        
        if (loadingOverlay) {
            loadingOverlay.style.display = 'flex';
        }
        
        // Disable chat input
        if (chatInput) {
            chatInput.disabled = true;
            chatInput.style.opacity = '0.5';
            chatInput.style.cursor = 'not-allowed';
        }
        
        // Disable all action buttons
        allActionBtns.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
            btn.style.pointerEvents = 'none';
        });
        
        // Add disabled class to container
        if (chatInputContainer) {
            chatInputContainer.classList.add('simulating');
        }
    }
    
    hideSimulationLoading() {
        const loadingOverlay = document.getElementById('chatLoadingOverlay');
        const chatInputContainer = document.getElementById('chatInputContainer');
        const chatInput = document.getElementById('chatInput');
        const allActionBtns = document.querySelectorAll('.action-btn');
        
        if (loadingOverlay) {
            loadingOverlay.style.display = 'none';
        }
        
        // Re-enable chat input
        if (chatInput) {
            chatInput.disabled = false;
            chatInput.style.opacity = '1';
            chatInput.style.cursor = 'text';
        }
        
        // Re-enable all action buttons
        allActionBtns.forEach(btn => {
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
            btn.style.pointerEvents = 'auto';
        });
        
        // Remove disabled class from container
        if (chatInputContainer) {
            chatInputContainer.classList.remove('simulating');
        }
    }
    
    async updateNetworkWithResults(results) {
        // Update node colors based on validation results (ONLY colors, NOT sizes)
        if (!this.networkGraph) return;
        
        // Calculate metrics to match results panel exactly
        const total = results.length;
        const wouldClick = results.filter(r => r.will_click).length;
        const clickPercent = Math.round((wouldClick / total) * 100);
        
        // Calculate impact score (same formula as in displayResultsPanel)
        const avgConfidence = results.reduce((sum, r) => sum + r.confidence, 0) / total;
        const confidenceAdjustment = ((avgConfidence - 5) / 5) * 2; // Small adjustment: ±2 based on confidence
        const impactScore = Math.max(0, Math.min(100, Math.round(clickPercent * 0.9 + confidenceAdjustment)));
        
        // Calculate exact counts for all nodes based on impact score
        // Impact score 2/100 = 2 green dots out of 100 nodes (or proportionally)
        const totalNodes = this.networkGraph.nodes.length;
        const greenCount = Math.round(totalNodes * (impactScore / 100)); // Green dots = impact score percentage
        const redCount = totalNodes - greenCount; // Would Skip (remaining nodes)
        
        // Shuffle nodes randomly to distribute colors evenly
        const shuffledNodes = [...this.networkGraph.nodes].sort(() => Math.random() - 0.5);
        
        // Switch to updating phase
        this.networkGraph.animationPhase = 'updating';
        this.networkGraph.simulationStartTime = Date.now(); // Reset timer for update phase
        
        // Assign colors to match the exact percentages - only red and green
        shuffledNodes.forEach((node, index) => {
            let targetColor;
            if (index < greenCount) {
                // Green for would click
                targetColor = '#22c55e';
            } else {
                // Red for would skip
                targetColor = '#ef4444';
            }
            
            node.targetColor = targetColor;
            node.transitionStartTime = Date.now();
            node.transitionDuration = 800; // 800ms transition
            node.originalColor = node.color;
        });
        
        // Update nodes in batches with delay for visual effect
        const batchSize = 10;
        const delayBetweenBatches = 50;
        const nodesToUpdate = shuffledNodes;
        
        for (let i = 0; i < nodesToUpdate.length; i += batchSize) {
            const batch = nodesToUpdate.slice(i, i + batchSize);
            
            // Wait before next batch
            if (i + batchSize < nodesToUpdate.length) {
                await new Promise(resolve => setTimeout(resolve, delayBetweenBatches));
            }
        }
        
        // Animate color transitions
        const transitionDuration = 1000;
        const startTime = Date.now();
        
        const animateTransition = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / transitionDuration, 1);
            
            this.networkGraph.nodes.forEach(node => {
                if (node.targetColor && node.originalColor) {
                    const t = this.easeInOutCubic(progress);
                    node.color = this.interpolateColor(node.originalColor, node.targetColor, t);
                }
            });
            
            this.networkGraph.draw();
            
            if (progress < 1) {
                requestAnimationFrame(animateTransition);
            } else {
                // Finalize colors
                this.networkGraph.nodes.forEach(node => {
                    if (node.targetColor) {
                        node.color = node.targetColor;
                        delete node.targetColor;
                        delete node.originalColor;
                        delete node.transitionStartTime;
                        delete node.transitionDuration;
                    }
                });
                
                // Complete simulation
                this.networkGraph.animationPhase = 'complete';
                
                // Wait a bit before showing results
                setTimeout(() => {
                    this.networkGraph.animationPhase = 'idle';
                    this.displayResultsPanel(results);
                    // Hide loading overlay after results are displayed
                    this.hideSimulationLoading();
                }, 500);
            }
        };
        
        animateTransition();
    }
    
    // Helper function for smooth color interpolation
    interpolateColor(color1, color2, t) {
        const hex1 = color1.replace('#', '');
        const hex2 = color2.replace('#', '');
        
        const r1 = parseInt(hex1.substr(0, 2), 16);
        const g1 = parseInt(hex1.substr(2, 2), 16);
        const b1 = parseInt(hex1.substr(4, 2), 16);
        
        const r2 = parseInt(hex2.substr(0, 2), 16);
        const g2 = parseInt(hex2.substr(2, 2), 16);
        const b2 = parseInt(hex2.substr(4, 2), 16);
        
        const r = Math.round(r1 + (r2 - r1) * t);
        const g = Math.round(g1 + (g2 - g1) * t);
        const b = Math.round(b1 + (b2 - b1) * t);
        
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    }
    
    // Easing function for smooth animation
    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    displayResultsPanel(results) {
        const resultsPanel = document.getElementById('resultsPanel');
        const chatInputContainer = document.getElementById('chatInputContainer');
        
        if (!resultsPanel) return;
        
        // Calculate metrics
        const total = results.length;
        const wouldClick = results.filter(r => r.will_click).length;
        const clickPercent = Math.round((wouldClick / total) * 100);
        
        // Calculate impact score (0-100) - based primarily on click rate
        // Impact score should reflect click rate: 12% click rate = ~12/100 impact score
        const avgConfidence = results.reduce((sum, r) => sum + r.confidence, 0) / total;
        // Impact score = click rate (90% weight) + small confidence adjustment (10% weight)
        // This ensures low click rates (8-12%) result in low impact scores (8-12)
        const confidenceAdjustment = ((avgConfidence - 5) / 5) * 2; // Small adjustment: ±2 based on confidence
        const impactScore = Math.max(0, Math.min(100, Math.round(clickPercent * 0.9 + confidenceAdjustment)));
        
        // Calculate Interested and Would Skip to add up to 100%
        // Interested = portion of non-clickers (20-30% of those who didn't click)
        const nonClickers = total - wouldClick;
        const interestedCount = Math.round(nonClickers * 0.25); // 25% of non-clickers are interested
        const wouldSkipCount = nonClickers - interestedCount; // Rest skip
        
        let interestedPercent = Math.round((interestedCount / total) * 100);
        let skipPercent = Math.round((wouldSkipCount / total) * 100);
        
        // Ensure percentages add up to 100% (handle rounding)
        const totalPercent = clickPercent + interestedPercent + skipPercent;
        if (totalPercent !== 100) {
            // Adjust skip percent to make it exactly 100%
            skipPercent = 100 - clickPercent - interestedPercent;
            // Ensure skip percent is not negative
            if (skipPercent < 0) {
                skipPercent = 0;
                interestedPercent = 100 - clickPercent;
            }
        }
        
        // Update impact score
        const impactScoreEl = document.getElementById('impactScore');
        const impactLabelEl = document.getElementById('impactLabel');
        const impactBarFillEl = document.getElementById('impactBarFill');
        
        if (impactScoreEl) impactScoreEl.textContent = impactScore;
        if (impactLabelEl) {
            let label = 'Low';
            if (impactScore >= 70) label = 'Excellent';
            else if (impactScore >= 50) label = 'Good';
            else if (impactScore >= 30) label = 'Moderate';
            else if (impactScore >= 15) label = 'Low';
            else label = 'Very Low';
            impactLabelEl.textContent = label;
        }
        if (impactBarFillEl) {
            impactBarFillEl.style.width = impactScore + '%';
        }
        
        // Update engagement metrics
        const clickBar = document.getElementById('clickBar');
        const clickValue = document.getElementById('clickValue');
        const interestedBar = document.getElementById('interestedBar');
        const interestedValue = document.getElementById('interestedValue');
        const skipBar = document.getElementById('skipBar');
        const skipValue = document.getElementById('skipValue');
        
        if (clickBar) {
            clickBar.style.width = clickPercent + '%';
            setTimeout(() => clickBar.style.width = clickPercent + '%', 100);
        }
        if (clickValue) clickValue.textContent = clickPercent + '%';
        
        if (interestedBar) {
            interestedBar.style.width = interestedPercent + '%';
            setTimeout(() => interestedBar.style.width = interestedPercent + '%', 100);
        }
        if (interestedValue) interestedValue.textContent = interestedPercent + '%';
        
        if (skipBar) {
            skipBar.style.width = skipPercent + '%';
            setTimeout(() => skipBar.style.width = skipPercent + '%', 100);
        }
        if (skipValue) skipValue.textContent = skipPercent + '%';
        
        // Generate variants
        this.generateVariants(results);
        
        // Show results panel and hide chat input
        resultsPanel.style.display = 'block';
        if (chatInputContainer) {
            chatInputContainer.classList.add('hidden');
        }
        
        // Adjust network content area margin for results panel
        const networkContentArea = document.querySelector('.network-content-area');
        if (networkContentArea) {
            networkContentArea.classList.add('has-results');
        }
        
        // DON'T resize canvas - results panel is fixed/overlay, so canvas should stay the same
        // The network should remain unchanged visually
        if (this.networkGraph) {
            // Just redraw to ensure everything is visible (no resize, no repositioning)
            // Keep animation running for visual appeal
            this.networkGraph.draw();
        }
    }
    
    generateVariants(results) {
        const variantList = document.getElementById('variantList');
        if (!variantList) return;
        
        // Get original content
        const chatInput = document.getElementById('chatInput');
        const originalText = chatInput?.value || 'Your content';
        
        // Generate variants based on results
        const variants = [
            {
                text: originalText,
                score: Math.round(results.filter(r => r.will_click).length / results.length * 100)
            },
            {
                text: this.generateVariantText(originalText, 1),
                score: Math.min(100, Math.round(results.filter(r => r.will_click).length / results.length * 100) + 20)
            },
            {
                text: this.generateVariantText(originalText, 2),
                score: Math.min(100, Math.round(results.filter(r => r.will_click).length / results.length * 100) + 15)
            },
            {
                text: this.generateVariantText(originalText, 3),
                score: Math.min(100, Math.round(results.filter(r => r.will_click).length / results.length * 100) + 18)
            }
        ];
        
        variantList.innerHTML = variants.map((variant, index) => `
            <div class="variant-item">
                <div class="variant-text">${variant.text}</div>
                <div class="variant-score">${variant.score}</div>
            </div>
        `).join('');
    }
    
    generateVariantText(original, type) {
        // Generate unique variants based on type
        const text = original.trim();
        
        if (type === 1) {
            // More engaging opener
            return `🚀 ${text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()} - What are you building today?`;
        } else if (type === 2) {
            // Question format
            return `Hey founders! ${text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()} - Ship one tiny feature today.`;
        } else if (type === 3) {
            // Story format
            return `Just shipped our MVP after 72 hours. ${text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()} - Let's make it happen!`;
        }
        
        return original;
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

    initializeNodeDetailsModal() {
        // Close button
        const nodeDetailsClose = document.getElementById('nodeDetailsClose');
        if (nodeDetailsClose) {
            nodeDetailsClose.addEventListener('click', () => {
                this.hideNodeDetailsModal();
            });
        }
        
        // Close when clicking outside (but not when clicking inside modal content)
        const nodeDetailsModal = document.getElementById('nodeDetailsModal');
        if (nodeDetailsModal) {
            nodeDetailsModal.addEventListener('click', (e) => {
                // Only close if clicking directly on the modal backdrop, not on modal-content
                if (e.target === nodeDetailsModal) {
                    this.hideNodeDetailsModal();
                }
            });
            
            // Prevent clicks inside modal-content from closing the modal
            const modalContent = nodeDetailsModal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }
        }
        
        // Follow-up button
        const nodeDetailsFollowupBtn = document.getElementById('nodeDetailsFollowupBtn');
        if (nodeDetailsFollowupBtn) {
            nodeDetailsFollowupBtn.addEventListener('click', () => {
                this.openFollowUpChat();
            });
        }
        
        // Follow-up modal close button
        const followUpClose = document.getElementById('followUpClose');
        if (followUpClose) {
            followUpClose.addEventListener('click', () => {
                this.closeFollowUpChat();
            });
        }
        
        // Follow-up modal - close when clicking outside (but not when clicking inside modal content)
        const followUpModal = document.getElementById('followUpModal');
        if (followUpModal) {
            followUpModal.addEventListener('click', (e) => {
                // Only close if clicking directly on the modal backdrop, not on modal-content
                if (e.target === followUpModal) {
                    this.closeFollowUpChat();
                }
            });
            
            // Prevent clicks inside modal-content from closing the modal
            const modalContent = followUpModal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.addEventListener('click', (e) => {
                    e.stopPropagation();
                });
            }
        }
        
        // Follow-up send button
        const followUpSendBtn = document.getElementById('followUpSendBtn');
        const followUpInput = document.getElementById('followUpInput');
        if (followUpSendBtn && followUpInput) {
            followUpSendBtn.addEventListener('click', () => {
                this.sendFollowUpMessage();
            });
            
            // Send on Enter key
            followUpInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendFollowUpMessage();
                }
            });
            
            // Auto-resize textarea
            followUpInput.addEventListener('input', () => {
                followUpInput.style.height = 'auto';
                followUpInput.style.height = Math.min(followUpInput.scrollHeight, 120) + 'px';
            });
        }
    }
    
    showNodeDetails(node) {
        if (!node) return;
        
        const modal = document.getElementById('nodeDetailsModal');
        if (!modal) return;
        
        // Get agent details
        const agentKey = node.agentKey;
        const agentDetails = AGENT_DETAILS[agentKey] || {
            name: 'Unknown Persona',
            description: 'No description available',
            age: 'N/A',
            platforms: 'N/A',
            values: 'N/A',
            feedback: 'No feedback available'
        };
        
        // Get validation result if available
        let validationResult = null;
        if (this.currentValidationResults && this.currentValidationResults.length > 0) {
            validationResult = this.currentValidationResults.find(r => r.persona === agentKey);
        }
        
        // Update avatar
        const avatarImg = document.getElementById('nodeDetailsAvatar');
        if (avatarImg) {
            avatarImg.src = getAgentAvatar(agentKey);
        }
        
        // Update name and description
        const nameEl = document.getElementById('nodeDetailsName');
        if (nameEl) nameEl.textContent = agentDetails.name;
        
        const descEl = document.getElementById('nodeDetailsDescription');
        if (descEl) descEl.textContent = agentDetails.description;
        
        // Update attributes
        const attributesEl = document.getElementById('nodeDetailsAttributes');
        if (attributesEl) {
            const attributes = [
                { icon: 'fa-user', label: 'Age', value: agentDetails.age },
                { icon: 'fa-share-alt', label: 'Platforms', value: agentDetails.platforms },
                { icon: 'fa-heart', label: 'Values', value: agentDetails.values }
            ];
            
            attributesEl.innerHTML = attributes.map(attr => `
                <div class="node-attribute-tag">
                    <i class="fas ${attr.icon}"></i>
                    <span class="attribute-label">${attr.label}:</span>
                    <span class="attribute-value">${attr.value}</span>
                </div>
            `).join('');
        }
        
        // Update attention status
        const attentionEl = document.getElementById('nodeDetailsAttention');
        if (attentionEl) {
            if (validationResult) {
                if (validationResult.will_click) {
                    attentionEl.innerHTML = '<i class="fas fa-check-circle" style="color: #22c55e;"></i> Clicked';
                    attentionEl.style.color = '#22c55e';
                } else {
                    attentionEl.innerHTML = '<i class="fas fa-times-circle" style="color: #ef4444;"></i> Ignored it';
                    attentionEl.style.color = '#ef4444';
                }
            } else {
                attentionEl.textContent = 'Not yet evaluated';
                attentionEl.style.color = '#a0a0a0';
            }
        }
        
        // Update comment
        const commentEl = document.getElementById('nodeDetailsComment');
        if (commentEl) {
            if (validationResult && validationResult.reasoning) {
                commentEl.textContent = `"${validationResult.reasoning}"`;
            } else if (agentDetails.feedback) {
                commentEl.textContent = agentDetails.feedback;
            } else {
                commentEl.textContent = 'No comment available';
            }
        }
        
        // Store the selected agent key for follow-up chat
        this.currentSelectedAgentKey = agentKey;
        
        // Show modal
        modal.style.display = 'flex';
    }
    
    hideNodeDetailsModal() {
        const modal = document.getElementById('nodeDetailsModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
    
    openFollowUpChat() {
        // Store the current persona being chatted with
        if (!this.currentSelectedAgentKey) {
            this.showNotification('Please select a persona first', 'error');
            return;
        }
        
        const modal = document.getElementById('followUpModal');
        if (!modal) return;
        
        // Get agent details
        const agentKey = this.currentSelectedAgentKey;
        const agentDetails = AGENT_DETAILS[agentKey] || {
            name: 'Unknown Persona',
            description: 'No description available'
        };
        
        // Update header
        const avatarImg = document.getElementById('followUpAvatar');
        if (avatarImg) {
            avatarImg.src = getAgentAvatar(agentKey);
        }
        
        const nameEl = document.getElementById('followUpName');
        if (nameEl) nameEl.textContent = agentDetails.name;
        
        // Clear messages and add welcome message
        const messagesEl = document.getElementById('conversationMessages');
        if (messagesEl) {
            messagesEl.innerHTML = `
                <div class="message agent-message">
                    <div class="message-avatar">
                        <img src="${getAgentAvatar(agentKey)}" alt="${agentDetails.name}">
                    </div>
                    <div class="message-content">
                        <p>Hello! I'm ${agentDetails.name}. ${agentDetails.description}. How can I help you today?</p>
                    </div>
                </div>
            `;
        }
        
        // Clear input
        const inputEl = document.getElementById('followUpInput');
        if (inputEl) {
            inputEl.value = '';
            inputEl.style.height = 'auto';
        }
        
        // Hide node details modal and show chat modal
        this.hideNodeDetailsModal();
        modal.style.display = 'flex';
        
        // Focus input
        setTimeout(() => {
            if (inputEl) inputEl.focus();
        }, 100);
    }
    
    closeFollowUpChat() {
        const modal = document.getElementById('followUpModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
    
    async sendFollowUpMessage() {
        const inputEl = document.getElementById('followUpInput');
        const messagesEl = document.getElementById('conversationMessages');
        
        if (!inputEl || !messagesEl || !this.currentSelectedAgentKey) return;
        
        const message = inputEl.value.trim();
        if (!message) return;
        
        // Add user message
        const userMessage = document.createElement('div');
        userMessage.className = 'message user-message';
        userMessage.innerHTML = `
            <div class="message-avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" alt="You">
            </div>
            <div class="message-content">
                <p>${this.escapeHtml(message)}</p>
            </div>
        `;
        messagesEl.appendChild(userMessage);
        
        // Clear input
        inputEl.value = '';
        inputEl.style.height = 'auto';
        
        // Scroll to bottom
        messagesEl.scrollTop = messagesEl.scrollHeight;
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message agent-message';
        typingIndicator.innerHTML = `
            <div class="message-avatar">
                <img src="${getAgentAvatar(this.currentSelectedAgentKey)}" alt="Agent">
            </div>
            <div class="message-content">
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesEl.appendChild(typingIndicator);
        messagesEl.scrollTop = messagesEl.scrollHeight;
        
        // Get agent response (simulated)
        try {
            const response = await this.getAgentResponse(message, this.currentSelectedAgentKey);
            
            // Remove typing indicator
            typingIndicator.remove();
            
            // Add agent response
            const agentMessage = document.createElement('div');
            agentMessage.className = 'message agent-message';
            agentMessage.innerHTML = `
                <div class="message-avatar">
                    <img src="${getAgentAvatar(this.currentSelectedAgentKey)}" alt="Agent">
                </div>
                <div class="message-content">
                    <p>${this.escapeHtml(response)}</p>
                </div>
            `;
            messagesEl.appendChild(agentMessage);
            
            // Scroll to bottom
            messagesEl.scrollTop = messagesEl.scrollHeight;
        } catch (error) {
            console.error('Error getting agent response:', error);
            typingIndicator.remove();
            
            // Show error message
            const errorMessage = document.createElement('div');
            errorMessage.className = 'message agent-message';
            errorMessage.innerHTML = `
                <div class="message-avatar">
                    <img src="${getAgentAvatar(this.currentSelectedAgentKey)}" alt="Agent">
                </div>
                <div class="message-content">
                    <p>I apologize, but I'm having trouble processing your message right now. Please try again.</p>
                </div>
            `;
            messagesEl.appendChild(errorMessage);
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }
    }
    
    async getAgentResponse(message, agentKey) {
        // Simulate API call with delay
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
        
        // Get agent details for context
        const agentDetails = AGENT_DETAILS[agentKey] || {};
        
        // Generate a contextual response based on agent persona
        const responses = [
            `That's an interesting question. Based on my perspective as ${agentDetails.name}, I'd say that ${message.toLowerCase().includes('why') ? 'it depends on the context and how it aligns with my values.' : 'I appreciate you asking. Let me think about this...'}`,
            `From my experience, ${message.toLowerCase().includes('how') ? 'the approach matters a lot. ' : ''}I'd recommend considering the practical implications first.`,
            `I understand your concern. As someone who values ${agentDetails.values || 'authenticity'}, I think it's important to ${message.toLowerCase().includes('should') ? 'evaluate all options carefully.' : 'consider the long-term impact.'}`,
            `That's a great point. ${agentDetails.description || 'I appreciate thoughtful questions.'} What specific aspect are you most interested in?`,
            `Based on what I know, ${message.toLowerCase().includes('what') ? 'there are several factors to consider. ' : ''}I'd suggest looking at this from multiple angles.`
        ];
        
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
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
        const bgColor = type === 'success' ? 'rgba(34, 197, 94, 0.2)' : type === 'error' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(59, 130, 246, 0.2)';
        const textColor = type === 'success' ? '#22c55e' : type === 'error' ? '#ef4444' : '#3b82f6';
        
        notification.style.cssText = `
            position: fixed;
            top: 90px;
            right: 20px;
            background: ${bgColor};
            color: ${textColor};
            padding: 16px 20px;
            border-radius: 12px;
            border: 1px solid ${textColor}40;
            z-index: 1001;
            max-width: 400px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
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
    window.bixifyValidator = new BixifyValidator();
});
