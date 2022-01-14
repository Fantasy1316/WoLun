import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/mixins.scss"; @import "@/assets/styles/.scss";`
      }
    }
  },
  plugins: [uni()]
})
