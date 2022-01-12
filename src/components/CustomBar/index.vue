<template>
  <div class="custom-bar">
    <div class="custom-bar--content">
      <div
        class="content-item"
        :class="{ 'content-item__active': item.path == currentPath }"
        v-for="(item, index) in barList"
        :key="index"
        @click="handleTabbarSwitch(item.path)"
      >
        <i class="iconfont" :class="item.icon"></i>
        <p class="item-name">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, ref, Ref } from 'vue'

// 获取当前路由
const currentPath = computed(() => {
  const pages = getCurrentPages()
  return pages[pages.length - 1].route
})

// tabbar 切换
const handleTabbarSwitch = (url: string) => {
  uni.switchTab({
    url: `/${url}`
  })
}

const barList = ref([
  {
    path: 'pages/Index/index',
    icon: 'icon-faxian1',
    name: '发现'
  },
  {
    path: 'pages/Classific/index',
    icon: 'icon-quanbufenlei',
    name: '分类'
  },
  {
    path: 'pages/Mine/index',
    icon: 'icon-wode',
    name: '我的'
  }
])
</script>

<style lang="scss" scoped>
.custom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  position: relative;
  height: 136rpx;
  z-index: 9;

  &--content {
    display: flex;
    height: 88rpx;
    padding: 24rpx 0;
    background-color: #fff;

    .content-item {
      flex: 1;
      text-align: center;

      &__active {
        .iconfont,
        .item-name {
          color: #ff88b4 !important;
        }
      }

      .iconfont {
        font-size: 56rpx;
        color: #d1d1d1;
      }

      .item-name {
        font-size: 24rpx;
        color: #d1d1d1;
      }
    }
  }
}
</style>
