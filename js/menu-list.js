let menuList = document.querySelectorAll('.menu-btn');
let menuLinks = document.querySelectorAll('.menu-links');

for (let i = 0; i < menuList.length; ++i) {
    menuList[i].addEventListener("click", function() {
        menuList[i].classList.toggle('menu-btn-active');
        menuLinks[i].classList.toggle('menu-links-active');
    });
}
/* menuList.*/