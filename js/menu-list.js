let menuList = document.querySelectorAll('.menu-btn');

for (let i = 0; i < menuList.length; ++i) {
    menuList[i].addEventListener("click", function() {
        menuList[i].classList.toggle('menu-btn-active');
    });
}
/* menuList.*/