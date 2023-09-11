<template lang="pug">
section
  p {{  }}
  p {{  }}
  .create-anzahl(@click="isFormActive = !isFormActive , isUsed = true")
    span(:class=" (isFormActive == true ||  isUsed == true) ? '_is-active' : ''") Гости*
    input.anzahl-field(type='hidden'   name='gasts' v-model="all" )
    .create-anzahl__all( :class="(isFormActive == true ||  isUsed == true) ? 'create-anzahl__all  _is-active' : 'create-anzahl__all'") {{ all }}
    div(:class="isFormActive ? 'form-field__area-svg _is-active' : 'form-field__area-svg'")
      svg
        use(xlink:href='#arrow-down')
  div(:class="isFormActive ? 'create-anzahl__body _is-active' : 'create-anzahl__body'")
    .create-anzahl__title
      h3 Количество гостей
    div
      .create-anzahl__section(v-for='todo in todos_asc' :key='todos.indexOf(todo)')
        .create-anzahl__title--section
          h4 НОМЕР {{ todos.indexOf(todo)+1 }}
        .create-anzahl__items
          .create-anzahl__item
            span Взрослые
            .create-anzahl__change 
              button(type="button" @click.prevent='decrErwachsene(todo)').btn-blue &minus;
              input(type='text' disabled  :name="'adult-' + `${todos.indexOf(todo)+1}`" v-model='todo.content_erwachsene') 
              button(type="button" @click.prevent='incrErwachsene(todo)').btn-blue +

          .create-anzahl__item
            span Дети младше 14 лет
            .create-anzahl__change 
              input(type='text' disabled :name="'kinder-' + `${todos.indexOf(todo)+1}`" v-model='todo.content_kinder')
              button(type="button" @click.prevent='decrKinder(todo)').btn-blue &minus;
              button(type="button" @click.prevent='incrKinder(todo)').btn-blue +
        button.create-anzahl__delete.btn-blue(@click.prevent='removeTodo(todo)') Удалить номер из списка
      .create-anzahl__buttons
        button(type='button' @click.prevent='addTodo').create-anzahl__button.btn-blue  + Добавить ещё номер 
        button(type='button' value='Готово' @click="isFormActive = !isFormActive").create-anzahl__fertig.btn-success.but-wave Готово


</template>
 
<script setup>
import { ref, onMounted, computed, watch } from 'vue'
// const { ref, onMounted, computed, watch } = Vue;

const id = ref(1);
const content_erwachsene = ref(2)
const content_kinder = ref(0)
let tempTodoes = ref([])
let isFormActive = ref(false)
let isUsed = ref(false)
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

const all = computed(
  () => {
    tempTodoes = todos.value
    let summa = 0;
    for (let i = 0; i < tempTodoes.length; ++i) {
      summa = summa + tempTodoes[i].content_erwachsene + tempTodoes[i].content_kinder;
    }
    return summa;

  }
)

watch(todos, (newVal) => {
  tempTodoes = todos.value
  // localStorage.setItem('todos', JSON.stringify(newVal))
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
  // localStorage.setItem('todos', JSON.stringify(todos.value))
})

document.addEventListener('click', (e) => {
  if (!e.target.closest(".rooms")) {
    isFormActive.value = false
  }
});

</script>
 
