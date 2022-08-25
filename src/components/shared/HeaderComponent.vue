<script setup>
import { ref } from 'vue'
import emitter from '../../EventBus'
import VideoComponent from '../sources/VideoComponent.vue'
import MenuComponent from './MenuComponent.vue'
import TagsListComponent from '../Tags/TagsListComponent.vue'
import FormComponent from '../Form/FormComponent.vue'

const tagsList = [
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
]

const inputSearch = ref('')

const onHandleSubmit = queryString => {
  if (!queryString) return

  inputSearch.value = queryString

  emitter.emit('on-input-search', inputSearch.value)
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
    <div class="flex w-full flex-col items-center px-5 py-10 md:mt-10 md:py-5 lg:mt-10">
      <FormComponent v-model:search="inputSearch" @on-submit="onHandleSubmit" />

      <!-- tags container -->
      <div
        class="flex h-auto w-full max-w-screen-md flex-wrap justify-start py-3 hover:cursor-pointer md:justify-start md:px-0">
        <TagsListComponent :tags-list="tagsList" @on-click="onHandleSubmit" />
      </div>
    </div>
  </header>
</template>
