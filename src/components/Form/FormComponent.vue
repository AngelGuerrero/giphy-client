<script setup>
import { defineProps } from 'vue'

defineProps({
  search: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <form @submit.prevent="$emit('on-submit', search)" class="w-full max-w-screen-md">
    <input
      :value="search"
      @change="$emit('update:search', $event.target.value)"
      type="text"
      placeholder="Find adorable puppies!"
      class="focus:outline<Tags-2 w-full max-w-screen-md select-text rounded-md border-4 border-amber-500 px-5 py-3 outline-none placeholder:font-bold placeholder:text-amber-700 focus:border-amber-300 focus:outline focus:outline-offset-4 focus:outline-blue-500" />
  </form>
</template>
