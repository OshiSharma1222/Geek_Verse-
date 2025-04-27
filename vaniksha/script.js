// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#ffffff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Form submission
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your interest! We will contact you soon.');
    contactForm.reset();
});

// Animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all feature cards and stat cards
document.querySelectorAll('.feature-card, .stat-card').forEach(element => {
    observer.observe(element);
});

document.addEventListener('DOMContentLoaded', () => {
    // Animate numbers
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value.toLocaleString() + (element.dataset.suffix || '');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Intersection Observer for stats
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const stats = entry.target.querySelectorAll('.stat-number');
                stats.forEach(stat => {
                    const endValue = parseInt(stat.textContent);
                    animateValue(stat, 0, endValue, 2000);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const statsContainer = document.querySelector('.intro-stats');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }

    // Animate hero elements
    setTimeout(() => {
        document.querySelectorAll('.scroll-animate').forEach(element => {
            element.classList.add('active');
        });
    }, 300);

    // Optional: Add scroll reveal for elements below the fold
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        },
        { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-animate').forEach(element => {
        observer.observe(element);
    });

    const hamburger = document.createElement('div');
    hamburger.className = 'hamburger';
    hamburger.innerHTML = '<span></span><span></span><span></span>';
    
    const navbar = document.querySelector('.navbar');
    const navContent = document.querySelector('.nav-content');
    
    navbar.insertBefore(hamburger, navContent);
    
    hamburger.addEventListener('click', () => {
        navContent.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const map = document.querySelector('.india-coastline-map');
    const zoomIn = document.getElementById('zoomIn');
    const zoomOut = document.getElementById('zoomOut');
    let currentZoom = 1;

    if (map && zoomIn && zoomOut) {
        zoomIn.addEventListener('click', () => {
            currentZoom = Math.min(currentZoom + 0.1, 1.5);
            map.style.transform = `scale(${currentZoom})`;
        });

        zoomOut.addEventListener('click', () => {
            currentZoom = Math.max(currentZoom - 0.1, 1);
            map.style.transform = `scale(${currentZoom})`;
        });
    }

    const voiceDemoBtn = document.querySelector('.voice-demo-btn');
    const voiceText = document.querySelector('.voice-text');
    
    if (voiceDemoBtn && voiceText) {
        const demoTexts = [
            "Reporting coastal erosion near Vengurla beach...",
            "High tide warning at Malvan coast...",
            "Mangrove restoration progress update...",
            "Beach cleanup scheduled for next week..."
        ];
        
        let currentTextIndex = 0;
        
        voiceDemoBtn.addEventListener('click', () => {
            // Simulate voice recording animation
            voiceDemoBtn.innerHTML = '<i class="fas fa-microphone"></i>Recording...';
            voiceDemoBtn.style.background = '#dc3545';
            
            // Update demo text
            setTimeout(() => {
                currentTextIndex = (currentTextIndex + 1) % demoTexts.length;
                voiceText.textContent = `"${demoTexts[currentTextIndex]}"`;
                
                // Reset button
                voiceDemoBtn.innerHTML = '<i class="fas fa-microphone"></i>Try Voice Demo';
                voiceDemoBtn.style.background = '#00BFA5';
            }, 2000);
        });
    }
});

// Updated translations object with complete Hindi and Marathi translations
const translations = {
    en: {
        nav: {
            home: "Home",
            features: "Features",
            howItWorks: "How It Works",
            community: "Community",
            joinNow: "Join Now"
        },
        hero: {
            tag: "INNOVATING COASTAL PROTECTION",
            title: "Protecting Our Coasts Together",
            subtitle: "Join us in safeguarding India's coastline through community-driven innovation",
            options: {
                satellite: {
                    title: "Satellite Monitoring",
                    desc: "Real-time coastal erosion tracking"
                },
                community: {
                    title: "Community Action",
                    desc: "Local knowledge & participation"
                },
                carbon: {
                    title: "Carbon Credits",
                    desc: "Earn from conservation efforts"
                }
            },
            cta: {
                primary: "Start Protecting",
                secondary: "Learn More"
            }
        },
        communityTitle: "Community Action Hub",
        communitySubtitle: "Together, we can make a difference in coastal protection",
        localInitiatives: "Local Initiatives",
        eventsWorkshops: "Events & Workshops",
        impactTracking: "Impact Tracking",
        discussionForum: "Discussion Forum"
    },
    hi: {
        nav: {
            home: "होम",
            features: "विशेषताएं",
            howItWorks: "कैसे काम करता है",
            community: "समुदाय",
            joinNow: "जुड़ें"
        },
        hero: {
            tag: "तटीय सुरक्षा में नवाचार",
            title: "एक साथ हमारे तटों की रक्षा",
            subtitle: "सामुदायिक नवाचार के माध्यम से भारत की तटरेखा की सुरक्षा में हमारे साथ जुड़ें",
            options: {
                satellite: {
                    title: "उपग्रह निगरानी",
                    desc: "वास्तविक समय तटीय क्षरण ट्रैकिंग"
                },
                community: {
                    title: "सामुदायिक कार्रवाई",
                    desc: "स्थानीय ज्ञान और भागीदारी"
                },
                carbon: {
                    title: "कार्बन क्रेडिट",
                    desc: "संरक्षण प्रयासों से कमाएं"
                }
            },
            cta: {
                primary: "सुरक्षा शुरू करें",
                secondary: "और जानें"
            }
        },
        communityTitle: "सामुदायिक कार्य केंद्र",
        communitySubtitle: "साथ मिलकर, हम तटीय संरक्षण में बदलाव ला सकते हैं",
        localInitiatives: "स्थानीय पहल",
        eventsWorkshops: "कार्यक्रम और कार्यशालाएं",
        impactTracking: "प्रभाव ट्रैकिंग",
        discussionForum: "चर्चा मंच"
    },
    mr: {
        nav: {
            home: "मुख्यपृष्ठ",
            features: "वैशिष्ट्ये",
            howItWorks: "कसे कार्य करते",
            community: "समुदाय",
            joinNow: "सामील व्हा"
        },
        hero: {
            tag: "किनारपट्टी संरक्षणात नवकल्पना",
            title: "एकत्र आपल्या किनारपट्टीचे संरक्षण",
            subtitle: "समुदाय-चालित नवकल्पनेद्वारे भारताच्या किनारपट्टीच्या संरक्षणात सहभागी व्हा",
            options: {
                satellite: {
                    title: "उपग्रह देखरेख",
                    desc: "रीअल-टाइम किनारपट्टी क्षरण ट्रॅकिंग"
                },
                community: {
                    title: "समुदाय कृती",
                    desc: "स्थानिक ज्ञान आणि सहभाग"
                },
                carbon: {
                    title: "कार्बन क्रेडिट्स",
                    desc: "संवर्धन प्रयत्नांतून कमवा"
                }
            },
            cta: {
                primary: "संरक्षण सुरू करा",
                secondary: "अधिक जाणून घ्या"
            }
        },
        communityTitle: "सामुदायिक कृती केंद्र",
        communitySubtitle: "एकत्र येऊन, आपण किनारपट्टी संरक्षणात बदल घडवू शकतो",
        localInitiatives: "स्थानिक उपक्रम",
        eventsWorkshops: "कार्यक्रम आणि कार्यशाळा",
        impactTracking: "प्रभाव मोजमाप",
        discussionForum: "चर्चा मंच"
    }
};

// Function to update content with smooth transitions
function translatePage(lang) {
    const content = translations[lang];
    if (!content) return;

    // Add transition class to all elements that will be translated
    const elements = document.querySelectorAll('.translate-fade');
    elements.forEach(el => el.classList.add('translating'));

    // Wait for fade out
    setTimeout(() => {
        // Update navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            const key = link.getAttribute('href').replace('#', '');
            if (content.nav[key]) {
                link.textContent = content.nav[key];
            }
        });

        // Update Join Now button
        document.querySelector('.join-btn').textContent = content.nav.joinNow;

        // Update hero section
        document.querySelector('.hero-tag').textContent = content.hero.tag;
        document.querySelector('.hero-text h1').textContent = content.hero.title;
        document.querySelector('.hero-text p').textContent = content.hero.subtitle;

        // Update option cards
        const cards = document.querySelectorAll('.option-card');
        const options = ['satellite', 'community', 'carbon'];
        cards.forEach((card, index) => {
            const optionKey = options[index];
            card.querySelector('h3').textContent = content.hero.options[optionKey].title;
            card.querySelector('p').textContent = content.hero.options[optionKey].desc;
        });

        // Update CTA buttons
        document.querySelector('.primary-btn').textContent = content.hero.cta.primary;
        document.querySelector('.secondary-btn').textContent = content.hero.cta.secondary;

        // Remove transition class
        elements.forEach(el => el.classList.remove('translating'));
    }, 300);

    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update text direction if needed
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
}

// Initialize language selector functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add translation fade class to all translatable elements
    const translatableElements = document.querySelectorAll(
        '.nav-links a, .hero-tag, .hero-text h1, .hero-text p, ' +
        '.option-card h3, .option-card p, .primary-btn, .secondary-btn'
    );
    translatableElements.forEach(el => el.classList.add('translate-fade'));

    // Language selector functionality
    const langItems = document.querySelectorAll('.lang-item');
    const langBtnText = document.querySelector('.lang-btn span');

    langItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active state
            langItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            // Get selected language
            const lang = item.dataset.lang;
            
            // Update button text
            langBtnText.textContent = lang.toUpperCase();
            
            // Translate page
            translatePage(lang);
            
            // Save preference
            localStorage.setItem('preferred-language', lang);
        });
    });

    // Load saved language preference
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    const savedLangItem = document.querySelector(`[data-lang="${savedLang}"]`);
    if (savedLangItem) {
        savedLangItem.classList.add('active');
        langBtnText.textContent = savedLang.toUpperCase();
        translatePage(savedLang);
    }
});