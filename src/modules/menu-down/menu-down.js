"use ctrict";

export const DownMenu = () => {
  class Side {
    constructor() {
      this.title = document.querySelector("._down-title-js");
      this.tab = {};
      this.neibours = [];
      this.action = {};
    }

    start(el) {
      this.title = el;
      this.action = this.title.querySelector("._down-action");
      this.tab = this.title.closest("._down-item-js");
      this.neibours = [...this.tab.closest("._down-js ").children];

      this.neibours.forEach((cell) => {
        if (cell == this.tab) {
          if (this.tab.classList.contains("_is-active")) {
            this.tab.classList.remove("_is-active");
            this.tab.classList.add("_not-active");
            if (this.action) {
              this.action.innerHTML = "развернуть";
            }

            cell.querySelectorAll("._down-item-js").forEach((kab) => {
              kab.classList.add("_not-active");
              kab.classList.remove("_is-active");
              if (kab.querySelector("._down-action")) {
                kab.querySelector("._down-action").innerHTML = "развернуть";
              }
            });
          } else {
            this.tab.classList.add("_is-active");
            this.tab.classList.remove("_not-active");
            if (this.action) {
              this.action.innerHTML = "свернуть";
            }
          }
        } else {
          if (cell.classList.contains("_is-active")) {
            cell.classList.remove("_is-active");
            cell.classList.add("_not-active");
            if (cell.querySelector("._down-action")) {
              cell.querySelector("._down-action").innerHTML = "развернуть";
            }
          }

          cell.querySelectorAll("._down-item-js").forEach((kab) => {
            kab.classList.remove("_is-active");
            kab.classList.add("_not-active");
            if (kab.querySelector("._down-action")) {
              kab.querySelector("._down-action").innerHTML = "развернуть";
            }
          });
        }
      });
    }

    static resetAll() {
      [...document.querySelectorAll("._down-item-js")].forEach((item) => {
        if (item.classList.contains("_is-active")) {
          item.classList.remove("_is-active");
          item.classList.add("_not-active");
          if (item.querySelector("._down-action")) {
            item.querySelector("._down-action").innerHTML = "развернуть";
          }
          setTimeout(() => {
            item.classList.remove("_not-active");
          }, 4000);
        }
      });
    }
  }

  var SideMenu = new Side();

  document.addEventListener("click", (e) => {
    if (e.target.closest("._down-title-js ._down-action")) {
      SideMenu.start(e.target.closest("._down-title-js"));
    }

    if (!e.target.closest("._down-js")) {
      Side.resetAll();
    } else if (e.target.closest("a")) {
      Side.resetAll();
    }
  });
};
