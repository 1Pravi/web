document.addEventListener("DOMContentLoaded", function() {
    // Utility function to add multiple event listeners
    function addMultipleEventListeners(element, events, handler) {
        events.forEach(event => element.addEventListener(event, handler));
    }

    // Animate the header logo on hover
    const logo = document.querySelector('.logo img');
    addMultipleEventListeners(logo, ['mouseenter', 'mouseleave'], function(event) {
        logo.style.transform = event.type === 'mouseenter' ? 'rotate(360deg) scale(1.2)' : 'rotate(0deg) scale(1)';
        logo.style.transition = 'transform 0.6s ease-in-out';
    });

    // Animate header text on page load
    const headerText = document.querySelector('.header-text');
    headerText.style.opacity = 0;
    headerText.style.transform = 'translateY(-50px)';
    window.addEventListener('load', function() {
        headerText.style.opacity = 1;
        headerText.style.transform = 'translateY(0)';
        headerText.style.transition = 'opacity 1s ease, transform 1s ease';
    });

    // Smooth scroll to sections when clicking on nav links with fade effect
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Fade out current view
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = 0;

            setTimeout(() => {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
                document.body.style.opacity = 1;
            }, 500); // Matches the fade-out duration
        });
    });

    // Animate donate button on hover with color shift
    const donateButton = document.querySelector('.donate-button');
    addMultipleEventListeners(donateButton, ['mouseenter', 'mouseleave'], function(event) {
        if (event.type === 'mouseenter') {
            donateButton.style.transform = 'scale(1.1)';
            donateButton.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.3)';
            donateButton.style.backgroundColor = '#ff8c00';
            donateButton.style.color = '#fff';
        } else {
            donateButton.style.transform = 'scale(1)';
            donateButton.style.boxShadow = 'none';
            donateButton.style.backgroundColor = '';
            donateButton.style.color = '';
        }
        donateButton.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease';
    });

    // Reveal elements on scroll with scale effect
    const revealElements = document.querySelectorAll('.content section');
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0) scale(1)';
                element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            }
        });
    });

    // Initially hide elements for reveal animation with scale effect
    revealElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(50px) scale(0.9)';
    });

    // Animate footer social icons on hover with rotation and bounce
    const socialIcons = document.querySelectorAll('.social-icons img');
    socialIcons.forEach(icon => {
        addMultipleEventListeners(icon, ['mouseenter', 'mouseleave'], function(event) {
            if (event.type === 'mouseenter') {
                icon.style.transform = 'rotate(360deg) scale(1.3)';
                icon.style.transition = 'transform 0.5s ease';
            } else {
                icon.style.transform = 'scale(1)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
    });

    // Pulse animation for the call-to-action section on the page
    const ctaSection = document.querySelector('.call-to-action');
    setInterval(() => {
        ctaSection.style.transform = 'scale(1.05)';
        ctaSection.style.transition = 'transform 0.5s ease';
        setTimeout(() => {
            ctaSection.style.transform = 'scale(1)';
        }, 500);
    }, 3000);
});
