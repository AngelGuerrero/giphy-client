<script setup>
import { defineProps } from 'vue'

defineProps({
  tagsList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div
    class="flex h-auto w-full max-w-screen-md flex-wrap justify-start py-3 hover:cursor-pointer md:justify-start md:px-0">
    <div
      v-for="tag in tagsList"
      :key="tag.id"
      @click="$emit('on-click', tag.value)"
      class="mt-2 mr-1 flex h-fit items-center rounded bg-slate-800 px-3 py-1 text-sm font-bold text-white shadow transition ease-linear hover:bg-slate-500 md:mb-0">
      {{ tag.value }}
    </div>
  </div>
</template>
