<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const currentPlaySong = computed(() => store.state.player.currentPlaySong)

watch(
  () => currentPlaySong.value,
  (newVal, oldVal) => {
    if (newVal && newVal.id !== oldVal.id) {
      uni.playBackgroundAudio({
        dataUrl:
          'http://music.fechen.cn/uploadfile/static/2022/01/13/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE(with%20%E6%9D%A8%E7%91%9E%E4%BB%A3).mp3',
        title: newVal.name,
        coverImgUrl:
          'http://img.fechen.cn/uploadfile/static/2022/01/13/0A40CA801895449E80ECD91ED1B09297.jpg',
        success: (res) => {
          console.log('success', res)
        },
        fail: (err) => {
          console.error('fail', err)
        }
      })
    }
  }
)

onLaunch(() => {
  console.log('App Launch')
})
onShow(() => {
  console.log('App Show')
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style></style>
