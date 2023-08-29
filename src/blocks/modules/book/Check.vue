<template>
  <Datepicker v-model="date" :offset="20" :enable-time-picker="false" locale="ru" position="left" multi-calendars/>
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import { ref, onMounted } from 'vue';

const date = ref('');

onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate()));
  date.value = [startDate, endDate];
})
</script>

