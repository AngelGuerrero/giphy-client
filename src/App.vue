<script setup>
import emitter from './EventBus'
import { onMounted, ref } from 'vue'
import { getPopularGifs } from './composition/useGetGifs'
import MenuComponent from './components/shared/MenuComponent.vue'
import HeaderComponent from './components/shared/HeaderComponent.vue'
import CardListComponent from './components/shared/CardListComponent.vue'

const popularGifs = ref([])

onMounted(async () => {
  popularGifs.value = await getPopularGifs('pet dog', 4)
})

emitter.on('on-input-search', async query => {
  popularGifs.value = await getPopularGifs(query)
})
</script>

<template>
  <div class="wrapper relative h-auto bg-neutral-800">
    <HeaderComponent class="header" />

    <main
      class="main relative z-20 mx-auto mt-0 mb-10 h-full w-full max-w-screen-xl overflow-y-scroll bg-stone-800 bg-opacity-70 md:-mt-20 md:h-auto md:overflow-auto md:rounded">
      <CardListComponent :gifs="popularGifs" />
    </main>

    <footer class="footer">
      <MenuComponent screen-position="bottom" />
    </footer>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: minmax(50px, auto) auto minmax(auto, 60px);

  grid-template-areas:
    'header header'
    'main main'
    'footer footer';
}
@media screen and (min-width: 768px) {
  .wrapper {
    display: block;
  }
}

.header {
  grid-area: header;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}
</style>
