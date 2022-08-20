<script setup>
import { defineProps } from 'vue'

defineProps({
  gifs: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="px-3 md:flex md:flex-wrap">
    <div
      v-for="gif in gifs"
      :key="gif.id"
      class="flex flex-col m-4 grow hover:cursor-pointer">
      <img
        class="flex w-full max-h-[300px] object-cover h-full p-1 rounded shadow bg-zinc-500 hover:bg-gradient-to-r from-blue-300 via-green-500 to-purple-300 grow"
        :src="gif.images.downsized.url"
        :height="gif.images.downsized.height"
        :width="gif.images.downsized.width" />
      <div
        class="p-3 bg-black rounded-b bg-gradient-to-r from-black via-blue-900 to-purple-800">
        <h3 class="text-2xl font-bold text-white">{{ gif.title }}</h3>
        <p class="text-white">{{ gif.description }}</p>
      </div>
    </div>
  </div>
</template>
