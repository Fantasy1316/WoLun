<template>
  <div class="search">
    <div class="search-cont">
      <i class="iconfont icon-search"></i>
      <span class="search-cont--text">搜索歌曲、歌单、专辑</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.search {
  padding: 20rpx 28rpx;

  &-cont {
    display: flex;
    align-items: center;
    height: 68rpx;
    font-size: 28rpx;
    color: #ff88b4;
    background-color: #fff;
    border: 1rpx solid #ff88b4;
    border-radius: 68rpx;

    .icon-search {
      padding: 0 12rpx 0 20rpx;
    }

    &--text {
      color: #ccc;
    }
  }
}
</style>
