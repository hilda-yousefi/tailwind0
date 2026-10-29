import "./css/style.css";
var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 12.5,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: false,
});
var swiper = new Swiper(".mySwiper1", {
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1.1,
      spaceBetween: 8,
      centeredSlides: true,
    },

    1024: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },

  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 7.75,
  spaceBetween: 4,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
