<script setup>
import { ref } from 'vue'

defineProps({
  msg: {
    type: String,
    default: 'Vite + Vue'
  }
})

const count = ref(0)
</script>

<template>
  <h1 class="text-center text-3xl font-bold text-white">{{ msg }}</h1>

  <div class="flex flex-col items-center">
    <button
      type="button"
      @click="count++"
      class="my-4 rounded border border-indigo-600 bg-gray-900 px-4 py-1 text-white">
      count is {{ count }}
    </button>
  </div>
</template>

<style scoped></style>
