<script setup>
import { ref } from 'vue'
import emitter from '../../EventBus'
import VideoComponent from '../sources/VideoComponent.vue'
import MenuComponent from './MenuComponent.vue'

const tagsList = ref([
  { value: 'dog' },
  { value: 'adorable' },
  { value: 'funny dogs' },
  { value: 'dogs playing' },
  { value: 'dogs toys' },
  { value: 'programming' },
  { value: 'hacking' },
  { value: 'jokes' },
  { value: 'computers' },
  { value: 'mr robot' }
])

const inputSearch = ref('')

const onSubmitInput = () => {
  if (!inputSearch.value) return
  emitter.emit('on-input-search', inputSearch.value)
}

const onClickTag = tag => {
  inputSearch.value = tag
  onSubmitInput()
}
</script>

<template>
  <header class="relative z-10 overflow-hidden md:min-h-[30rem]">
    <!-- Background video -->
    <div class="absolute top-0 left-0 -z-10">
      <VideoComponent />
    </div>

    <!-- Menu component -->
    <MenuComponent screen-position="top" />

    <!-- Search component -->
    <div
      class="flex flex-col items-center w-full px-5 py-10 md:py-5 md:mt-10 lg:mt-10">
      <form @submit.prevent="onSubmitInput" class="w-full max-w-screen-md">
        <input
          v-model="inputSearch"
          type="text"
          placeholder="Find adorable puppies!"
          class="w-full max-w-screen-md px-5 py-3 border-4 rounded-md outline-none select-text border-amber-500 placeholder:text-amber-700 placeholder:font-bold focus:border-amber-300 focus:outline-2 focus:outline focus:outline-offset-4 focus:outline-blue-500" />
      </form>

      <!-- tags container -->
      <div
        class="flex flex-wrap justify-start w-full h-auto max-w-screen-md py-3 md:px-0 md:justify-start hover:cursor-pointer">
        <div
          v-for="tag in tagsList"
          :key="tag.id"
          @click="onClickTag(tag.value)"
          class="flex items-center px-3 py-1 mt-2 mr-1 text-sm font-bold text-white rounded shadow bg-slate-800 hover:bg-slate-500 h-fit md:mb-0">
          {{ tag.value }}
        </div>
      </div>
    </div>
  </header>
</template>
