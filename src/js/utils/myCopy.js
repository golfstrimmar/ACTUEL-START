"use ctrict";
export const myCopy = () => {
  [...document.querySelectorAll(".copy")].forEach((cell) => {
    cell.addEventListener("click", copyAction);
    function copyAction() {
      let add = document.createElement("textarea");
      let rez = document.createElement("div");
      add.innerHTML = cell.innerText;
      document.querySelector("body").appendChild(add);
      add.select();
      document.execCommand("copy");
      add.remove();
    }
  });
};
