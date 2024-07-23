<template lang="pug">
.container
  .stell__title
    h2 вакансии (vue)
    p {{staat.selectActivePlaza}}
    nav.stell__nav
      button.btn.btn-empty(type='button' v-for='item in staat' :key='item.id' @click.prevent='ActiveStaat(item) ' :class="[(item.isVisible) ? '_is-active' : '' ]"
)  {{item.title}}
  transition(mode='easy-in-out' name='plaza')
    ul.stell__plaza
      Card(v-for="item in itemContent" :key="item.titleItem"    :card='item' :land='itemLand'   )

  form(action="send" name="staat").send#staat-form.stell__form
    .send__linia.input-field
      input#staat(type='text' name='staat1' v-model="staatName" placeholder=' Denzel Washington' 
      )
      label.text-field__label(for='staat1') Staat
    .send__linia.input-field
      input#Beruf(type='text' name='staat2' v-model="Beruf" placeholder=' Denzel Washington' 
      )
      label.text-field__label(for='staat2') Beruf
    .send__linia.input-field
      input#Inhalt(type='text' name='staat3' v-model="Inhalt" placeholder=' Denzel Washington' 
      )
      label.text-field__label(for='staat3') Inhalt
    .btn.btn-success.but-wave(type='submit' @click.prevent='AddStaat') Hinfügen


</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { ref, onMounted, computed, watch } from 'vue'
import { useTaskStelle } from "../../js/store/taskStell"
const taskStell = useTaskStelle();
import Card from './Card.vue';
let newStaat = ref({})
let staatName = ref('')
let Beruf = ref('')
let Inhalt = ref('')
let itemContent = ref([])
let itemLand = ref('')
let switchPlaza = ref(false)

import { storeToRefs } from 'pinia';
const { staat } = storeToRefs(taskStell)

const AddStaat = () => {
  taskStell.addStaat(taskStell.staat.length + 1, staatName, Beruf, Inhalt);
  staatName.value = "";
  Beruf.value = "";
  Inhalt.value = "";
}
const ActiveStaat = (item) => {




  let plaza = document.querySelector(".stell__plaza");
  const anim = plaza.animate(
    [{ opacity: 1 }, { opacity: 0 }],
    {
      duration: 200,
      easing: "ease-in-out",
    }
  );
  const beendet = () => {
    plaza.style.opacity = 1; taskStell.ActiveStaat(item); itemContent.value = item.content;
    itemLand.value = item.title;
  };
  anim.addEventListener("finish", (e) => { beendet(); });
}


onMounted(() => {
  taskStell.staat[0].isVisible = true
  itemContent.value = taskStell.staat[0].content;
  itemLand.value = taskStell.staat[0].title;
})
</script>

<style lang="scss" scoped></style>