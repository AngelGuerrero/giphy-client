<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  screenPosition: {
    type: String,
    required: true,
    validator(value: string) {
      return ['top', 'bottom'].includes(value)
    }
  }
})

const title = 'Pinkas'
</script>

<template>
  <menu v-if="screenPosition === 'top'" class="hidden w-full p-8 md:flex">
    <div class="flex items-center w-1/2 px-5">
      <h1 class="mr-3 text-2xl font-bold text-white">{{ title }}</h1>

      <button
        class="px-5 py-2 font-bold text-white transition delay-150 bg-green-600 rounded shadow hover:bg-green-500">
        New post
      </button>
    </div>

    <div class="flex items-center justify-end w-1/2">
      <button
        class="px-5 py-2 mr-3 font-bold text-white rounded bg-indigo-transparent">
        Sign in
      </button>

      <button
        class="px-5 py-2 font-bold text-white transition delay-150 bg-blue-700 rounded hover:bg-blue-500">
        Sign up
      </button>
    </div>
  </menu>

  <menu
    v-if="screenPosition === 'bottom'"
    class="block h-full bg-zinc-900 md:hidden">
    <ul class="flex h-full">
      <li
        class="flex items-center justify-center p-5 text-2xl font-bold text-amber-400">
        {{ title }}
      </li>
      <li
        class="flex items-center justify-center p-5 text-sm text-zinc-400 hover:underline underline-offset-8 hover:cursor-pointer grow">
        <a href="">New post</a>
      </li>
      <li
        class="flex items-center justify-center p-5 text-sm text-zinc-400 hover:underline underline-offset-8 hover:cursor-pointer grow">
        <a href="">Sign in</a>
      </li>
      <li
        class="flex items-center justify-center p-5 text-sm text-zinc-400 hover:underline underline-offset-8 hover:cursor-pointer grow">
        <a href="">Sign up</a>
      </li>
    </ul>
  </menu>
</template>
