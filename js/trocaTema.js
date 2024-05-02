const colorToggle = document.getElementById('color-toggle');
const body = document.body;
const home = document.getElementById('home');
const barra = document.getElementById('barra-navegacao');
const logo = document.getElementById('img-logo');
const logoRedes = document.getElementById('img-redes-logo');

barra.classList.add('bg-light');

colorToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    home.classList.toggle('home-dark');
    barra.classList.toggle('bg-dark');
    const cards = document.querySelectorAll('.card');
    
    // Selecionar o path do ícone
    const iconPath = document.getElementById('icon-path');

    // Variável para controlar o estado da imagem
    let isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        logo.src = 'img/logo-branco-roxo.png';
        logoRedes.src = 'img/logo-branco-roxo.png';
        iconPath.setAttribute('fill', '#ffffff');
    } else {
        logo.src = 'img/logo.png';
        logoRedes.src = 'img/logo.png';
        iconPath.setAttribute('fill', '#000000');
    }

    cards.forEach(card => {
        if (isDarkMode) {
            card.classList.add('card-dark');
            card.classList.remove('card-light');
        } else {
            card.classList.remove('card-dark');
            card.classList.add('card-light');
        }
    });

});