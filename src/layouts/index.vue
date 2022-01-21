<template>
  <el-container>
    <el-header>我是header</el-header>
    <el-container>
      <el-aside width="200px">我是侧边栏</el-aside>
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts"></script>

<style lang="scss" scope></style>
