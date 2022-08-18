<script setup>
import { onMounted, reactive } from 'vue'
import { Service } from './api/service'

const video = reactive({
  source: null,
  width: 0,
  height: 0
})

const getBackgroundFromPexels = async () => {
  const MAX_VIDEOS = 50
  const service = new Service(import.meta.env.VITE_PEXELS_VIDEOS_URL)

  const query = {
    query: 'dogs',
    per_page: MAX_VIDEOS,
    page: 1,
    orientation: 'landscape',
    size: 'large'
  }

  const { error, data } = await service.all(
    'search?' + service.createParams(query)
  )

  if (error) {
    return
  }

  const randomIndex = Math.floor(Math.random() * MAX_VIDEOS)

  video.width = data.videos[randomIndex].width
  video.height = data.videos[randomIndex].height
  video.source = data.videos[randomIndex].video_files[0].link
}

onMounted(() => {
  getBackgroundFromPexels()
})
</script>

<template>
  <div class="bg-slate-200">
    <header class="h-screen overflow-hidden bg-slate-700">
      <!-- video header background -->
      <div class="absolute top-0 left-0 w-full h-full">
        <video
          v-if="video.source"
          :src="video.source"
          :width="video.width"
          :height="video.height"
          autoplay
          loop
          muted
          class="">
          This browser does not support the HTML5 video element.
        </video>
      </div>

      <!-- header container -->
      <div
        class="absolute top-0 bottom-0 left-0 right-0 z-20 w-full h-full bg-transparent">
        <!-- menu component -->
        <menu class="flex w-full p-8">
          <div class="flex items-center w-1/2 px-5">
            <h1 class="mr-3 text-2xl font-bold text-white">Pinkas</h1>

            <button class="px-5 py-2 font-bold text-white rounded bg-lime-600">
              New post
            </button>
          </div>

          <div class="flex items-center justify-end w-1/2">
            <button
              class="px-5 py-2 mr-3 font-bold text-white rounded bg-lime-transparent">
              Sign in
            </button>

            <button class="px-5 py-2 font-bold text-white bg-blue-600 rounded">
              Sign up
            </button>
          </div>
        </menu>

        <!-- search component -->
        <div class="flex flex-col items-center w-full mt-48">
          <input
            type="text"
            placeholder="Find adorable puppies!"
            class="w-1/2 px-5 py-3 border-4 rounded-md outline-none border-amber-500 placeholder:text-amber-700 placeholder:font-bold focus:border-amber-300 focus:outline-2 focus:outline focus:outline-offset-4 focus:outline-blue-500" />

          <!-- tags container -->
          <div class="flex w-1/2 py-3">
            <div
              class="flex items-center px-3 py-1 mr-2 text-sm font-bold text-white rounded shadow bg-slate-800">
              dogs
            </div>
            <div
              class="flex items-center px-3 py-1 mr-2 text-sm font-bold text-white rounded shadow bg-slate-800">
              funny dogs
            </div>
            <div
              class="flex items-center px-3 py-1 mr-2 text-sm font-bold text-white rounded shadow bg-slate-800">
              dogs playing
            </div>
            <div
              class="flex items-center px-3 py-1 mr-2 text-sm font-bold text-white rounded shadow bg-slate-800">
              dog toys
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="z-50 relative max-w-screen-lg mx-auto -mt-[150px] bg-white">
      <!-- container cards -->
      <div class="grid grid-cols-4 gap-4 dev">
        <div class="rounded dev">
          <img src="" alt="" />
        </div>
        <div class="rounded dev">card dog with gif</div>
        <div class="rounded dev">card dog with gif</div>
        <div class="rounded dev">card dog with gif</div>
      </div>
    </main>

    <!-- Footer with menu -->
    <footer>footer that contains also menu</footer>
  </div>
</template>
