<script setup lang="ts">
import { onMounted, ref } from 'vue'

const ready = ref(false)

onMounted(() => {
  requestAnimationFrame(() => {
    ready.value = true
  })
})
</script>

<template>
  <div class="page-intro" :class="{ 'is-ready': ready }">
    <slot />
  </div>
</template>
