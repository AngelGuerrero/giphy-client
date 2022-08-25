<script setup>
import { defineProps, ref } from 'vue'
import CardComponent from './CardComponent.vue'

defineProps({
  gifs: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="px-3 md:flex md:flex-wrap">
    <div v-for="gif in gifs" :key="gif.id" class="m-4 flex grow flex-col hover:cursor-pointer">
      <CardComponent :gif="gif" />
    </div>
  </div>
</template>
