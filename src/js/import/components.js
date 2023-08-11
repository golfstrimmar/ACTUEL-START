import { Button } from "%components%/button-wave/button-wave";
import { Anim } from "../utils/animation";
import { Lazy } from "../utils/lazy";

document.addEventListener("DOMContentLoaded", function () {
  //   // ==========Button=============
  [...document.querySelectorAll(".but-wave")].forEach((cell) => {
    cell.addEventListener("click", Button);
  });

  // =============================
  Anim();
  //   // =======================

  if (document.querySelector("img")) {
    [...document.querySelectorAll("img")].forEach((cell) => {
      if (cell.getAttribute("data")) {
        Lazy();
      }
    });
  }
});
