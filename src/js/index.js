import "./import/modules";
import "./import/components";
import Vue from "vue";
import App from "../blocks/modules/rooms/App.vue";

new Vue({
  el: "#app",
  render: (h) => h(App),
});





// import Vue from "vue";
// // import { createApp } from "vue";



// // createApp().mount("#app");


// new Vue({
//   el: "#app",
//   template: '<div>{{ hi }}</div>'
// });

//  const app = new Vue({
//    el: "#app",
//   //  data: {
//   //    message: 1,
//   //    now: new Date(),
//   //  },

//   //  methods: {
//   //    addTask() {
//   //      this.tasks.push({ text: this.newTask, done: false });
//   //      this.newTask = "";
//   //    },
//   //    toggleTask(task) {
//   //      task.done = !task.done;
//   //    },
//   //  },

//    // const id = ref(1);
//    // const content_erwachsene = ref(2)
//    // const content_kinder = ref(0)

//    // const todos = ref([
//    //   {
//    //     id: 1,
//    //     content_erwachsene: content_erwachsene.value,
//    //     content_kinder: content_kinder.value
//    //   }
//    // ])
//    // //

//    // const incrErwachsene =(todo)=>{
//    //   todo.content_erwachsene += 1
//    // }
//    // const decrErwachsene =(todo)=>{
//    //    if (todo.content_erwachsene <= 0) {
//    //     return
//    //   }
//    //   todo.content_erwachsene -= 1
//    // }
//    // const incrKinder =(todo)=>{
//    //   todo.content_kinder += 1
//    // }
//    // const decrKinder =(todo)=>{
//    //    if (todo.content_kinder <= 0) {
//    //     return
//    //   }
//    //   todo.content_kinder -= 1
//    // }

//    // const todos_asc = computed(() => todos.value.sort((a, b) => {
//    //   return a.createdAt - b.createdAt
//    // }))

//    // watch(todos, (newVal) => {
//    //   localStorage.setItem('todos', JSON.stringify(newVal))
//    // }, {
//    //   deep: true
//    // })

//    // const addTodo = () => {
//    //   todos.value.push({
//    //     id: id.value,
//    //     content_erwachsene: content_erwachsene.value,
//    //     content_kinder: content_kinder.value,
//    //     createdAt: new Date().getTime()
//    //   })

//    // }

//    // const removeTodo = (todo) => {
//    //   todos.value = todos.value.filter((t) => t !== todo)
//    // }

//    // onMounted(() => {
//    //   todos.value = JSON.parse(localStorage.getItem('todos'))
//    // })
//  });
