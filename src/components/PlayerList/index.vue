<template>
  <div class="player-list" v-show="state.show">
    <p @click="closePlayerList">Close</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

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
  }
)
</script>

<style lang="scss" scoped>
.player-list {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
