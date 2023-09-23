"use ctrict";

export const ScrollLink = () => {
  // // собираем все якоря; устанавливаем время анимации и количество кадров
  // const anchor = document.querySelector("#_returnToTop"),
  //   animationTime = 100,
  //   framesCount = 20;
  // // каждому якорю присваиваем обработчик события
  // anchor.addEventListener("click", function (e) {
  //   // убираем стандартное поведение
  //   e.preventDefault();

  //   // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
  //   let coordY =
  //     document
  //       .querySelector(`${anchor.getAttribute("href")}`)
  //       .getBoundingClientRect().top + window.pageYOffset;

  //   // запускаем интервал, в котором
  //   let scroller = setInterval(function () {
  //     // считаем на сколько скроллить за 1 такт
  //     let scrollBy = coordY / framesCount;

  //     // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
  //     // и дно страницы не достигнуто
  //     if (
  //       scrollBy > window.pageYOffset - coordY &&
  //       window.innerHeight + window.pageYOffset < document.body.offsetHeight
  //     ) {
  //       // то скроллим на к-во пикселей, которое соответствует одному такту
  //       window.scrollBy(0, scrollBy);
  //     } else {
  //       // иначе добираемся до элемента и выходим из интервала
  //       window.scrollTo(0, coordY);
  //       clearInterval(scroller);
  //     }
  //     // время интервала равняется частному от времени анимации и к-ва кадров
  //   }, animationTime / framesCount);
  // });

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
