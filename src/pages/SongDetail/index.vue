<template>
  <div class="container" :style="containerBgi">
    <custom-nav background-color="transparent"></custom-nav>
    <div class="content">
      <div class="content-header">
        <p class="content-header--name">{{ currentPlaySong.name }}</p>
        <p class="content-header--singer">{{ currentPlaySong.singer }}</p>
      </div>
      <div class="content-disc">
        <div class="content-disc--img" :style="discRotate">
          <img :src="currentPlaySong.coverImg" class="cover-img" alt="" />
        </div>
      </div>
      <div class="content-indicator"></div>
      <div class="content-contral">
        <div class="content-contral--progress">
          <p class="progress-time">
            {{ handleTimeFormat(currentPosition) }}
          </p>
          <div class="progress-main">
            <p class="main-line"></p>
          </div>
          <p class="progress-time">
            {{ handleTimeFormat(playerState.duration) }}
          </p>
        </div>
        <div class="content-contral--fun">
          <i class="iconfont icon-xihuan-kongpt"></i>
          <i class="iconfont icon-shangyiqu"></i>
          <div class="fun-main" @click="handleSetPlayerState">
            <i class="iconfont icon-bofang" v-if="playerState.status === 1"></i>
            <i class="iconfont icon-zanting" v-else></i>
          </div>
          <i class="iconfont icon-xiangyiqu"></i>
          <i
            class="iconfont icon-caidan"
            @click.stop="handleSetPlayerListShow"
          ></i>
        </div>
      </div>
    </div>

    <!-- 播放列表 -->
    <player-list v-model="playerListShow"></player-list>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onBeforeMount,
  watch,
  onBeforeUnmount
} from 'vue'
import { useStore } from 'vuex'
import PlayerList from '@/components/PlayerList/index.vue'

const store = useStore()
const currentPlaySong = computed(() => store.state.player.currentPlaySong)
const playerState = computed(() => store.state.player.playerState)
console.log(playerState.value)

// 播放列表显示/隐藏
const playerListShow = ref(false)
const handleSetPlayerListShow = () => {
  playerListShow.value = true
}

// 页面背景图
const containerBgi = computed(() => ({
  background: `url(${currentPlaySong.value.bgiUrl}) no-repeat`,
  backgroundSize: 'auto 100%',
  backgroundPosition: 'center top'
}))

const discRotate = computed(() => {
  return playerState.value.status
    ? {
        animation: '--animation-rotate 20s linear infinite'
      }
    : ''
})

// 控制音乐播放/暂停
const handleSetPlayerState = () => {
  const { status } = playerState.value
  if (status === 1) {
    uni.pauseBackgroundAudio()
  } else if (status === 0) {
    uni.playBackgroundAudio({
      dataUrl: '',
      title: '',
      coverImgUrl: ''
    })
  }
}

// 进度 时间
const currentPosition = ref(0)
let timer = setInterval(() => {
  currentPosition.value += 1
}, 1000)

const handleTimerInit = () => {
  clearInterval(timer)
  timer = setInterval(() => {
    currentPosition.value += 1
  }, 1000)
}

watch(
  () => playerState.value,
  (newVal: any) => {
    currentPosition.value = newVal.currentPosition

    if (newVal.status === 1) {
      handleTimerInit()
    } else {
      clearInterval(timer)
    }
  },
  {
    immediate: true
  }
)

// 处理时间
const handleTimeFormat = (time: number) => {
  if (time >= 60) {
    const minute = Math.floor(time / 60)
    const second = time % 60
    return `${minute >= 10 ? minute : '0' + minute}:${
      second >= 10 ? second : '0' + second
    }`
  } else {
    return `00:${time >= 10 ? time : '0' + time}`
  }
}

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  @include --mixins-container(#333);

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;

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
      background: url('http://img.fechen.cn/uploadfile/static/2022/01/11/player-disc.png')
        no-repeat;
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
        // animation: --animation-rotate 20s linear infinite;

        .cover-img {
          width: 100%;
          height: 100%;
        }
      }
    }

    &-indicator {
      flex: 1;
    }

    &-contral {
      padding: 0 50rpx 60rpx;

      &--progress {
        display: flex;
        align-items: center;
        margin-bottom: 32rpx;

        .progress-time {
          font-size: 32rpx;
          color: #fff;
        }

        .progress-main {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 20rpx;

          .main-line {
            flex: 1;
            position: relative;
            top: 2rpx;
            height: 4rpx;
            border-radius: 4rpx;
            background-color: rgba(255, 255, 255, 0.2);

            &:after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 90%;
              bottom: 0;
              background-color: #fff;
              border-radius: 4rpx;
            }
          }
        }
      }

      &--fun {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .iconfont {
          font-size: 52rpx;
          color: #fff;
        }

        .fun-main {
          .iconfont {
            font-size: 110rpx;
          }
        }
      }
    }
  }
}
</style>
