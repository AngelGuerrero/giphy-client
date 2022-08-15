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
  <h1 class="text-3xl font-bold text-center text-white">{{ msg }}</h1>

  <div class="flex flex-col items-center">
    <button
      type="button"
      @click="count++"
      class="px-4 py-1 my-4 text-white bg-gray-900 border border-indigo-600 rounded"
    >
      count is {{ count }}
    </button>
  </div>
</template>

<style scoped></style>
