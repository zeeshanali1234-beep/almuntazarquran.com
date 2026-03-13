     // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainMenu = document.getElementById('mainMenu');
        
        mobileMenuBtn.addEventListener('click', function() {
            mainMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (mainMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    // Close mobile menu if open
                    if(mainMenu.classList.contains('active')) {
                        mainMenu.classList.remove('active');
                        const icon = mobileMenuBtn.querySelector('i');
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                    
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Form submission
        const registrationForm = document.getElementById('registrationForm');
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const course = document.getElementById('course').value;
            
            // Simple validation
            if(name && email && course) {
                // In a real implementation, you would send this data to a server
                alert(`Thank you ${name}! We have received your registration for ${course}. We will contact you at ${email} within 24 hours to schedule your free trial class.`);
                
                // Reset form
                registrationForm.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
        
        // Change header background on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if(window.scrollY > 100) {
                header.style.backgroundColor = 'rgba(26, 94, 62, 0.95)';
            } else {
                header.style.backgroundColor = 'var(--primary-color)';
            }
        });
  