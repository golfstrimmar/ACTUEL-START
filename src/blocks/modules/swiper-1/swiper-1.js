"use ctrict";
import  Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
  // , EffectFade

export const Swiper1 =()=>{
  const mySwiper = new Swiper("#swiper-1", {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: "true",
    speed: 500,
    modules: [Navigation, Pagination
      // , EffectFade
    ],
    navigation: {
      nextEl: ".arrow-next-1",
      prevEl: ".arrow-prev-1",
    },
    pagination: {
      el: ".swiper-pagination-1",
      clickable: true,
    },
    // effect: "fade",
    // fadeEffect: {
    //   crossFade: true,
    // },
    grabCursor: true,
  });
}