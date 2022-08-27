// import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/videoDetail/:id',
    name: 'videoDetail',
    component: () => import('@/views/video/VideoDetail.vue')
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
