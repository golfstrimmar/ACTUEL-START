"use ctrict";

export const Tab = () => {
  class MyTab {
    constructor() {
      this.title = document.querySelector("._tab-title-js");
      this.tab = {};
      this.neibours = [];
      this.children = [];
      this.neiborsTop = [];
      if (this.title.querySelector("._burger")) {
        this.burger = this.title.querySelector("._burger");
      }
    }

    start(el) {
      this.title = el;
      this.tab = this.title.closest("._tab-js");
      if (this.tab.querySelector("._tab-js")) {
        this.children = [...this.tab.querySelectorAll("._tab-js")];
      }
      if (this.tab.closest("._tab-wrap-js")) {
        this.neibours = [
          ...this.tab.closest("._tab-wrap-js").querySelectorAll("._tab-js"),
        ];
      }
      if (this.tab.classList.contains("_is-active")) {
        this.tab.classList.remove("_is-active");
        if (this.children.length > 0) {
          this.children.forEach((cell) => {
            cell.classList.remove("_is-active");
          });
        }
      } else {
        this.tab.classList.add("_is-active");

        if (this.tab.classList.contains("_tab-top-js")) {
          this.neiborsTop = [...document.querySelectorAll("._tab-top-js")];
          this.neiborsTop = this.neiborsTop.filter((el) => el !== this.tab);
          this.neiborsTop.forEach((neiborTop) => {
            if (neiborTop.classList.contains("_is-active")) {
              neiborTop.classList.remove("_is-active");
              [...neiborTop.querySelectorAll("._tab-js")].forEach((nei) => {
                nei.classList.remove("_is-active");
              });
            }
          });
        }
        if (this.neibours.length > 0) {
          this.neibours = this.neibours.filter((el) => el !== this.tab);
          this.neibours.forEach((cell) => {
            cell.classList.remove("_is-active");
          });
        }
      }
    }
    static resetAll() {
      [...document.querySelectorAll("._tab-js")].forEach((item) => {
        item.classList.remove("_is-active");
      });
    }
  }
  var newTab = new MyTab();
  document.addEventListener("click", (e) => {
    if (e.target.closest("._tab-title-js")) {
      newTab.start(e.target.closest("._tab-title-js"));
    }
    if (!e.target.closest("._tab-js")) {
      MyTab.resetAll();
    }
  });
};
