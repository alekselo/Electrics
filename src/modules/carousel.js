const carousel = () => {
  new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    slidesPerView: 3,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
};

export default carousel;
