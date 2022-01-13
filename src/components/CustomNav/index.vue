<template>
  <div class="custom-nav" :style="customNavStyle">
    <i
      class="iconfont icon-xiangzuo"
      v-if="backIconShow"
      @click="handleNavBack"
    ></i>
    <span class="custom-nav--title">{{ props.title }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'

const props = defineProps({
  // 标题
  title: {
    type: String,
    default: 'WoLun'
  },
  // 标题字体颜色
  color: {
    type: String,
    default: '#fff'
  },
  // 背景颜色
  backgroundColor: {
    type: String,
    default: '#ff88b4'
  }
})

const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
const customNavStyle = computed(() => ({
  height: menuButtonInfo.height + 'px',
  lineHeight: menuButtonInfo.height + 'px',
  padding: `${menuButtonInfo.top}px ${menuButtonInfo.width + 10}px 10px 14px`,
  color: props.color,
  backgroundColor: props.backgroundColor
}))

const backIconShow = getCurrentPages().length >= 2

const handleNavBack = () => {
  uni.navigateBack({ delta: 1 })
}
</script>

<style lang="scss" scoped>
.custom-nav {
  display: flex;

  .iconfont {
    padding-right: 20rpx;
    font-size: 36rpx;
    font-weight: 700;
  }

  &--title {
    font-size: 32rpx;
  }
}
</style>
