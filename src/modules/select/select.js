"use strict";

export const Select = (select) => {
  const $select = select,
    $button = select.querySelector(".dropdown-button"),
    $list = select.querySelector(".dropdown-list"),
    items = $list.querySelectorAll(".dropdown-list__item"),
    $svg = $button.querySelector("svg"),
    $dropHidden = $button.querySelector("._drop-hidden");

  select.addEventListener("click", (e) => {
    e.preventDefault;
    let target = e.target;
    if (target.closest(".dropdown-button") === $button) {
      $button.classList.toggle("dropdown-button-active");
      target
        .closest(".dropdown-button")
        .classList.toggle("dropdown-button-active");
      $list.classList.toggle("_is-active");
      $svg.classList.toggle("_is-active");

      items.forEach((item) => {
        item.addEventListener("click", (e) => {
          items.forEach((item) => {
            item.classList.remove("_item-active");
          });
          item.classList.add("_item-active");
          e.stopPropagation();
          $button.querySelector("span").innerHTML = item.innerHTML;
          $select.querySelector("input").value = item.innerHTML;
          $list.classList.remove("_is-active");
          $button.classList.remove("dropdown-button-active");
          $svg.classList.remove("_is-active");
        });
      });
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest(".dropdown-button") !== $button) {
      $button.classList.remove("dropdown-button-active");
      $list.classList.remove("_is-active");
      $svg.classList.remove("_is-active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab" || e.key === "Escape") {
      $button.classList.remove("dropdown-button-active");
      $list.classList.remove("_is-active");
      $svg.classList.remove("_is-active");
    }
  });
};
