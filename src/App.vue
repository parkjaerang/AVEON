<script setup lang="ts">
import { onMounted } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

onMounted(() => {
  document.body.classList.add('is-loaded')
})
</script>

<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>
