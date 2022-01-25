import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/user',
    component: Layout,
    meta: {
      title: '用户管理',
      icon: 'icon-account',
      requiresAuth: true,
      showMenu: true
    },
    children: [
      {
        path: 'list',
        name: 'userList',
        component: () => import('../views/user-list.vue'),
        meta: {
          title: '用户列表',
          showMenu: true
        }
      }
    ]
  }
]

export default routes
