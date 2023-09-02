"use ctrict";

// import { createApp } from "https://unpkg.com/vue@3/dist/vue.global.js";
import { createApp, ref, onMounted, computed, watch } from "vue";
// const App= document.querySelector("#app");
// import App from "./App.vue";
// createApp().mount(App);


export const Rooms = () => {
const id = ref(1);
const content_erwachsene = ref(2)
const content_kinder = ref(0)

const todos = ref([
  {
    id: 1,
    content_erwachsene: content_erwachsene.value,
    content_kinder: content_kinder.value
  }
])
// 

const incrErwachsene =(todo)=>{
  todo.content_erwachsene += 1
}
const decrErwachsene =(todo)=>{
   if (todo.content_erwachsene <= 0) {
    return
  }
  todo.content_erwachsene -= 1
}
const incrKinder =(todo)=>{
  todo.content_kinder += 1
}
const decrKinder =(todo)=>{
   if (todo.content_kinder <= 0) {
    return
  }
  todo.content_kinder -= 1
}

const todos_asc = computed(() => todos.value.sort((a, b) => {
  return a.createdAt - b.createdAt
}))


watch(todos, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal))
}, {
  deep: true
})

const addTodo = () => {
  todos.value.push({
    id: id.value,
    content_erwachsene: content_erwachsene.value,
    content_kinder: content_kinder.value,
    createdAt: new Date().getTime()
  })

}

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo)
}

onMounted(() => {
  todos.value = JSON.parse(localStorage.getItem('todos'))
})


}

