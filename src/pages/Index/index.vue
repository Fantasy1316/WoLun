<template>
  <div class="container">
    <custom-nav title="WoLun"></custom-nav>
    <div class="content">
      <!-- 搜索 -->
      <div class="search">
        <div class="search-cont">
          <i class="iconfont icon-search"></i>
          <span class="search-cont--text">搜索歌曲、歌单、专辑</span>
        </div>
      </div>

      <!-- 歌曲推荐 -->
      <div class="recommend">
        <div class="recommend-title">
          <p class="recommend-title--text">推荐歌曲</p>
          <p class="recommend-title--more">
            更多
            <i class="iconfont icon-right"></i>
          </p>
        </div>
        <div class="recommend-list">
          <div
            class="recommend-list--item"
            v-for="item in rescoomedSongList"
            :key="item.id"
            @click="handlePlayCurrentSong(item)"
          >
            <div class="item-cover">
              <img :src="item.coverImg" class="item-cover--image" />
            </div>
            <div class="item-info">
              <p class="item-info--name">{{ item.name }}</p>
              <p class="item-info--desc">{{ item.singer }}・{{ item.ablum }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 精选歌单 -->
      <div class="recommend">
        <div class="recommend-title">
          <p class="recommend-title--text">精选歌单</p>
          <p class="recommend-title--more">
            更多
            <i class="iconfont icon-right"></i>
          </p>
        </div>
        <div class="recommend-order">
          <div
            class="recommend-order--item"
            v-for="item in recommendOrderList"
            :key="item.id"
          >
            <div class="item-top">
              <img
                src="http://img.fechen.cn/uploadfile/static/2022/01/11/fantic.jpg"
                class="item-top--pic"
              />
              <p class="item-top--count">
                <i class="iconfont icon-zhuanji"></i>
                {{ item.count }}首
              </p>
            </div>
            <div class="item-bottom">{{ item.desc }}</div>
          </div>
        </div>
      </div>

      <!-- 神级现场 -->
      <div class="recommend">
        <div class="recommend-title">
          <p class="recommend-title--text">神级现场</p>
          <p class="recommend-title--more">
            更多
            <i class="iconfont icon-right"></i>
          </p>
        </div>
        <div class="recommend-list">
          <div
            class="recommend-list--item"
            v-for="item in liveSongList"
            :key="item.id"
          >
            <div class="item-cover">
              <img :src="item.coverImg" class="item-cover--image" />
            </div>
            <div class="item-info">
              <p class="item-info--name">{{ item.name }}</p>
              <p class="item-info--desc">{{ item.singer }}・{{ item.ablum }}</p>
            </div>
            <i class="iconfont icon-bofangmv"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- 迷你播放器 -->
    <mini-player></mini-player>
    <custom-bar></custom-bar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
import MiniPlayer from '@/components/MiniPlayer/index.vue'
import { useNavigateMethods } from '@/utils/global'

const store = useStore()

const { handleNavigateTo } = useNavigateMethods()

const rescoomedSongList = ref([
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
    coverImg:
      'http://img.fechen.cn/uploadfile/static/2022/01/13/0A40CA801895449E80ECD91ED1B09297.jpg'
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
])

const recommendOrderList = ref([
  {
    id: 0,
    count: 15,
    desc: '周氏饶舌|目前还没有还没有发现对手'
  },
  {
    id: 1,
    count: 10,
    desc: '周氏饶舌|目前还没有还没有发现对手'
  },
  {
    id: 2,
    count: 8,
    desc: '周氏饶舌|目前还没有还没有发现对手'
  },
  {
    id: 3,
    count: 12,
    desc: '周氏饶舌|目前还没有还没有发现对手'
  },
  {
    id: 4,
    count: 20,
    desc: '周氏饶舌|目前还没有还没有发现对手'
  }
])

const liveSongList = ref([
  {
    id: 0,
    name: '不能说的秘密（Live）',
    singer: '周杰伦',
    ablum: '2020年地表最强嘉年华演唱会-深圳站',
    publicDate: '2021年',
    coverImg: 'http://img.fechen.cn/uploadfile/static/2022/01/11/fantic.jpg'
  },
  {
    id: 1,
    name: '梯田+爸我回来了（Live）',
    singer: '周杰伦',
    ablum: '2010年无与伦比演唱会-台北站',
    publicDate: '2021年',
    coverImg: 'http://img.fechen.cn/uploadfile/static/2022/01/11/fantic.jpg'
  },
  {
    id: 2,
    name: '蒲公英的约定（Live）',
    singer: '周杰伦',
    ablum: '2017年世界巡回演唱会-武汉站',
    publicDate: '2021年',
    coverImg: 'http://img.fechen.cn/uploadfile/static/2022/01/11/fantic.jpg'
  }
])

const handlePlayCurrentSong = (data: any) => {
  const { id, name, singer, ablum, coverImg } = data
  const bgiUrl =
    'http://img.fechen.cn/uploadfile/static/2022/01/13/0A40CA801895449E80ECD91ED1B09297-bgi.jpg'
  store.commit('SET_CURRENTPLAYSONG', {
    id,
    name,
    singer,
    ablum,
    coverImg,
    bgiUrl
  })
  store.commit('SET_PLAYERSTATUS', 1)
  handleNavigateTo('/pages/SongDetail/index')
}
</script>

<style lang="scss" scoped>
.container {
  @include --mixins-container(#f8f8f8);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .content {
    flex: 1;
    overflow-y: scroll;

    .search {
      padding: 20rpx 28rpx;
      background: linear-gradient(#f8f8f8, #fff);

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

    .recommend {
      padding: 20rpx 28rpx;
      margin-bottom: 28rpx;
      background-color: #fff;
      border-radius: 0 0 20rpx 20rpx;

      &-title {
        display: flex;
        align-items: center;
        margin-bottom: 20rpx;

        &--text {
          flex: 1;
          position: relative;
          font-size: 36rpx;
          font-weight: 700;
          color: #333;
          letter-spacing: 2rpx;
          z-index: 1;

          &:after {
            content: '';
            position: absolute;
            bottom: 4rpx;
            left: 0;
            width: 78rpx;
            height: 10rpx;
            background-color: rgb(255 136 180 / 100%);
            border-radius: 10rpx;
            z-index: -1;
          }
        }

        &--more {
          display: flex;
          align-items: center;
          font-size: 28rpx;
          color: #999;

          .iconfont {
            position: relative;
            top: 1rpx;
            left: -2rpx;
            font-size: 28rpx;
          }
        }
      }

      &-list {
        &--item {
          display: flex;
          align-items: center;
          position: relative;
          padding: 12rpx 0;

          &:after {
            content: '';
            position: absolute;
            bottom: -2rpx;
            left: 98rpx;
            right: 0;
            border-bottom: 0.5rpx solid #f1f1f1;
          }

          &:last-child {
            &:after {
              content: '';
              border-bottom: 0.5rpx solid transparent;
            }
          }

          .item-cover {
            width: 88rpx;
            height: 88rpx;
            margin-right: 12rpx;
            border-radius: 8rpx;
            background-color: #f8f8f8;
            overflow: hidden;

            &--image {
              width: 100%;
              height: 100%;
            }
          }

          .item-info {
            flex: 1;

            &--name {
              font-size: 32rpx;
              color: #333;
              @include --mixins-ellipsis(1);
            }

            &--desc {
              font-size: 28rpx;
              color: #999;
              @include --mixins-ellipsis(1);
            }
          }

          .icon-bofangmv {
            padding: 0 20rpx 0 28rpx;
            font-size: 40rpx;
            color: #999;
          }
        }
      }

      &-order {
        display: flex;
        align-items: center;
        overflow-x: scroll;
        /*解决ios上滑动不流畅*/
        -webkit-overflow-scrolling: touch;

        &::-webkit-scrollbar {
          display: none;
        }

        &--item {
          position: relative;
          padding-top: 8rpx;
          margin-right: 28rpx;
          z-index: 1;

          &:after {
            content: '';
            position: absolute;
            top: 0rpx;
            left: 12rpx;
            right: 12rpx;
            height: 24rpx;
            background-color: #efefef;
            border-radius: 20rpx 20rpx 0 0;
            z-index: -1;
          }

          .item-top {
            position: relative;
            width: 200rpx;
            height: 200rpx;
            margin-bottom: 8rpx;
            border-radius: 20rpx;
            background-color: #f8f8f8;
            overflow: hidden;

            &--pic {
              width: 100%;
              height: 100%;
            }

            &--count {
              display: flex;
              align-items: center;
              position: absolute;
              top: 10rpx;
              right: 10rpx;
              padding: 2rpx 16rpx 4rpx 4rpx;
              font-size: 24rpx;
              color: #fff;
              background-color: rgba(0, 0, 0, 0.8);
              border-radius: 20rpx;
            }
          }

          .item-bottom {
            width: 200rpx;
            line-height: 28rpx;
            font-size: 24rpx;
            color: #333;
            @include --mixins-ellipsis(2);
          }
        }
      }
    }
  }
}
</style>
