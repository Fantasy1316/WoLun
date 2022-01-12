<template>
  <div class="custom-nav" :style="customNavStyle">WoLun</div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'

const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
console.log(menuButtonInfo)

const customNavStyle = computed(() => ({
  height: menuButtonInfo.height + 'px',
  lineHeight: menuButtonInfo.height + 'px',
  padding: `${menuButtonInfo.top}px ${menuButtonInfo.width + 10}px 10px 14px`,
  backgroundColor: '#ff88b4'
}))
</script>

<style lang="scss" scoped>
.custom-nav {
  background-color: #ccc;
}
</style>
