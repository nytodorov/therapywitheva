// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Simple mobile dropdown handler - must be first
document.addEventListener('click', (e) => {
    // Check if we're on mobile
    if (window.innerWidth > 768) return;
    
    // Check if clicked on dropdown link
    const dropdownLink = e.target.closest('.dropdown > .nav-link');
    if (dropdownLink) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        const dropdown = dropdownLink.closest('.dropdown');
        const isActive = dropdown.classList.contains('active');
        
        // Close all dropdowns
        document.querySelectorAll('.dropdown').forEach(d => {
            d.classList.remove('active');
        });
        
        // Toggle this one
        if (!isActive) {
            dropdown.classList.add('active');
        }
        
        return false;
    }
    
    // Check if clicked on dropdown menu item
    const dropdownMenuItem = e.target.closest('.dropdown-menu a');
    if (dropdownMenuItem) {
        navMenu.classList.remove('active');
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
        document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
        return;
    }
    
    // Check if clicked on regular nav link
    const regularLink = e.target.closest('.nav-menu > li:not(.dropdown) > .nav-link');
    if (regularLink) {
        navMenu.classList.remove('active');
        if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
    }
}, true);

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function highlightNavOnScroll() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', highlightNavOnScroll);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all elements with scroll-reveal class
document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// Observe qualification cards
document.querySelectorAll('.qual-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    cardObserver.observe(card);
});

// Observe about section
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Animate about content
                const aboutContent = entry.target.querySelector('.about-content');
                if (aboutContent) {
                    aboutContent.style.animation = 'fadeInUp 0.8s ease-out forwards';
                }
            }
        });
    }, observerOptions);
    
    aboutObserver.observe(aboutSection);
}

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.floating-shape');
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.5;
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add hover effect to help items
const helpItems = document.querySelectorAll('.help-item');
helpItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Add hover effect to children items
const childrenItems = document.querySelectorAll('.children-item');
childrenItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(8px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
    });
});

// Counter animation for stats (if you want to add them later)
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Mobile menu animation styles
const style = document.createElement('style');
style.textContent = `
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
    }
    
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
    }
`;
document.head.appendChild(style);

