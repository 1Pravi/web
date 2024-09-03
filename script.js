document.addEventListener("DOMContentLoaded", function() {
    // Animate the header logo on hover
    const logo = document.querySelector('.logo img');
    logo.addEventListener('mouseenter', function() {
        logo.style.transform = 'rotate(360deg)';
        logo.style.transition = 'transform 0.6s ease-in-out';
    });
    logo.addEventListener('mouseleave', function() {
        logo.style.transform = 'rotate(0deg)';
    });

    // Smooth scroll to sections when clicking on nav links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Animate donate button on hover
    const donateButton = document.querySelector('.donate-button');
    donateButton.addEventListener('mouseenter', function() {
        donateButton.style.transform = 'scale(1.1)';
        donateButton.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.3)';
        donateButton.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    });
    donateButton.addEventListener('mouseleave', function() {
        donateButton.style.transform = 'scale(1)';
        donateButton.style.boxShadow = 'none';
    });

    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.content section');
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
                element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            }
        });
    });

    // Initially hide elements for reveal animation
    revealElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(50px)';
    });

    // Animate footer social icons on hover
    const socialIcons = document.querySelectorAll('.social-icons img');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            icon.style.transform = 'scale(1.3)';
            icon.style.transition = 'transform 0.3s ease';
        });
        icon.addEventListener('mouseleave', function() {
            icon.style.transform = 'scale(1)';
        });
    });
});
