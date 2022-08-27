import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../src/mock/index.js'
import '@/assets/iconfont/iconfont.css'

createApp(App).use(router).mount('#app')
