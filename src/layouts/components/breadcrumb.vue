<template>
  <el-breadcrumb separator="/">
    <!-- <el-breadcrumb-item
      v-for="route in matchedRoute"
      :key="route.path"
      v-bind="{
        to: currentRoute.path === route.path ? '' : route.path
      }"
      >{{ route?.meta?.title }}</el-breadcrumb-item
    > -->
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
let currentRoute = reactive({})
let matchedRoute = reactive([])
onBeforeRouteUpdate(to => {
  currentRoute = to
  console.log(to)
  // currentRoute.matched = currentRoute.matched || []
  // matchedRoute = currentRoute.matched.slice(1) || []
})
</script>

<style lang="scss" scoped></style>
