document.addEventListener("DOMContentLoaded", function() {
    // Animate the background gradient
    let body = document.body;
    let degree = 0;

    function animateBackground() {
        degree = (degree + 1) % 360;
        body.style.background = `linear-gradient(${degree}deg, black, red)`;
        requestAnimationFrame(animateBackground);
    }
    animateBackground();

    // Smooth scrolling for anchor links
    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            if (href && href.startsWith("#")) {
                document.querySelector(href).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    // Responsive menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("open");
    });

    // Simple scroll-to-top button
    const scrollTopBtn = document.querySelector(".scroll-top");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add("visible");
        } else {
            scrollTopBtn.classList.remove("visible");
        }
    });

    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
