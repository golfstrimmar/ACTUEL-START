import "./import/modules";
import "./import/components";
// const { createApp } = Vue;
import { createApp } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import CheckIn from "./../familia/book/CheckIn.vue";
import CheckOut from "./../familia/book/CheckOut.vue";
import Rooms from "./../blocks/modules/header/rooms/Rooms.vue";

[...document.querySelectorAll(".check-in-vue")].forEach((cell) => {
  createApp(CheckIn).component("VueDatePicker", VueDatePicker).mount(cell);
});
[...document.querySelectorAll(".check-out-vue")].forEach((cell) => {
  createApp(CheckOut).component("VueDatePicker", VueDatePicker).mount(cell);
});

[...document.querySelectorAll(".rooms")].forEach((cell) => {
  createApp(Rooms).mount(cell);
});

// const app = createApp({
//   setup() {
//     const foo = "foo";
//     return { foo };
//   },
// });
// app.mount("#app");

// const checkInHeader = createApp(CheckIn, {
//   setup() {
//     const title = "check-in-header";
//     return { title };
//   },
// });

// const checkInHeader = createApp(CheckIn)
//   .component("VueDatePicker", VueDatePicker)
//   .mount(".check-in-vue");
// const checkOutHeader = createApp(CheckOut)
//   .component("VueDatePicker", VueDatePicker)
//   .mount(".check-out-vue");

// import { createApp } from "vue";
//

// import { document } from "postcss";

// const app = createApp({
//   setup() {
//     const foo = 1;
//     return  foo ;
//   },
// }).mount("#app");