// Add click ripple effect to buttons
document.querySelectorAll('button, .cta-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        this.appendChild(ripple);
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
    
    button, .cta-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(rippleStyle);

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add page load animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Preloader styles
const preloaderStyle = document.createElement('style');
preloaderStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease-in;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(preloaderStyle);

// Add floating animation to hero elements
const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    let mouseX = 0;
    let mouseY = 0;
    let imageX = 0;
    let imageY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
    });
    
    function animate() {
        imageX += (mouseX * 20 - imageX) * 0.1;
        imageY += (mouseY * 20 - imageY) * 0.1;
        
        if (heroImage) {
            heroImage.style.transform = `translate(${imageX}px, ${imageY}px)`;
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Language Switcher
const langSwitcher = document.querySelector('.language-switcher');
const langBtn = document.querySelector('.lang-btn');
const langOptions = document.querySelectorAll('.lang-option');

if (langBtn && langSwitcher) {
    // Toggle dropdown on button click
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langSwitcher.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langSwitcher.contains(e.target)) {
            langSwitcher.classList.remove('active');
        }
    });
    
    // Handle language selection
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const selectedLang = option.getAttribute('data-lang');
            let currentPath = window.location.pathname;
            const currentHash = window.location.hash;
            
            // Normalize the path - remove trailing slashes and ensure it starts with /
            if (!currentPath.startsWith('/')) {
                currentPath = '/' + currentPath;
            }
            if (currentPath.endsWith('/') && currentPath.length > 1) {
                currentPath = currentPath.slice(0, -1);
            }
            
            // Check if we're on English or Bulgarian version
            const isEnglish = currentPath.includes('/en/');
            let newPath;
            
            // If selected language matches current language, just close dropdown
            if ((selectedLang === 'en' && isEnglish) || (selectedLang === 'bg' && !isEnglish)) {
                langSwitcher.classList.remove('active');
                return;
            }
            
            if (selectedLang === 'bg') {
                // Switch from English to Bulgarian
                if (currentPath === '/en' || currentPath === '/en/') {
                    newPath = '/index.html';
                } else if (currentPath === '/en/index.html') {
                    newPath = '/index.html';
                } else if (currentPath === '/en/therapy.html') {
                    newPath = '/za-terapiyata.html';
                } else if (currentPath === '/en/individual-therapy.html') {
                    newPath = '/individualna-terapiya.html';
                } else if (currentPath === '/en/child-therapy.html') {
                    newPath = '/terapiya-s-detsa.html';
                } else if (currentPath === '/en/online-consultation.html') {
                    newPath = '/onlain-konsultatsiya.html';
                } else if (currentPath === '/en/blog.html') {
                    newPath = '/blog.html';
                } else if (currentPath === '/en/faq.html') {
                    newPath = '/chzv.html';
                } else if (currentPath === '/en/terms.html') {
                    newPath = '/obshti-uslovia.html';
                } else if (currentPath === '/en/blog/erectile-dysfunction-and-therapy.html') {
                    newPath = '/blog/erektilna-disfunktsia-i-terapiya.html';
                } else if (currentPath === '/en/blog/how-to-be-happier.html') {
                    newPath = '/blog/kak-da-budem-po-shtastlivi.html';
                } else if (currentPath === '/en/blog/understanding-health-anxiety.html') {
                    newPath = '/blog/razbirane-na-zdravnata-trevozhnost.html';
                } else if (currentPath === '/en/blog/separation-and-divorce.html') {
                    newPath = '/blog/razdyala-i-razvod.html';
                } else {
                    // Fallback to homepage
                    newPath = '/index.html';
                }
            } else if (selectedLang === 'en') {
                // Switch from Bulgarian to English
                if (currentPath === '/' || currentPath === '/index.html') {
                    newPath = '/en/index.html';
                } else if (currentPath === '/za-terapiyata.html') {
                    newPath = '/en/therapy.html';
                } else if (currentPath === '/individualna-terapiya.html') {
                    newPath = '/en/individual-therapy.html';
                } else if (currentPath === '/terapiya-s-detsa.html') {
                    newPath = '/en/child-therapy.html';
                } else if (currentPath === '/onlain-konsultatsiya.html') {
                    newPath = '/en/online-consultation.html';
                } else if (currentPath === '/blog.html') {
                    newPath = '/en/blog.html';
                } else if (currentPath === '/chzv.html') {
                    newPath = '/en/faq.html';
                } else if (currentPath === '/obshti-uslovia.html') {
                    newPath = '/en/terms.html';
                } else if (currentPath === '/blog/erektilna-disfunktsia-i-terapiya.html') {
                    newPath = '/en/blog/erectile-dysfunction-and-therapy.html';
                } else if (currentPath === '/blog/kak-da-budem-po-shtastlivi.html') {
                    newPath = '/en/blog/how-to-be-happier.html';
                } else if (currentPath === '/blog/razbirane-na-zdravnata-trevozhnost.html') {
                    newPath = '/en/blog/understanding-health-anxiety.html';
                } else if (currentPath === '/blog/razdyala-i-razvod.html') {
                    newPath = '/en/blog/separation-and-divorce.html';
                } else {
                    // Fallback to English homepage
                    newPath = '/en/index.html';
                }
            }
            
            // Navigate to new page with hash if present
            if (newPath) {
                window.location.href = newPath + currentHash;
            }
        });
    });
}

// Console message
console.log('%c Therapy with Eva ', 'background: #4ECDC4; color: white; font-size: 20px; padding: 10px;');
console.log('%c Website built with ❤️ ', 'background: #FFE66D; color: #2C3E50; font-size: 14px; padding: 5px;');

