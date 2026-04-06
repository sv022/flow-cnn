<script setup lang="ts">
import { LucideMinus } from "lucide-vue-next";

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="flex space-x-2 items-center">
    <LucideMinus class="w-6 h-6 stroke-input stroke-3" />
    <h2 class="text-xl font-semibold text-carbon">{{ props.title }}</h2>
  </div>
</template>
