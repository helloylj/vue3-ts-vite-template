<template>
  <el-container class="app-container" direction="vertical">
    <app-header></app-header>
    <el-container>
      <app-sidebar></app-sidebar>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppHeader from './components/header.vue'
import AppSidebar from './components/sidebar/index.vue'
</script>

<style lang="scss" scoped>
.app-container {
  width: 100vw;
  height: 100vh;
}
</style>
