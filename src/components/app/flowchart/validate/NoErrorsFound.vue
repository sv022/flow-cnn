<script setup lang="ts">
import { LucideCheckCircle } from "lucide-vue-next";
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <LucideCheckCircle class="h-12 w-12 stroke-positive-foreground" />
    <p class="mt-2 text-sm text-muted-foreground">{{ $t("flowchart.validation.noErrors") }}</p>
  </div>
</template>
