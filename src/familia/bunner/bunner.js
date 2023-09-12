"use ctrict";
import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper/modules";

export const bunnerSwiper = () => {
  if (document.querySelector("#bunner-slider")) {
    const bunnerSwiper = new Swiper(".slider-bunner-js", {
      slidesPerView: 1,
      loop: "true",
      speed: 800,
      modules: [Navigation, EffectFade],
      effect: "fade",
      navigation: {
        nextEl: ".js-bunner-next",
        prevEl: ".js-bunner-prev",
      },
    });
  }
};
