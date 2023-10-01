import { Header } from "../../modules/header/header";
import { bunnerSwiper } from "../../modules/bunner/bunner";
import { Tab } from "../../modules/tab/tab";
import { Accords } from "../../modules/accord/accord";
import { SideMenu } from "../../modules/side-menu/side-menu";
import { CasesInit } from "../../modules/cases/cases";
import { GalleryInit } from "../../modules/galery/galery";
import { GalCases } from "../../modules/galCases/galCases";
import { Marque } from "../../modules/marque/marque";
import { Swiperwk } from "../../modules/wk/wk";
import { Swiper1 } from "../../modules/swiper-1/swiper-1";
import { SwiperFull } from "../../modules/slider-full/slider-full";
import { SwiperScroll } from "../../modules/slider-scroll/slider-scroll";
import { Double } from "../../modules/slider-double/sdouble.js";
import { Select } from "../../modules/select/select";
import { Form } from "../../modules/form/form";

import { Look } from "../../modules/look/look";
// import { TypedItem } from "%modules%/typed/typedHover";
import { Popup } from "../../modules/popup/popup";

document.addEventListener("DOMContentLoaded", function () {
  // =====Look==================
  if (document.querySelector("video")) {
    Look();
  }

  // =====Header==================
  if (document.querySelector("header")) {
    Header();
  }

  //   // =========bunner slider==============
  if (document.querySelector("#bunner-slider")) {
    bunnerSwiper();
  }
  // ========popup===============
  if (document.querySelector(".popups-init-js")) {
    Popup();
  }
  //   // ======Tab=================
  if (document.querySelector(".tab")) {
    Tab();
  }
  //   // =========sideMenu==============
  if (document.querySelector("._smenu-js")) {
    SideMenu();
  }
  //   // ====Accords=====
  if (document.querySelector(".accord")) {
    Accords();
  }
  //   // ========Cases=============
  if (document.querySelector("._accord-cases-js")) {
    CasesInit();
  }
  //   // ======Gallery======================
  if (document.querySelector("._accord-galery-js")) {
    GalleryInit();
  }
  //   // ====GalCases=====
  if (document.querySelector("._galCases-plaza-js")) {
    GalCases();
  }

  // =========swiper-1==============
  if (document.querySelector("#swiperwk")) {
    Swiperwk();
  }
  // =========swiper-1==============
  if (document.querySelector("#swiper-1")) {
    Swiper1();
  }
  //   // ========swiper-1licens===============
  if (document.querySelector("#swiper-1licens")) {
    Swiper1licens();
  }
  //   // =======================
  if (document.querySelector(".marque")) {
    Marque();
  }
  // // ======slider-full=================
  if (document.querySelector("#slider-full")) {
    SwiperFull();
  }
  // //   // =====swiper-scroll==================
  if (document.querySelector("#swiper-scroll")) {
    SwiperScroll();
  }
  // //   // ========swiperDouble===============
  if (document.querySelector("#swiperDoubleTop")) {
    Double();
  }
  // //   // ========Form===============
  if (document.querySelector("#send-form")) {
    Form();
  }

  // //   // =========Select==============
  const selects = [...document.querySelectorAll(".select")];
  if (selects.length > 0) {
    selects.forEach((select) => {
      Select(select);
    });
  }

  //   // =======================

  // const textTypedAll = [...document.querySelectorAll("._hover-typed")];
  // if (textTypedAll.length > 0) {
  //   textTypedAll.forEach((item) => {
  //     TypedItem(item);
  //   });
  // }

  // // =======================

  // // // ======GalSlider==================
  // // if (document.querySelector("#galSlider")) {
  // //   GalSlider();
  // // }
  // // const tabs = document.querySelectorAll(".tabs-container-js");
  // // if (tabs.length > 0) {
  // //   document.addEventListener("click", (e) => {
  // //     if (e.target.closest(".tab-title-js")) {
  // //       const target = e.target.closest(".tab-js");
  // //       const Tab = new MyTab(target);
  // //       Tab.start();
  // //     } else if (!e.target.closest(".tabs-container-js")) {
  // //       MyTab.resetAll();
  // //     } else if (!e.target.closest(".tab-js")) {
  // //       MyTab.resetAll();
  // //     }
  // //   });
  // // }
  // // ===============================================
  // Object.defineProperty(HTMLElement.prototype, "addAct", {
  //   get: function () {
  //     if (!this.matches("_is-active")) {
  //       return this.classList.add("_is-active");
  //     }
  //   },
  // });

  // Object.defineProperty(HTMLElement.prototype, "remAct", {
  //   get: function () {
  //     if (this.matches("_is-active")) {
  //       return this.classList.remove("_is-active");
  //     }
  //   },
});
