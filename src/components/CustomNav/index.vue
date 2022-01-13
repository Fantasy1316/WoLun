<template>
  <div class="custom-nav" :style="customNavStyle">
    <div class="custom-nav--back" v-if="navButtonShow">
      <i class="iconfont icon-xiangzuo" @click="handleNavigateBack(1)"></i>
      <i class="iconfont icon-home" @click="handleNavigateTo('/pages/Index/index', true)"></i>
    </div>
    <span class="custom-nav--title">{{ props.title }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useNavigateMethods } from '@/utils/global'

const props = defineProps({
  // 标题
  title: {
    type: String,
    required: false
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

const { handleNavigateBack, handleNavigateTo } = useNavigateMethods()

const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
const customNavStyle = computed(() => ({
  height: menuButtonInfo.height + 'px',
  lineHeight: menuButtonInfo.height + 'px',
  padding: `${menuButtonInfo.top}px ${menuButtonInfo.width + 10}px 10px 14px`,
  color: props.color,
  backgroundColor: props.backgroundColor
}))

const navButtonShow = getCurrentPages().length >= 2

</script>

<style lang="scss" scoped>
.custom-nav {
  display: flex;

  &--back {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 160rpx;
    height: 58rpx;
    border-radius: 50rpx;

    .iconfont {
      position: relative;
      font-size: 32rpx;
      z-index: 1;

      &:first-child {
        padding-left: 24rpx;
      }

      &:last-child {
        padding-right: 24rpx;

      }
    }


    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      border: 1rpx solid #555;
      border-radius: 100rpx;
      background-color: rgba(0, 0, 0, 0.2);
      transform: scale(0.5);
      z-index: 0;
    }

    &::before {
      content: '';
      position: absolute;
      top: -28rpx;
      left: 50%;
      height: 114rpx;
      border-left: 1rpx solid #dddddd;
      transform: scale(0.3);
    }
  }

  

  &--title {
    font-size: 32rpx;
  }
}
</style>
