import "./import/modules";
import "./import/components";
<<<<<<< HEAD

// import { createApp } from "vue";
=======
import { createApp } from "vue";
import { createPinia } from "pinia";
>>>>>>> 55b37383e5dce04d24da4a0cc4ff976f6382ee64
// import VueDatePicker from "@vuepic/vue-datepicker";

// import Rooms from "./../familia/rooms/Rooms.vue";
import Stell from "./../modules/stellen-vue/Stell.vue";
// import CheckIn from "../blocks/components/vue-components/CheckIn.vue";
// import CheckOut from "../blocks/components/vue-components/CheckOut.vue";

// createApp(CheckIn).component("VueDatePicker", VueDatePicker).mount("#check-in");
// createApp(CheckOut)
// .component("VueDatePicker", VueDatePicker)
// .mount("#check-out");
[...document.querySelectorAll(".stell")].forEach((cell) => {
  createApp(Stell).use(createPinia()).mount(cell);
});
