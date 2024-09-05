// MENU DE NAVIGATION 
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('menu-active');
    menuToggle.classList.toggle('active');
});

// ETOILES FILANTE ET ASTEROIDE 

function createShootingStar() {
    console.log('createShootingStar called'); // Vérifie que la fonction est appelée

    const starImages = [
        'images/etoile.png',
        'images/asteroide.png'
    ];

    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';

    const randomImage = starImages[Math.floor(Math.random() * starImages.length)];
    shootingStar.style.backgroundImage = `url('${randomImage}')`;

    const size = Math.random() * 30 + 20;
    shootingStar.style.width = `${size}px`;
    shootingStar.style.height = `${size * 0.6}px`;

    const starX = Math.random() * window.innerWidth;
    const starY = Math.random() * window.innerHeight;

    shootingStar.style.left = `${starX}px`;
    shootingStar.style.top = `${starY}px`;

    document.getElementById('shooting-stars').appendChild(shootingStar);

    setTimeout(() => {
        shootingStar.remove();
    }, 2000);
}

setInterval(createShootingStar, Math.random() * 3000 + 1000);

// POP UP PAGE PLANETE CARACTERISTIQUES DES PLANETES

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn-characteristics');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.popup .close');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            document.getElementById(target).style.display = 'flex';
        });
    });

    closeButtons.forEach(close => {
        close.addEventListener('click', () => {
            close.closest('.popup').style.display = 'none';
        });
    });

    // Fermer la popup en cliquant en dehors de son contenu
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup')) {
            event.target.style.display = 'none';
        }
    });
});
