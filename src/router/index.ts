import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw
} from 'vue-router'
import AppLayout from '@/layouts/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: AppLayout,
    children: []
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
