import "./import/modules";
import "./import/components";
import { createApp } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import CheckIn from "./../familia/book/CheckIn.vue";
import CheckOut from "./../familia/book/CheckOut.vue";

[...document.querySelectorAll(".check-in-vue")].forEach((cell) => {
  createApp(CheckIn).component("VueDatePicker", VueDatePicker).mount(cell);
});
[...document.querySelectorAll(".check-out-vue")].forEach((cell) => {
  createApp(CheckOut).component("VueDatePicker", VueDatePicker).mount(cell);
});
