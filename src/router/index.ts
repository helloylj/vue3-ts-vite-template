import {
  createRouter,
  createWebHashHistory,
  Router,
  RouteRecordRaw
} from 'vue-router'
import Layout from '@/layouts/layout.vue'

const modulesRouter: Record<
  string,
  {
    [key: string]: any
  }
> = import.meta.globEager('../modules/**/router/*.ts')
const modulesRoutes: Array<RouteRecordRaw> = []
for (const key in modulesRouter) {
  modulesRoutes.push(...modulesRouter[key].default)
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/index',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/index',
    component: Layout,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: () => import('@/views/index.vue')
      }
    ]
  },
  ...modulesRoutes
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
