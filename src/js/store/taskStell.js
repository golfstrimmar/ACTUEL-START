import { ref } from "vue";
import { defineStore } from "pinia";

export const useTaskStelle = defineStore("taskStelle", {
  state: () => ({
    staat: [
      {
        id: 1,
        content: "Венгрия",
      },
      {
        id: 2,
        content: "Словакия",
      },
      {
        id: 3,
        content: "Литва",
      },
      {
        id: 4,
        content: "Латвия",
      },
      {
        id: 5,
        content: "Эстония",
      },
    ],
  }),
  actions: {
    addStaat(id, staatName) {
      if (staatName !== "") {
        this.staat.push({ id: id, content: staatName });
      }
    },
  },
});
