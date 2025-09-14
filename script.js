// MetaObjects Website Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for internal links
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
    
    // Navigation background opacity on scroll
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(255, 255, 255, 0.98)';
            } else {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
            }
        });
    }
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .content-card, .benefit-item').forEach(el => {
        observer.observe(el);
    });
    
    // Code block copy functionality
    document.querySelectorAll('.code-block').forEach(block => {
        const button = document.createElement('button');
        button.innerHTML = '📋';
        button.className = 'copy-button';
        button.style.position = 'absolute';
        button.style.top = '10px';
        button.style.right = '10px';
        button.style.background = 'rgba(255, 255, 255, 0.2)';
        button.style.border = 'none';
        button.style.borderRadius = '4px';
        button.style.padding = '8px';
        button.style.cursor = 'pointer';
        button.style.fontSize = '14px';
        button.style.transition = 'all 0.2s';
        
        block.style.position = 'relative';
        block.appendChild(button);
        
        button.addEventListener('click', function() {
            const code = block.querySelector('pre').textContent;
            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = '✅';
                setTimeout(() => {
                    button.innerHTML = '📋';
                }, 2000);
            });
        });
        
        button.addEventListener('mouseenter', function() {
            button.style.background = 'rgba(255, 255, 255, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            button.style.background = 'rgba(255, 255, 255, 0.2)';
        });
    });
    
    // Tab functionality for code examples
    document.querySelectorAll('.tabs').forEach(tabContainer => {
        const tabs = tabContainer.querySelectorAll('.tab');
        const contents = tabContainer.parentElement.querySelectorAll('.tab-content');
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', function() {
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                if (contents[index]) {
                    contents[index].classList.add('active');
                }
            });
        });
        
        // Activate first tab by default
        if (tabs.length > 0) {
            tabs[0].classList.add('active');
            if (contents[0]) {
                contents[0].classList.add('active');
            }
        }
    });
    
    // Mobile menu toggle (for future mobile navigation)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // Enable keyboard navigation for interactive elements
        if (e.key === 'Enter' || e.key === ' ') {
            const activeElement = document.activeElement;
            if (activeElement.classList.contains('feature-card') || 
                activeElement.classList.contains('content-card')) {
                activeElement.click();
            }
        }
    });
    
    // Performance: Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Form validation (if forms are added)
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('error');
                    isValid = false;
                } else {
                    input.classList.remove('error');
                }
            });
            
            if (!isValid) {
                e.preventDefault();
            }
        });
    });
    
    // Add loading states to external links
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', function() {
            const button = this;
            if (button.classList.contains('btn')) {
                const originalText = button.textContent;
                button.textContent = 'Loading...';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 3000);
            }
        });
    });
    
    // Console message for developers
    console.log(`
    🚀 MetaObjects Website
    
    Interested in the code? Check out our GitHub repository:
    https://github.com/Draagon/draagon-metaobjects
    
    Built with ❤️ using metadata-driven principles
    `);
});

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { debounce };
}