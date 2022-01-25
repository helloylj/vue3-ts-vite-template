import 'vue-router'
declare module 'vue-router' {
  interface routeMeta {
    order?: number // 排序
    roles?: Array[] // 角色
    requiresAuth?: boolean // 是否需要登录
    showMenu?: boolean // 是否展示在左侧菜单
    title?: string // 菜单标题
    icon?: string // 菜单icon
  }
}
