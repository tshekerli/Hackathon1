window.onload = function() {
    
    var counter = document.getElementById('volunteerCounter');

    
    counter.textContent = Math.floor(Math.random() * 100) + 1;

    
    setInterval(function() {
        counter.textContent = parseInt(counter.textContent) + 1;
    }, 10000);

}

// switch to dark theme
function toggleTheme(event) {
    console.log('Toggle Theme Function Executed');
    document.body.classList.toggle('theme-dark');
    event.preventDefault();  // Evitar comportamiento predeterminado del botón
}
document.querySelector('#navToggleBtn').addEventListener('click', () => {
    const nav = document.querySelector('#navUl');
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
});


//carrousel of cards
let currentSlide = 0;

function showSlide(index) {
    const cards = document.getElementById('cardContainer');
    const cardWidth = document.querySelector('.training-card').offsetWidth;

    if (index < 0) {
        currentSlide = 0;
    } else if (index >= cards.children.length) {
        currentSlide = cards.children.length - 1;
    } else {
        currentSlide = index;
    }

    const translateValue = -currentSlide * (cardWidth + 20); // 20px de espacio entre tarjetas
    cards.style.transform = `translateX(${translateValue}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
