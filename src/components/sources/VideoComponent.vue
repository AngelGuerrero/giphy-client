<script setup>
import { onMounted, reactive } from 'vue'
import { Service } from '../../api/service'

const video = reactive({
  source: null,
  width: 0,
  height: 0
})

const getBackgroundFromPexels = async () => {
  const MAX_VIDEOS = 50
  const service = new Service(import.meta.env.VITE_PEXELS_VIDEOS_URL)

  const query = {
    query: 'puppies',
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
</template>
