hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active'); // Hide the menu
    });
});
