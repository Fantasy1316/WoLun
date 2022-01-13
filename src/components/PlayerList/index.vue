<template>
  <div
    class="player-list-mask"
    v-show="state.show"
    @click="closePlayerList"
  ></div>
  <div
    class="player-list-content"
    :class="{ 'player-list-content__show': state.show }"
  >
    <div class="content-title">
      <p class="content-title--text">播放列表（50首）</p>
      <p class="content-title--fun" @click="handleSetPlayMode">
        <i class="iconfont" :class="modeIcon"></i>
        <span class="fun-text">{{ modeText }}</span>
      </p>
      <i class="iconfont icon-shanchu"></i>
    </div>
    <div class="content-songs">
      <p
        class="content-songs--item"
        :class="{
          'content-songs--item__current': item.id === currentPlaySong.id
        }"
        v-for="item in state.playList"
        :key="item.id"
      >
        <i
          class="iconfont icon-bofangzhong"
          v-if="item.id === currentPlaySong.id"
        ></i>
        <span class="item-name">
          {{ item.name }}
          <span class="item-name--singer">- {{ item.singer }}</span>
        </span>
        <i class="iconfont icon-chahao"></i>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const store = useStore()
const currentPlaySong = computed(() => store.state.player.currentPlaySong)
const playMode = computed(() => store.state.player.playMode)
const modeIcon = computed(() => {
  return playMode.value === 0
    ? 'icon-suijibofang'
    : playMode.value === 1
    ? 'icon-danquxunhuan'
    : 'icon--lbxh'
})
const modeText = computed(() => {
  return playMode.value === 0
    ? '随机播放'
    : playMode.value === 1
    ? '单曲循环'
    : '顺序播放'
})

const emits = defineEmits(['update:modelValue'])

const state = reactive({
  show: props.modelValue,
  playList: [
    {
      id: 0,
      name: '爱在西元前',
      singer: '周杰伦',
      ablum: '《范特西》',
      publicDate: '2001年',
      coverImg: 'http://img.fechen.cn/uploadfile/static/2022/01/11/fantic.jpg'
    },
    {
      id: 1,
      name: '夜曲',
      singer: '周杰伦',
      ablum: '《十一月的肖邦》',
      publicDate: '2004年',
      coverImg: 'http://img.fechen.cn/uploadfile/static/2022/01/11/fantic.jpg'
    },
    {
      id: 2,
      name: '等你下课（with杨代瑞）',
      singer: '周杰伦/杨代瑞',
      ablum: '《等你下课》',
      publicDate: '2020年',
      coverImg: 'http://img.fechen.cn/uploadfile/static/2022/01/11/fantic.jpg'
    },
    {
      id: 3,
      name: '你是我的OK蹦',
      singer: '周杰伦/浪花兄弟',
      ablum: '《你是我的OK蹦》',
      publicDate: '2016年',
      coverImg: 'http://img.fechen.cn/uploadfile/static/2022/01/11/fantic.jpg'
    },
    {
      id: 4,
      name: '我落泪情绪零碎',
      singer: '周杰伦',
      ablum: '《我落泪情绪零碎》',
      publicDate: '2021年',
      coverImg: 'http://img.fechen.cn/uploadfile/static/2022/01/11/fantic.jpg'
    }
  ]
})

const closePlayerList = () => {
  emits('update:modelValue', false)
}

const handleSetPlayMode = () => {
  if (playMode.value === 2) {
    store.commit('SET_PLAYMODE', 0)
  } else if (playMode.value < 2) {
    store.commit('SET_PLAYMODE', playMode.value + 1)
  }
}

watch(
  () => props.modelValue,
  (newVal) => {
    state.show = newVal
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
  bottom: -840rpx;
  display: flex;
  flex-direction: column;
  height: 800rpx;
  padding: 28rpx;
  background-color: #fff;
  border-radius: 40rpx;
  z-index: 1001;
  transition: all 0.4s ease;

  &__show {
    bottom: 20rpx;
  }

  .content-title {
    display: flex;
    align-items: center;
    margin-bottom: 24rpx;

    &--text {
      flex: 1;
      font-size: 36rpx;
    }

    &--fun {
      display: flex;
      align-items: center;
      margin: 0 28rpx;
      font-size: 28rpx;
      color: #565656;

      .iconfont {
        margin-right: 8rpx;
        font-size: 28rpx;
        color: #999;
      }
    }

    .icon-shanchu {
      font-size: 34rpx;
      color: #565656;
    }
  }

  .content-songs {
    flex: 1;
    overflow-y: scroll;

    &--item {
      display: flex;
      align-items: center;
      margin-bottom: 28rpx;
      color: #333;

      &__current {
        .icon-bofangzhong {
          color: #ff88b4;
        }

        .item-name {
          color: #ff88b4;
        }
      }

      .icon-bofangzhong {
        margin-right: 12rpx;
      }

      .item-name {
        flex: 1;
        @include --mixins-ellipsis(1);

        &--singer {
          font-size: 24rpx;
          color: #999;
        }
      }

      .icon-chahao {
        font-size: 36rpx;
        color: #999;
      }
    }
  }
}
</style>
