<template>
  <div class="container" :style="containerBgi">
    <custom-nav
      background-color="transparent"
    ></custom-nav>
    <div class="content">
      <div class="content-header">
        <p class="content-header--name">{{ currentPlaySong.name }}</p>
        <p class="content-header--singer">{{ currentPlaySong.singer }}</p>
      </div>
      <div class="content-disc">
        <div class="content-disc--img">
          <img :src="currentPlaySong.coverImg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const currentPlaySong = computed(() => store.state.player.currentPlaySong)

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

    &-header {
      margin: 40rpx 0 40rpx;
      color: #fff;
      text-align: center;

      &--name {
        margin-bottom: 10rpx;
        font-size: 32rpx;
      }

      &--singer {
        color: #999;
      }
    }

    &-disc {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 600rpx;
      height: 600rpx;
      margin: 80rpx auto 0;
      background: url('http://img.fechen.cn/uploadfile/static/2022/01/11/player-disc.png') no-repeat;
      background-size: 104%;
      background-position: center;
      background-color: #333;
      border-radius: 600rpx;

      &--img {
         display: flex;
        justify-content: center;
        align-items: center;
        width: 412rpx;
        height: 412rpx;
        background-color: #fff;
        border-radius: 412rpx;
        overflow: hidden;

        .cover-img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
