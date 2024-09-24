import { Button } from "%components%/btn-wave/btn-wave";

document.addEventListener("DOMContentLoaded", function () {
  //   // ==========Button=============
  [...document.querySelectorAll(".but-wave")].forEach((cell) => {
    cell.addEventListener("click", Button);
  });
});
