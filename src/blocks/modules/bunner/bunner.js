"use ctrict";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

export const bunnerSwiper = () =>{
  if (document.querySelector("#bunner-slider")) {
  const bunnerSwiper = new Swiper(".slider-bunner-js", {
    slidesPerView: 1,
    loop: "true",
    speed: 800,
    modules: [ Pagination],
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });
  }
}