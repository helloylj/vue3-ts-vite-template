<template>
  <a v-if="isOuterLink" :href="to"><slot></slot></a>
  <router-link v-else :to="to"><slot></slot></router-link>
</template>

<script setup lang="ts">
import { isUrl } from '@/core/utils/is'
import { computed, defineProps } from 'vue'
const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
const isOuterLink = computed(() => {
  return isUrl(props.to)
})
</script>

<style lang="scss" scoped></style>
