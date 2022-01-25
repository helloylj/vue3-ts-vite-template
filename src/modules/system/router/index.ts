import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layouts/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/system',
    component: Layout,
    meta: {
      title: '系统管理',
      icon: 'icon-viewgallery',
      requiresAuth: true,
      showMenu: true
    },
    children: [
      {
        path: 'role',
        name: 'roleList',
        component: () => import('../views/role/list.vue'),
        meta: {
          title: '角色管理',
          showMenu: true
        }
      },
      {
        path: 'role/detail',
        name: 'roleDetail',
        component: () => import('../views/role/detail.vue'),
        meta: {
          title: '角色详情'
        }
      },
      {
        path: 'permission',
        name: 'permissionList',
        component: () => import('../views/permission.vue'),
        meta: {
          title: '权限管理',
          showMenu: true
        }
      }
    ]
  }
]

export default routes
