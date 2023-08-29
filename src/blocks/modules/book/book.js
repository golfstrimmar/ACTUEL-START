"use ctrict";

export const FormFields = () => {
  let fields = [...document.querySelectorAll(".form-field input")];

  // document.addEventListener("click", (e) => {
  //   if (e.target.classList.contains("dp__pointer")) {
  //     // let field = e.target.closest(".form-field");
  //     console.log(e.target);
  //   }
  // });

  fields.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      fields.forEach((el) => {
        if (el.value == "") {
          if (el == cell) {
            if (el.closest(".form-field ").classList.contains("_is-active")) {
              el.closest(".form-field ").classList.remove("_is-active");
            } else {
              el.closest(".form-field ").classList.add("_is-active");
            }
          } else {
            el.closest(".form-field ").classList.remove("_is-active");
          }
        }
      });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".form-field input")) {
      fields.forEach((el) => {
        if (el.value == "") {
          el.closest(".form-field ").classList.remove("_is-active");
        }
      });
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
