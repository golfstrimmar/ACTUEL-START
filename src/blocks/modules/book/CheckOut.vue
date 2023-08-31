<template>
  <Datepicker v-model="date" :format="format" :enable-time-picker="false" locale="ru" position="left" :offset="10" auto-apply
    @closed="closedFn" @focus="focusFn" />
  <!-- <Datepicker v-model="date" range :offset="20" :format="format" :enable-time-picker="false" locale="ru" position="left" multi-calendars/> -->
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import { ref, onMounted } from 'vue';

const date = ref(new Date());

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return ` ${day}.${month}.${year}`;
}

const focusFn = () => {
 
  if (document.querySelector('#check-out').querySelector('input.dp__pointer').value == '') {
    document.querySelector('#check-out').querySelector('input.dp__pointer').style.position = "absolute";
    document.querySelector('#check-out').querySelector('input.dp__pointer').style.opacity = 0;
  }
  document.querySelector('#check-out').closest('.form-field').querySelector('.form-field__area-svg').style.transform = "translateY(-50%) rotate(180deg)"
}

const closedFn = () => {

  document.querySelector('#check-out').querySelector('input.dp__pointer').style.opacity = 1;
  document.querySelector('#check-out').querySelector('input.dp__pointer').style.position = "relative";
  document.querySelector('#check-out').querySelector('input.dp__pointer').style.minHeight = 0;
  document.querySelector('#check-out').closest('.form-field').querySelector('.form-field__span').style.position = "relative";
  document.querySelector('#check-out').closest('.form-field').querySelector('.form-field__span').style.transform = "translateY(0%)";
  document.querySelector('#check-out').closest('.form-field').style.minHeight = '75px'
  document.querySelector('#check-out').closest('.form-field').style.paddingTop = '10px'
  document.querySelector('#check-out').closest('.form-field').querySelector('.form-field__area-svg').style.transform = "translateY(-50%) "
}


onMounted(() => {
  document.querySelector('#check-out').querySelector('input.dp__pointer').style.opacity = 0;
  document.querySelector('#check-out').querySelector('input.dp__pointer').style.position = "relative";
  document.querySelector('#check-out').querySelector('input.dp__pointer').style.minHeight = "51px";
})

</script>

