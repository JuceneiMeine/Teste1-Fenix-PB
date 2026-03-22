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



// 2. Sistema de Modal para Atividades
const modal = document.getElementById('infoModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.querySelector('.close-modal');
const activityLinks = document.querySelectorAll('.activity-link');

activityLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const title = link.getAttribute('data-title');
        const info = link.getAttribute('data-info');
        
        modalTitle.innerText = title;
        modalBody.innerText = info;
        modal.style.display = 'flex';
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});



// Fechar modal ao clicar fora do conteúdo
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
});



