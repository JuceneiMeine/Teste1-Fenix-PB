document.addEventListener('DOMContentLoaded', () => {
    
// 1. Menu Hamburguer

const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});



// Fechar menu ao clicar em um link (mobile)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
});


});



let index = 0;
    function moveSlide(step) {
        const slides = document.querySelectorAll('.slide');
        index = (index + step + slides.length) % slides.length;
        document.getElementById('slideTrack').style.transform = `translateX(${-index * 100}%)`;
    }

