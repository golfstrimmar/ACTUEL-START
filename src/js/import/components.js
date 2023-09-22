import { Button } from "%components%/btn-wave/btn-wave";
import { Anim } from "../utils/animation";
import { Lazy } from "../utils/lazy";
import { myCopy } from "../utils/myCopy";
import { ScrollLink } from "../utils/scroll-link";

document.addEventListener("DOMContentLoaded", function () {
  //   // ==========Button=============
  [...document.querySelectorAll(".but-wave")].forEach((cell) => {
    cell.addEventListener("click", Button);
  });

  //   // ==========Button=============
  if (document.querySelector(".copy")) {
    myCopy();
  }
  // ============появление текста================
  Anim();

  //   // ========Lazy===============

  //   // ========Lazy===============
  if (document.querySelector("img[data-src]")) {
    Lazy();
  }

  if (document.querySelector("#bunner-link")) {
    ScrollLink();
  }
});
