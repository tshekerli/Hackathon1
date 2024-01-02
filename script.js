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