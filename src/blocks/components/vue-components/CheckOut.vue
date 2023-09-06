<template>
  <p :class="[{ '_empty-data': date === '' }]">Выезд *</p>
  <Datepicker v-model="date" :format="format" :enable-time-picker="false" locale="ru" position="left" :offset="10"
    auto-apply @closed="closedFn" @focus="focusFn" />
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import { ref } from 'vue';
const date = ref('');

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

const focusFn = () => {
  document.querySelector('#check-out').closest('.form-field').querySelector('.form-field__area-svg').style.transform = "translateY(-50%) rotate(180deg)"
}

const closedFn = () => {
  if (date.value !== '') {
    document.querySelector('#check-out').closest('.form-field').classList.add('_is-active')
    document.querySelector('#date-out').value = date.value
  }
  document.querySelector('#check-out').closest('.form-field').querySelector('.form-field__area-svg').style.transform = "translateY(-50%) "
}

</script>
