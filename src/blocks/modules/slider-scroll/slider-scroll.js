"use ctrict";
import Swiper from "swiper";
import { Scrollbar } from "swiper/modules";
export const SwiperScroll = () =>{
    var swiperScroll = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: "auto",
      freeMode: true,
      dragable: "true",
      modules: [Scrollbar],
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      mousewheel: true,
      grabCursor: true,
    });
};
