<template>
  <el-aside class="sidebar-container" width="200px">
    <el-menu
      class="menu-container"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      :default-active="activeMenu"
    >
      <template v-for="route in routes" :key="route.path">
        <el-sub-menu v-if="route.children" :index="route.path">
          <template #title>
            <i class="iconfont menu-item-icon" :class="route?.meta?.icon"></i>
            <span>{{ route?.meta?.title || '未定义菜单标题' }}</span>
          </template>
          <el-menu-item
            v-for="child in route.children"
            :key="child.path"
            :index="child.path"
          >
            <app-link :to="resolvePath(child.path, route.path)">{{
              child?.meta?.title || '未定义菜单标题'
            }}</app-link>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="route.path">
          <i class="iconfont menu-item-icon" :class="route?.meta?.icon"></i>
          <app-link :to="resolvePath(route.path)">{{
            route?.meta?.title || '未定义菜单标题'
          }}</app-link>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import AppLink from '@/components/app-link.vue'
import { useRouter } from 'vue-router'
import { isUrl } from '@/core/utils/is'
import { computed } from 'vue'
const router = useRouter()
const routes = router.options.routes.filter(route => !route?.meta?.hideMenu)

const resolvePath = (path: string, parentPath?: string): string => {
  if (isUrl(path)) {
    return path
  } else if (parentPath && isUrl(parentPath)) {
    return parentPath
  } else {
    return `${parentPath}/${path}`
  }
}

const activeMenu = computed(() => {
  const currentPath = router.currentRoute.value.path
  let index = ''
  routes.forEach(route => {
    if (route.children) {
      route.children.forEach(child => {
        if (resolvePath(child.path, route.path) === currentPath) {
          index = child.path
        }
      })
    } else {
      if (resolvePath(route.path) === currentPath) {
        index = route.path
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
