<template>
  <el-button type="primary">el按钮</el-button>
  <p class="text-lg font-medium">测试tailwind</p>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import dayjs from 'dayjs'
console.log(dayjs('12-25-1995').format('YYYY-MM-DD'))
</script>

<style lang="scss" scoped>
p {
  color: $--color-primary;
}
</style>
