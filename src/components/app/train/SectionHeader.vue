<script setup lang="ts">
import { LucideMinus } from "lucide-vue-next";
</script>

<template>
  <div class="flex space-x-2 items-center">
    <LucideMinus class="w-6 h-6 stroke-input stroke-3" />
    <h2 class="text-xl font-semibold text-carbon">
      <slot />
    </h2>
  </div>
</template>
