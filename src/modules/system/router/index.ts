import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    component: Layout,
    meta: {
      title: '系统管理',
      icon: 'icon-viewgallery',
      auth: true
    },
    children: [
      {
        path: 'role',
        component: () => import('../views/role.vue'),
        meta: {
          title: '角色管理'
        }
      },
      {
        path: 'permission',
        component: () => import('../views/permission.vue'),
        meta: {
          title: '权限管理'
        }
      }
    ]
  }
]

export default routes
