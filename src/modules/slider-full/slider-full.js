"use ctrict";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const SwiperFull = () =>{
    const swiperFull = new Swiper("#slider-full", {
      slidesPerView: 2,
      loop: "true",
      speed: 500,
      spaceBetween: 48,
      centeredSlides: true,
      grabCursor: true,
      // effect: "coverflow",
      modules: [Navigation, Pagination],
      // coverflowEffect: {
      //   rotate: 3,
      //   stretch: 0,
      //   depth: 120,
      //   // modifier: 1,
      //   // slideShadows: true,
      // },
      // watchSlidesProgress: true,
      pagination: {
        el: ".swiper-pagination-full",
        clickable: true,
      },
      navigation: {
        nextEl: ".js-full-next",
        prevEl: ".js-full-prev",
      },
    });
  }




