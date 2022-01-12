<template>
  <view class="container">
    <custom-nav></custom-nav>
    <div class="content">
      分类
    </div>
    <custom-bar></custom-bar>
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  @include --mixins-container(#f8f8f8);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .content {
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
