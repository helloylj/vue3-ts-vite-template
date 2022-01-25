<template>
  <el-container class="app-container" direction="vertical">
    <app-header></app-header>
    <el-container>
      <app-sidebar></app-sidebar>
      <app-main>
        <router-view />
      </app-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppHeader from './components/header.vue'
import AppSidebar from './components/sidebar/index.vue'
import AppMain from './components/main.vue'
</script>

<style lang="scss" scoped>
.app-container {
  width: 100vw;
  height: 100vh;
}
</style>
