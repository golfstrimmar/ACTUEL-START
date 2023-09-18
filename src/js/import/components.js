import { Button } from "%components%/btn-wave/btn-wave";
import { ScrollLink } from "../utils/scroll-link";
// import { Anim } from "../utils/animation";
// import { Lazy } from "../utils/lazy";
// import { myCopy } from "../utils/myCopy";

document.addEventListener("DOMContentLoaded", function () {
  //   // ==========Button=============
  if (document.querySelector(".but-wave")) {
    [...document.querySelectorAll(".but-wave")].forEach((cell) => {
      cell.addEventListener("click", Button);
    });
  }

  if (document.querySelector("#bunner-link")) {
    ScrollLink();
  }

  //   // ==========Button=============
  // if (document.querySelector(".copy")) {
  //   myCopy();
  // }
  // ============появление текста================
  // Anim();

  //   // ========Lazy===============

  // if (document.querySelector("img")) {
  //   var temp = [...document.querySelectorAll("img")].map((el) => {
  //     return el.getAttribute("data");
  //   });
  //   temp = temp.filter((el) => {
  //     return el !== null;
  //   });
  //   if (temp.length > 0) {
  //     Lazy();
  //   }
  // }
});
