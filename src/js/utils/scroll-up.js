"use ctrict";
export const ScrollUp = () => {
  const btnUp = {
    el: document.querySelector("#_returnToTop"),
    show() {
      this.el.classList.remove("btn-up_hide");
    },
    hide() {
      this.el.classList.add("btn-up_hide");
    },
    addEventListener() {
      window.addEventListener("scroll", () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      this.el.addEventListener("click", (event) => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        event.preventDefault();
      });
    },
  };

  btnUp.addEventListener();
};
