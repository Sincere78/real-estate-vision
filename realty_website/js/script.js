// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active menu item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    function highlightNavItem() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavItem);
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server
            // For this demo, we'll just show a success message
            
            const formData = new FormData(contactForm);
            let formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            console.log('Form submitted with values:', formValues);
            
            // Show success message
            contactForm.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle" style="color: var(--success-color); font-size: 3rem; margin-bottom: 15px;"></i>
                    <h3>Thank You!</h3>
                    <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
            `;
        });
    }
    
    // Lead capture form handling
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server
            // For this demo, we'll just show a success message
            
            const formData = new FormData(leadForm);
            let formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            console.log('Lead form submitted with values:', formValues);
            
            // Show success message
            leadForm.innerHTML = `
                <div class="success-message">
                    <i class="fas fa-check-circle" style="color: var(--success-color); font-size: 3rem; margin-bottom: 15px;"></i>
                    <h3>Thank You for Subscribing!</h3>
                    <p>You'll start receiving our property updates soon.</p>
                </div>
            `;
        });
    }
    
    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (email) {
                console.log('Newsletter subscription:', email);
                
                // Clear input and show brief success message
                emailInput.value = '';
                
                const successMsg = document.createElement('div');
                successMsg.className = 'newsletter-success';
                successMsg.textContent = 'Thank you for subscribing!';
                successMsg.style.color = 'var(--success-color)';
                successMsg.style.marginTop = '10px';
                
                // Remove any existing success message
                const existingMsg = newsletterForm.querySelector('.newsletter-success');
                if (existingMsg) {
                    existingMsg.remove();
                }
                
                newsletterForm.appendChild(successMsg);
                
                // Remove message after 3 seconds
                setTimeout(() => {
                    successMsg.remove();
                }, 3000);
            }
        });
    }
    
    // Lead capture modal
    const modal = document.getElementById('leadModal');
    const closeModal = document.querySelector('.close-modal');
    
    // Show modal after 15 seconds
    setTimeout(() => {
        if (modal && !sessionStorage.getItem('modalShown')) {
            modal.style.display = 'flex';
            sessionStorage.setItem('modalShown', 'true');
        }
    }, 15000);
    
    // Close modal when clicking X
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Navbar scroll effect
    function handleScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Initialize the scroll handler
    handleScroll();
    
    // Property search form handling
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const propertyType = document.getElementById('property-type').value;
            const location = document.getElementById('location').value;
            const priceRange = document.getElementById('price-range').value;
            
            console.log('Property search:', { propertyType, location, priceRange });
            
            // In a real implementation, you would redirect to search results
            // For this demo, we'll just show an alert
            alert(`Searching for ${propertyType} properties in ${location || 'all locations'} within price range ${priceRange}`);
        });
    }
});
