// Navbar scroll shadow effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('shadow', window.scrollY > 50);
});