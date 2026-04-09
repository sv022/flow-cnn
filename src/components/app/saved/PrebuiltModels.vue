<script setup lang="ts">
import { useSavedStore } from "@/stores/savedStore";
import ModelCard from "./ModelCard.vue";

const savedStore = useSavedStore();
</script>

<template>
  <div class="flex h-full p-4 space-x-4">
    <ModelCard v-for="model in savedStore.prebuiltModels" :key="model.id" :model="model" :updated-at="model.description!" :pretrained="true" />
  </div>
</template>
