<template>
  <div class="player-list-mask" v-show="state.show" @click="closePlayerList">
  </div>
  <div class="player-list-content" :class="{ 'player-list-content__show': state.show }">

  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import useAnimation  from './useAnimation'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const { maskAnimation, contentAnimation, maskAnimationFun, contentAnimationFun } = useAnimation()

const emits = defineEmits(['update:modelValue'])

const state = reactive({
  show: props.modelValue
})

const closePlayerList = () => {
  emits('update:modelValue', false)
}

watch(
  () => props.modelValue,
  (newVal) => {
    state.show = newVal
    if (newVal) {
      maskAnimationFun()
      contentAnimationFun()
    }
  }
)
</script>

<style lang="scss" scoped>
.player-list-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
}

.player-list-content {
  position: fixed;
  left: 20rpx;
  right: 20rpx;
  bottom: -800rpx;
  height: 800rpx;
  background-color: #fff;
  border-radius: 40rpx;
  z-index: 1001;
  transition: all 0.4s ease;

  &__show {
    bottom: 20rpx;
  }
}
</style>
