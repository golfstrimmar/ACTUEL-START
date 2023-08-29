import "./import/modules";
import "./import/components";
import { createApp } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";

import App from "../blocks/modules/rooms/App.vue";
import Check from "../blocks/modules/book/Check.vue";
import CheckYear from "../blocks/modules/book/Checkyear.vue";



createApp(App).mount("#app");
createApp(Check).component("VueDatePicker", VueDatePicker).mount("#check-in");
createApp(Check).component("VueDatePicker", VueDatePicker).mount("#check-out");
createApp(CheckYear)
  .component("VueDatePicker", VueDatePicker)
  .mount("#check-year");

