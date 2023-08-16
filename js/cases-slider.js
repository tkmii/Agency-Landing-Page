var swiper = new Swiper(".cases-swiper", {
        breakpoints: {
            990: 
            {
            slidesPerView: 3,
            spaceBetween: 30,
            },
            770: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            260: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        },
        pagination: {
        el: ".swiper-pagination",
        },
        });
    
    