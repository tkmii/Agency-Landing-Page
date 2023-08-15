var swiper = new Swiper('.services-swiper', {
    breakpoints: {
        1260: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        990: {
            slidesPerView: 3,
            spaceBetween: 70,
        },
        460: {
                slidesPerView: 2,
                spaceBetween: 70,
        },
        240: {
            slidesPerView: 1,
            spaceBetween: 70,
        }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  console.log(swiper);