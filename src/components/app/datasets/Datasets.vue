<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { mockDatasets } from "@/utils/mock";
import DatasetCard from "./DatasetCard.vue";
import { ref } from "vue";
import type { Dataset } from "@/types";
import SelectedSidebar from "./SelectedSidebar.vue";
import { LucideX } from "lucide-vue-next";

const selectedDataset = ref<Dataset | null>(null);
</script>
<template>
  <div class="flex h-full p-4">
    <div class="flex space-x-4">
      <DatasetCard v-for="dataset in mockDatasets" :key="dataset.name" :dataset="dataset" @click="selectedDataset = dataset" />
    </div>
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 translate-x-4"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-4"
    >
      <SelectedSidebar v-if="selectedDataset" :dataset="selectedDataset">
        <LucideX class="w-6 h-6" @click="selectedDataset = null" />
      </SelectedSidebar>
    </Transition>
  </div>
</template>
