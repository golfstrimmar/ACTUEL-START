<template lang='pug'>
li.stell__item
  h3 {{card.titleItem}}
  p {{land}}
  p З/П от {{card.gehaltItem}} евро
  a.btn.btn-success.but-wave.popups-init-js(rel='#popup1' href='#!') Узнать детали
  svg(@click='delitCard(card)')
    use(xlink:href='#x-lg')
</template>
<script setup>
import { useTaskStelle } from "../../js/store/taskStell";
const taskStell = useTaskStelle();
const props = defineProps({
  card: {
    type: Object,
    required: false
  },
  land: {
    type: String,
    required: false
  }
})

const delitCard = (card) => {
  taskStell.DelitItem(card.titleItem, props.land)
}
</script>
<style lang='scss' scoped></style>
