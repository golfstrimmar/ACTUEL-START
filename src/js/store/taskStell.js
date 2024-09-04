import { ref } from "vue";
import { defineStore } from "pinia";

export const useTaskStelle = defineStore("taskStelle", {
  state: () => ({
    staat: [
      {
        id: 1,
        title: "Венгрия",
        content: [
          {
            titleItem: "Врач",
            gehaltItem: "1700",
          },
          {
            titleItem: "Пекарь",
            gehaltItem: "8100",
          },
          {
            titleItem: "Токарь",
            gehaltItem: "80",
          },
        ],
        isVisible: true,
      },
      {
        id: 2,
        title: "Словакия",
        content: [
          {
            titleItem: "Кладовщик",
            gehaltItem: "7200",
          },
        ],
        isVisible: false,
      },
      {
        id: 3,
        title: "Литва",
        content: [
          {
            titleItem: "Рабочий",
            gehaltItem: "7300",
          },
        ],
        isVisible: false,
      },
      {
        id: 4,
        title: "Латвия",
        content: [
          {
            titleItem: "Колхозник",
            gehaltItem: "400",
          },
        ],
        isVisible: false,
      },
      {
        id: 5,
        title: "Эстония",
        content: [
          {
            titleItem: "Летчик",
            gehaltItem: "600",
          },
        ],
        isVisible: false,
      },
    ],
  }),
  actions: {
    addStaat(id, staatName, Beruf, Inhalt) {
      var flag = false;
      if (staatName !== "") {
        var contentNew = {
          titleItem: Beruf.value,
          gehaltItem: Inhalt.value,
        };

        this.staat.forEach((cell) => {
          if (cell.title == staatName.value) {
            cell.content.push(contentNew);
            flag = true;
          }
        });
        if (!flag) {
          this.staat.push({
            id: id.value,
            title: staatName.value,
            content: [contentNew],
            isVisible: false,
          });
        }
      }
    },

    ActiveStaat(item) {
      this.staat.forEach((cell) => {
        if ((cell.isVisible = true)) {
          cell.isVisible = false;
        }
        item.isVisible = true;
      });
    },
    DelitItem(item, land) {
      this.staat.forEach((cell) => {
        if (cell.title == land) {
          cell.content.forEach((content) => {
            if (content.titleItem == item) {
              var temp = cell.content.indexOf(content);
              cell.content.splice(temp, 1);
            }
          });
        }
      });
    },
  },
  // getters: {
  //   selectActivePlaza(state) {
  //     console.log(state.staat);

  //     // let tmp = this.staat.filter(function (number) {
  //     //   return number.isVisible === true;
  //     // });
  //     // console.log(this.staat);
  //   },
  // },
});
