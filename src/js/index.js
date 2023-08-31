import "./import/modules";
import "./import/components";
import { createApp } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";

import App from "../blocks/modules/rooms/App.vue";
import CheckIn from "../blocks/modules/book/CheckIn.vue";
import CheckOut from "../blocks/modules/book/CheckOut.vue";
import CheckYear from "../blocks/modules/book/Checkyear.vue";



createApp(App).mount("#app");
createApp(CheckIn).component("VueDatePicker", VueDatePicker).mount("#check-in");
createApp(CheckOut).component("VueDatePicker", VueDatePicker).mount("#check-out");
createApp(CheckYear)
  .component("VueDatePicker", VueDatePicker)
  .mount("#check-year");

