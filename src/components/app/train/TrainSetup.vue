<script setup lang="ts">
import DatasetSelection from "./DatasetSelection.vue";
import HyperParametes from "./HyperParametes.vue";
import ModelSummary from "./ModelSummary.vue";
</script>

<template>
  <div class="flex justify-between">
    <div class="flex flex-col gap-8 p-4">
      <DatasetSelection />
      <HyperParametes />
    </div>
    <ModelSummary />
  </div>
</template>
