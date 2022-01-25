<template>
  <el-menu-item
    v-if="route?.meta?.showMenu"
    :index="fullPath"
    @click="navigateTo"
  >
    <i class="iconfont menu-item-icon" :class="route?.meta?.icon"></i>
    <span>{{ route?.meta?.title || '未定义菜单标题' }}</span>
  </el-menu-item>
</template>

<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'
import { useRouter, RouteRecordRaw } from 'vue-router'
const router = useRouter()
const props = defineProps({
  route: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  },
  parentRoute: {
    type: Object as PropType<RouteRecordRaw>
  }
})

const navigateTo = () => {
  router.push(fullPath.value)
}
const fullPath = computed(
  () =>
    (props.parentRoute?.path ? props.parentRoute.path + '/' : '') +
    props.route.path
)
</script>

<style lang="scss" scoped>
.menu-item-icon {
  margin-right: 8px;
  font-size: 20px;
}
</style>
