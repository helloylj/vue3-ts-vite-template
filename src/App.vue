<template>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script setup lang="ts">
import { mockApi } from '@/api/mock'
mockApi(1).then(res => {
  console.log(res)
})
</script>

<style lang="scss" scoped>
p {
  color: $--color-primary;
}
</style>
