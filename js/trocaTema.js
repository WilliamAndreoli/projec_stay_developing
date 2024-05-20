const colorToggle = document.getElementById('color-toggle');
const body = document.body;
const home = document.getElementById('home');
const barra = document.getElementById('barra-navegacao');
const logo = document.getElementById('img-logo');
const logoRedes = document.getElementById('img-redes-logo');

barra.classList.add('bg-light');

// Função para aplicar o tema
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        home.classList.add('home-dark');
        barra.classList.add('bg-dark');
        logo.src = 'img/logo-branco-roxo.png';
        logoRedes.src = 'img/logo-branco-roxo.png';
        document.getElementById('icon-path').setAttribute('fill', '#ffffff');
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('card-dark');
            card.classList.remove('card-light');
        });
    } else {
        body.classList.remove('dark-mode');
        home.classList.remove('home-dark');
        barra.classList.remove('bg-dark');
        logo.src = 'img/logo.png';
        logoRedes.src = 'img/logo.png';
        document.getElementById('icon-path').setAttribute('fill', '#000000');
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.remove('card-dark');
            card.classList.add('card-light');
        });
    }
}

// Carregar o tema armazenado no localStorage ao iniciar
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

colorToggle.addEventListener('click', () => {
    let isDarkMode = body.classList.toggle('dark-mode');
    home.classList.toggle('home-dark');
    barra.classList.toggle('bg-dark');
    const cards = document.querySelectorAll('.card');
    
    // Atualizar as imagens e ícones
    if (isDarkMode) {
        logo.src = 'img/logo-branco-roxo.png';
        logoRedes.src = 'img/logo-branco-roxo.png';
        document.getElementById('icon-path').setAttribute('fill', '#ffffff');
    } else {
        logo.src = 'img/logo.png';
        logoRedes.src = 'img/logo.png';
        document.getElementById('icon-path').setAttribute('fill', '#000000');
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

    // Salvar o tema no localStorage
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});
