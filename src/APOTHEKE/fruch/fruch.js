"use ctrict";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// , EffectFade

export const Swiper1 = () => {
  const mySwiper = new Swiper("#swiper-1", {
    spaceBetween: 0,
    slidesPerView: 1,
    speed: 500,
    modules: [Navigation],
    navigation: {
      nextEl: ".arrow-next-1",
      prevEl: ".arrow-prev-1",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      },

      1024: {
        slidesPerView: 5,
      },
    },
  });
};
