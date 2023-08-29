<template>
  <Datepicker  v-model="year" year-picker :offset="20" :enable-time-picker="false" locale="ru" position="left"  />
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import { ref, onMounted } from 'vue';

const year = ref();

onMounted(() => {
 year.value = ref(new Date().getFullYear());
})

</script>
