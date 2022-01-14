import { computed, ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'

function useProgress() {
  const store = useStore()
  const playerState = computed(() => store.state.player.playerState)

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

  const progress = computed(() => {
    return currentPosition ? {
      right: `${ (1 - currentPosition.value / playerState.value.duration) * 100 }%`
    } : {
      right: '100%'
    }
  })
  
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

  onMounted(async () => {
    const state = await uni.getBackgroundAudioPlayerState()
     const { duration, currentPosition, status } = state as any
    store.commit('SET_PLAYERSTATE', { duration, currentPosition, status })
    
  })

  onBeforeUnmount(() => {
    clearInterval(timer)
  })

  return {
    currentPosition,
    progress
  }
}

export default useProgress