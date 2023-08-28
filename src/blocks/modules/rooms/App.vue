<template lang="pug">
section.create-anzahl
    .create-anzahl__title
      h3 Количество гостей
    form(@submit.prevent)
      .create-anzahl__section(v-for='todo in todos_asc' :key='todos.indexOf(todo)')
        .create-anzahl__title--section
          h4 НОМЕР {{ todos.indexOf(todo)+1 }}
        .create-anzahl__items
          .create-anzahl__item
            p Взрослые
            //- input#content-erwachsene(type='text' name='content-erwachsene' v-model='content_erwachsene')
            span {{ todo.content_erwachsene }} 
              button(type="button" @click.prevent='decrErwachsene(todo)') &minus;
              button(type="button" @click.prevent='incrErwachsene(todo)') +

          .create-anzahl__item
            p Дети младше 14 лет
            //- input#content-kinder(type='text' name='content-kinder' v-model='content_kinder')
            span {{ todo.content_kinder }}
              button(type="button" @click.prevent='decrKinder(todo)') &minus;
              button(type="button" @click.prevent='incrKinder(todo)') +
        button.create-anzahl__delete(@click.prevent='removeTodo(todo)') Удалить номер из списка
      .create-anzahl__buttons
        button(type='button' @click.prevent='addTodo').create-anzahl__button  + Добавить ещё номер 
        input(type='submit' value='Готово').create-anzahl__fertig


</template>
 
<script setup>
import { ref, onMounted, computed, watch } from 'vue'

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


const incrErwachsene = (todo) => {
  todo.content_erwachsene += 1
}
const decrErwachsene = (todo) => {
  if (todo.content_erwachsene <= 0) {
    return
  }
  todo.content_erwachsene -= 1
}
const incrKinder = (todo) => {
  todo.content_kinder += 1
}
const decrKinder = (todo) => {
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


</script>
 
