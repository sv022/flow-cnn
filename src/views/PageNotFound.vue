<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container-height">
    <div class="flex flex-col items-center text-center justify-between pt-32 px-32 overflow-hidden">
      <div>
        <h1>404</h1>
        <h2>Страница не найдена</h2>
      </div>
      <RouterLink class="text-white-secondary mt-16" to="/">Вернуться на главную</RouterLink>
    </div>
  </div>
</template>
<style scoped>
.container-height {
  height: 100%;
  overflow: hidden;
}

h1 {
  color: var(--color-destructive-foreground);
  font-size: 96px;
  font-weight: bold;
}

h2 {
  color: var(--color-white-primary);
  font-size: 48px;
  font-weight: bold;
}
</style>
