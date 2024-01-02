window.onload = function() {
    
    var counter = document.getElementById('volunteerCounter');

    
    counter.textContent = Math.floor(Math.random() * 100) + 1;

    
    setInterval(function() {
        counter.textContent = parseInt(counter.textContent) + 1;
    }, 10000);

}
document.querySelector('#navToggleBtn').addEventListener('click', () => {
    const nav = document.querySelector('#navUl');
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
});