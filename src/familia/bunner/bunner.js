"use ctrict";
import Swiper from "swiper";

export const bunnerSwiper = () => {
  if (document.querySelector("#bunner-slider")) {
    const bunnerSwiper = new Swiper(".slider-bunner-js", {
      slidesPerView: 1,
      loop: "true",
      speed: 800,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }
};
