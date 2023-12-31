let items = Array.from(document.querySelectorAll('.carousel-item'));
let activeIndex = 0;

document.getElementById('prev').addEventListener('click', () => {
    items[activeIndex].classList.remove('active');
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    items[activeIndex].classList.add('active');
});

document.getElementById('next').addEventListener('click', () => {
    items[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % items.length;
    items[activeIndex].classList.add('active');
});