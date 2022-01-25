<template>
  <el-main>
    <app-breadcrumb />
    <slot />
  </el-main>
</template>

<script setup lang="ts">
import AppBreadcrumb from './breadcrumb.vue'
</script>

<style lang="scss" scoped></style>
