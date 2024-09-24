import { Header } from "%modules%/header/header";
import { Select } from "%modules%/select/select";
import { FormFields } from "../../familia/book/book";

document.addEventListener("DOMContentLoaded", function () {
  //   // ==========FormFields=============
  if (document.querySelector(".form-field")) {
    FormFields();
  }
  // =====Header==================
  if (document.querySelector("header")) {
    Header();
  }

  // =========Select==============
  const selects = [...document.querySelectorAll(".select")];
  if (selects.length > 0) {
    selects.forEach((select) => {
      Select(select);
    });
  }
});
