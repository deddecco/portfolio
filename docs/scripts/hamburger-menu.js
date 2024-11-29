document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links-container');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});