import { createSSRApp } from 'vue'
import store from './store/index'
import App from './App.vue'
import './assets/styles/index.scss'
import CustomNav from './components/CustomNav/index.vue'
import CustomBar from './components/CustomBar/index.vue'

export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  app.component('CustomNav', CustomNav)
  app.component('CustomBar', CustomBar)
  return {
    app
  }
}
