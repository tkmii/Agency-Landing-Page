let burger = document.querySelector('.burger-menu');
let mobileMenu = document.querySelector('.mobile-menu');
document.addEventListener("click", function() {
    burger.classList.toggle('animation-btn');
    mobileMenu.classList.toggle('open');
});