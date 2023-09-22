"use ctrict";

export const Header = () => {
  const menu = document.querySelector(".menu");
  const header = document.querySelector("header");
  const info = document.querySelector(".info");
  const burger = document.querySelector(".header__burger");
  // const logo = document.querySelector(".logo");
  // const nowLogo = logo.cloneNode(true);
  const now = info.cloneNode(true);
  const body = document.querySelector("body");

  const activeInfo = () => {
    menu.classList.add("menu-active");
    now.classList.add("info-active");
    // menu.prepend(nowLogo);
    menu.append(now);
    body.classList.contains("lock")
      ? body.classList.remove("lock")
      : body.classList.add("lock");
  };
  const normalInfo = () => {
    menu.classList.remove("menu-active");
    menu.querySelector(".info").remove();
    info.classList.remove("info-active");
    body.classList.remove("lock");
  };
  const activeMenu = () => {
    menu.classList.contains("_is-active")
      ? menu.classList.remove("_is-active")
      : menu.classList.add("_is-active");
    burger.classList.contains("_is-active")
      ? burger.classList.remove("_is-active")
      : burger.classList.add("_is-active");
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
    if (event.target.closest(".header__burger") && window.innerWidth <= 767) {
      activeInfo();
      activeMenu();
    } else if (
      event.target.closest(".header__burger") &&
      window.innerWidth >= 768
    ) {
      menu.classList.contains("active-menu")
        ? menu.classList.remove("active-menu")
        : menu.classList.add("active-menu");
      burger.classList.contains("_is-active")
        ? burger.classList.remove("_is-active")
        : burger.classList.add("_is-active");
    }
    // if (event.target.closest(".header__close")) {
    //   normalInfo();
    // }

    if (event.target.closest(".menu__link")) {
      activeItemHEAD(event);
    }

    // if (event.target.closest(".menu-link-js")) {
    //   var temp = event.target.closest(".menu-link-js");
    //   [...document.querySelectorAll(".menu-link-js")].forEach((cell) => {
    //     if (temp == cell) {
    //       cell.classList.contains("_is-active")
    //         ? cell.classList.remove("_is-active")
    //         : cell.classList.add("_is-active");
    //     } else {
    //       cell.classList.remove("_is-active");
    //     }
    //   });
    // } else {
    //   [...document.querySelectorAll(".menu-link-js")].forEach((cell) => {
    //     cell.classList.remove("_is-active");
    //   });
    // }
  });

  const resetAll = () => {
    menu.querySelector(".header__info").remove();
    burger.classList.remove("_is-active");
    menu.classList.remove("active-menu");
    menu.classList.remove("_is-active");
    info.classList.remove("info-active");
    body.classList.remove("lock");
  };

  // --------------------------
  if (window.pageYOffset > 100) {
    header.classList.add("responciveHeader");
  }
  // --------------------------

  window.addEventListener("scroll", function (event) {
    if (window.pageYOffset > 100) {
      header.classList.add("responciveHeader");
    } else {
      header.classList.remove("responciveHeader");
    }
  });

  // ---------------------------------------------
  if (window.innerWidth >= 767) {
    if (menu.querySelector(".header__info")) {
      resetAll();
    }
  }

  window.onresize = function () {
    if (window.innerWidth >= 767) {
      resetAll();
    } else {
      if (menu.classList.contains("active-menu")) {
        menu.classList.remove("active-menu");
        activeInfo();
        activeMenu();
        burger.classList.add("_is-active");
      }
    }
  };

  // // -----------------------------------
  const Dark = () => {
    let temadark = document.querySelector("#temadark");
    let temadarkRadio = document.querySelector(".fildset-radio--tema");

    temadarkRadio.addEventListener("click", (e) => {
      if (temadark.checked) {
        document.querySelector("body").classList.add("_dark");
      } else {
        document.querySelector("body").classList.remove("_dark");
      }
    });
  };
  Dark();
};
