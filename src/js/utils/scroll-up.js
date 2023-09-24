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

      document.querySelector("#_returnToTop").onclick = (e) => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        e.preventDefault();
      };
    },
  };

  btnUp.addEventListener();
};
