"use ctrict";

export const Header = () => {
  const menu = document.querySelector(".menu");
  const header = document.querySelector("header");
  const info = document.querySelector(".info");
  // const logo = document.querySelector(".logo");
  // const nowLogo = logo.cloneNode(true);
  const now = info.cloneNode(true);
  const body = document.querySelector("body");
  const burger = header.querySelector(".header__burger");
  const activeInfo = () => {
    menu.classList.add("menu-active");
    // now.classList.add("info-active");
    // menu.prepend(nowLogo);
    // menu.append(now);
    body.classList.add("lock");
  };
  const normalInfo = () => {
    menu.classList.remove("menu-active");
    // menu.querySelector(".info").remove();
    // info.classList.remove("info-active");
    body.classList.remove("lock");
  };

  const activeItemHEAD = (event) => {
    var temp = event.target.closest(".menu__link");
    [...document.querySelectorAll(".menu__link ")].forEach((cell) => {
      temp == cell
        ? cell.classList.add("menu__link--active")
        : cell.classList.remove("menu__link--active");
    });
  };

  document.addEventListener("click", function (event) {
    if (event.target.closest(".header__burger")) {
      if (!burger.classList.contains("_is-active")) {
        burger.classList.add("_is-active");
        activeInfo();
      } else {
        burger.classList.remove("_is-active");
        normalInfo();
      }
    }

    if (event.target.closest(".menu-link-js")) {
      activeItemHEAD(event);
    }
  });
  // --------------------------
  // if (window.pageYOffset > 100) {
  //   header.classList.add("responciveHeader");
  // }
  // --------------------------

  // window.addEventListener("scroll", function (event) {
  //   if (window.pageYOffset > 100) {
  //     header.classList.add("responciveHeader");
  //   } else {
  //     header.classList.remove("responciveHeader");
  //   }
  // });

  // ---------------------------------------------
  window.onresize = function () {
    if (window.innerWidth >= 1079) {
      if (menu.querySelector(".header__info")) {
        menu.querySelector(".header__info").remove();
      }
      menu.classList.remove("menu-active");
      info.classList.remove("info-active");
      body.classList.remove("lock");
      burger.classList.remove("_is-active");
    }
  };

  // -----------------------------------
};
