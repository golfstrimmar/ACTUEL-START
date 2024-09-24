"use ctrict";

export const Header = () => {
  const header = document.querySelector("header");
  const menu = document.querySelector(".menu");
  const info = document.querySelector(".info");
  const burger = document.querySelector(".burger");
  const now = info.cloneNode(true);
  const body = document.querySelector("body");

  const activeInfo = () => {
    menu.classList.add("menu-active");
    now.classList.add("info-active");
    menu.append(now);
    info.remove();
    body.classList.add("lock");
  };

  const normalInfo = () => {
    menu.classList.remove("menu-active");
    now.classList.remove("info-active");

    menu.querySelector(".info").remove();
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
    if (event.target.closest(".burger")) {
      if (!burger.classList.contains("_is-active")) {
        menu.classList.add("menu-active");
        now.classList.add("info-active");
        menu.append(now);
        info.remove();
        body.classList.add("lock");
      } else {
        menu.classList.remove("menu-active");
        menu.querySelector(".info").remove();
        body.classList.remove("lock");
      }
      burger.classList.toggle("_is-active");
    }

    // if (
    //   event.target.closest(".burger") &&
    //   burger.classList.contains("_is-active")
    // ) {
    //   burger.classList.remove("_is-active");
    //   normalInfo();
    // } else {
    //   burger.classList.add("_is-active");
    //   activeInfo();
    // }
    if (event.target.closest(".menu__link")) {
      activeItemHEAD(event);
    }

    if (event.target.closest(".menu-link-js")) {
      var temp = event.target.closest(".menu-link-js");
      [...document.querySelectorAll(".menu-link-js")].forEach((cell) => {
        if (temp == cell) {
          cell.classList.contains("_is-active")
            ? cell.classList.remove("_is-active")
            : cell.classList.add("_is-active");
        } else {
          cell.classList.remove("_is-active");
        }
      });
    } else {
      [...document.querySelectorAll(".menu-link-js")].forEach((cell) => {
        cell.classList.remove("_is-active");
      });
    }
  });
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
  window.onresize = function () {
    if (window.innerWidth >= 1259) {
      if (!header.querySelector(".info")) {
        header.querySelector(".header__top").append(now);
      }
      menu.classList.remove("menu-active");
      menu.querySelector(".info").remove();
      body.classList.remove("lock");
      burger.classList.remove("_is-active");
    } else {
      header.querySelector(".info").classList.remove("info-active");
    }
  };

  // -----------------------------------
};
