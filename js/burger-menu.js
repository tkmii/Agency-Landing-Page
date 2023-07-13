let burger = document.querySelector('.burger-menu');
let mobileMenu = document.querySelector('.mobile-menu');
burger.addEventListener("click", function() {
    burger.classList.toggle('animation-btn');
    mobileMenu.classList.toggle('open');
});