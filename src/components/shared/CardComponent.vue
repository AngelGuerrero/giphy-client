<script setup>
import { defineProps, ref } from 'vue'

defineProps({
  gif: {
    type: Object,
    required: true
  }
})

const loaded = ref(false)

const onLoad = () => {
  loaded.value = true
}
</script>

<template>
  <img
    v-show="loaded"
    @load="onLoad"
    :src="gif.images.downsized.url"
    :height="gif.images.downsized.height"
    :width="gif.images.downsized.width"
    class="flex h-full max-h-[300px] w-full grow rounded bg-zinc-500 from-blue-300 via-green-500 to-purple-300 object-cover p-1 shadow hover:bg-gradient-to-r" />

  <div
    v-if="!loaded"
    class="w-fit animate-pulse rounded bg-gradient-to-r from-blue-600 to-blue-400 object-cover p-1 shadow">
    <div role="status">
      <div class="flex h-48 min-w-[200px] p-10">
        <svg
          class="text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 640 512">
          <path
            d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
        </svg>
      </div>
    </div>
  </div>

  <div
    v-if="loaded"
    class="rounded-b bg-black bg-gradient-to-r from-black via-blue-900 to-purple-800 p-3">
    <h3 class="text-2xl font-bold text-white">{{ gif.title }}</h3>
    <p class="text-white">{{ gif.description }}</p>
  </div>
</template>
