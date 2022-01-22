import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    component: Layout,
    meta: {
      title: '用户管理',
      icon: 'icon-account',
      auth: true
    },
    children: [
      {
        path: 'list',
        component: () => import('../views/user-list.vue'),
        meta: {
          title: '用户列表'
        }
      }
    ]
  }
]

export default routes
