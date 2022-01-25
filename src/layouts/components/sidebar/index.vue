<template>
  <el-aside class="sidebar-container" width="200px">
    <el-menu
      class="menu-container"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      :default-active="activeIndex"
    >
      <template v-for="route in routes" :key="route.path">
        <el-sub-menu v-if="route.children" :index="getFullPath(route)">
          <template #title>
            <i class="iconfont menu-item-icon" :class="route?.meta?.icon"></i>
            <span>{{ route?.meta?.title || '未定义菜单标题' }}</span>
          </template>
          <sidebar-item
            v-for="child in route.children"
            :key="child.path"
            :route="child"
            :parentRoute="route"
          />
        </el-sub-menu>
        <sidebar-item v-else :route="route" />
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import SidebarItem from './sidebar-item.vue'
import { computed } from 'vue'
import { useRouter, RouteRecordRaw } from 'vue-router'
const router = useRouter()
const routes = router.options.routes.filter(route => route?.meta?.showMenu)

const getFullPath = (route: RouteRecordRaw, parentRoute?: RouteRecordRaw) =>
  (parentRoute?.path ? parentRoute.path + '/' : '') + route.path

const activeIndex = computed(() => {
  const currentPath = router.currentRoute.value.path
  let index = ''
  routes.forEach((route: RouteRecordRaw) => {
    if (route.children) {
      route.children.forEach(child => {
        if (getFullPath(child, route) === currentPath) {
          index = currentPath
        }
      })
    } else {
      if (route.path === currentPath) {
        index = currentPath
      }
    }
  })

  return index
})
</script>

<style lang="scss" scoped>
.sidebar-container {
  padding-top: 18px;
  background-color: #545c64;
}
.menu-container {
  border-right: none;
}
.menu-item-icon {
  margin-right: 8px;
  font-size: 20px;
}
</style>
