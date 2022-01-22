<template>
  <div class="header-container">
    <div class="logo">logo</div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex-shrink: 0;
  height: 60px;
  background-color: $--color-primary;

  .logo {
    color: #ffffff;
  }
}
</style>
