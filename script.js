// Toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile');
}

// Simulate donation progress
window.addEventListener('load', function() {
    const progressBar = document.getElementById('donationProgressBar');
    let progress = 0;

    function updateProgress() {
        if (progress < 75) {
            progress += 1;
            progressBar.style.width = progress + '%';
            setTimeout(updateProgress, 50);
        }
    }

    updateProgress();
});
