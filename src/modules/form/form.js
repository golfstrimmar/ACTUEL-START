"use ctrict";

export const Form = () => {
  let FirstName = document.querySelector("#firstname");
  let email = document.querySelector("#email");
  let tel = document.querySelector("#tel");
  let BookForm = document.querySelector("#send-form");

  BookForm.addEventListener("submit", (e) => {
    if (!FirstName.value) {
      FirstName.closest(".input-field").classList.add("_check_invalid");
      setTimeout(() => {
        window.scrollTo({
          top: BookForm.offsetTop - 100,
          left: 0,
          behavior: "smooth",
        });
      }, 200);

      e.preventDefault();
    } else if (
      FirstName.closest(".input-field").classList.contains("_check_invalid")
    ) {
      FirstName.closest(".input-field").classList.remove("_check_invalid");
    }

    if (!email.value) {
      email.closest(".input-field").classList.add("_check_invalid");
      setTimeout(() => {
        window.scrollTo({
          top: BookForm.offsetTop - 100,
          left: 0,
          behavior: "smooth",
        });
      }, 200);

      e.preventDefault();
    } else if (
      email.closest(".input-field").classList.contains("_check_invalid")
    ) {
      email.closest(".input-field").classList.remove("_check_invalid");
    }

    if (!tel.value) {
      tel.closest(".input-field").classList.add("_check_invalid");
      setTimeout(() => {
        window.scrollTo({
          top: BookForm.offsetTop - 100,
          left: 0,
          behavior: "smooth",
        });
      }, 200);

      e.preventDefault();
    } else if (
      tel.closest(".input-field").classList.contains("_check_invalid")
    ) {
      tel.closest(".input-field").classList.remove("_check_invalid");
    }
  });
};

// export class  {
//   constructor() {
//     this. = ;

//   }
//   // ==================================
//   close() {

//   }
//   // ==================================
//   open() {

//   }

//   // ==================================
//   start() {

//   }

//   static resetAll() {

//   }
// }

// let = document.querySelector(" ");
// let = [...   .querySelectorAll(" ")] ;
// .addEventListener('click',(e) =>{ });
// document.createElement(' ')
// .getAttribute('name');
// .innerHTML =
// if(){}else{};
// for (let i = 0; i < inputs.length; ++i) {inputs[i] }
// const activeHEAD = (e) => {}
// .matches("")
// .classList.add('_is-active')
// .classList.remove('_is-active')
// .classList.contains('_is-active')
// .forEach((cell) => {});
// .style.height = "0px";
