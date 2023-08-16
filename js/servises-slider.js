var swiper = new Swiper(".services-swiper", {
    breakpoints: {
        1260: 
        {
        slidesPerView: 4,
        spaceBetween: 30,
        },
        990: {
        slidesPerView: 3,
        spaceBetween: 50,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        260: {
            slidesPerView: 1,
            spaceBetween: 50,
        },
    },
    pagination: {
    el: ".swiper-pagination",
    },
    });