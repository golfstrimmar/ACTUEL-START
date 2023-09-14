"use ctrict";
import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const SwiperCases = () => {
  const mySwiperCases = new Swiper("#cases-swiper", {
    slidesPerView: 1,
    loop: "true",
    speed: 500,
    modules: [Navigation],
    navigation: {
      nextEl: ".arrow-cases-prev",
      prevEl: ".arrow-cases-next",
    },

    grabCursor: true,
  });
};
