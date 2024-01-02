window.onload = function() {
    
    var counter = document.getElementById('volunteerCounter');

    
    counter.textContent = Math.floor(Math.random() * 100) + 1;

    
    setInterval(function() {
        counter.textContent = parseInt(counter.textContent) + 1;
    }, 10000);
}

// switch to dark theme

function toggleTheme() {
    document.body.classList.toggle('theme-dark');
  }
  
  // Obtener el interruptor de tema y agregar un evento de clic
  const themeSwitch = document.getElementById('themeSwitch');
  themeSwitch.addEventListener('click', toggleTheme);
  