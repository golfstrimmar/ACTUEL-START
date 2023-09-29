"use ctrict";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const Swiperwk = () => {
  const mySwiper = new Swiper("#swiperwk", {
    slidesPerView: 1,
    // loop: "true",
    speed: 500,
    modules: [
      Navigation,
      Pagination,
      // , EffectFade
    ],
    navigation: {
      nextEl: ".arrow-next-wk",
      prevEl: ".arrow-prev-wk",
    },
    pagination: {
      el: ".swiper-pagination-wk",
      clickable: true,
      type: "bullets",
      // type: 'fraction'
      // },
      // effect: "fade",
      // fadeEffect: {
      //   crossFade: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    grabCursor: true,
  });

  // const temp = () => {

  //   for (let i = 0; i < mySwiper.pagination.bullets.length; ++i) {
  //     if (i < 3) {
  //       mySwiper.pagination.bullets[i].classList.add("_is-active");
  //     }
  //     mySwiper.pagination.bullets[3].style.display = "flex";
  //     mySwiper.pagination.bullets[3].innerHTML = "...";
  //     if (mySwiper.pagination.bullets.length - 4 < i) {
  //       mySwiper.pagination.bullets[i].classList.add("_is-active");
  //     }
  //   }
  // };
  // temp();
};
