import { onMounted, ref } from 'vue'

function useAnimation() {
  const maskAnimation = ref({})
  const contentAnimation = ref({})


  const maskAnimationCreator = uni.createAnimation({
    duration: 5000,
    timingFunction: 'ease'
  })

  const contentAnimationCreator = uni.createAnimation({
    duration: 500,
    timingFunction: 'ease'
  })

  

  const maskAnimationFun = () => {
    maskAnimationCreator.opacity(0.6).step()
    maskAnimation.value = maskAnimationCreator.export()
  }

  const contentAnimationFun = () => {
    contentAnimationCreator.translateY(-512).step()
    contentAnimation.value = contentAnimationCreator.export()
  }


  return {
    maskAnimation,
    maskAnimationFun,
    contentAnimation,
    contentAnimationFun
  }
}

export default useAnimation