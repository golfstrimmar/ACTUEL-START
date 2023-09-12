"use ctrict";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";
// , EffectFade

export const Swiper1 = () => {
  const mySwiper = new Swiper("#swiper-1", {
    spaceBetween: 85,
    slidesPerView: 3,
    loop: "true",
    speed: 500,
    modules: [Navigation],
    navigation: {
      nextEl: ".arrow-next-1",
      prevEl: ".arrow-prev-1",
    },
    grabCursor: true,
  });
};
