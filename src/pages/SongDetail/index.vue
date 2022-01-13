<template>
  <div class="container" :style="containerBgi">
    <custom-nav
      :title="currentPlaySong.name"
      background-color="transparent"
    ></custom-nav>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const currentPlaySong = computed(() => store.state.player.currentPlaySong)

console.log(currentPlaySong)

const containerBgi = computed(() => ({
  background: `url(${currentPlaySong.value.bgiUrl}) no-repeat`,
  backgroundSize: 'auto 100%',
  backgroundPosition: 'center top'
}))
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  @include --mixins-container(#333);

  .content {
    flex: 1;
  }
}
</style>
