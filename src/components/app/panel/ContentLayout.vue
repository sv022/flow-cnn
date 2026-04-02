<script setup lang="ts">
import AppPanelNavbar from '@/components/app/panel/Navbar.vue'
</script>

<template>
<div class="h-full flex flex-col grow">
  <AppPanelNavbar />
  <slot />
</div>
</template>

<style scoped></style>
