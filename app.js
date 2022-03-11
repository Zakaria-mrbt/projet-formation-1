const burger = document.querySelector('.burger')
const header_navbar = document.querySelector('#header_navbar')
const product_image = document.querySelector('.product_image')
burger.addEventListener('click', () => {
burger.classList.toggle('active');
header_navbar.classList.toggle('active');
product_image.classList.toggle('active')
});