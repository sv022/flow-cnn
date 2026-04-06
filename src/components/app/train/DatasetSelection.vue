<script setup lang="ts">
import { mockDatasets } from "@/utils/mock";
import { LucideArrowRight } from "lucide-vue-next";
import DatasetCardCompact from "./DatasetCardCompact.vue";
import { Button } from "@/components/ui/button";
import { RouterLink } from "vue-router";
import SectionHeader from "./SectionHeader.vue";

const datasetsToDisplay = mockDatasets.slice(0, 2);
</script>

<template>
  <div>
    <SectionHeader title="Dataset selection" />
    <div class="flex space-x-8 py-8">
      <DatasetCardCompact v-for="dataset in datasetsToDisplay" :key="dataset.name" :dataset="dataset" />
      <div class="flex items-center justify-center size-48">
        <RouterLink to="/datasets">
          <Button variant="ghost">
            <p class="text-sm text-input">View all datasets</p>
            <LucideArrowRight class="w-6 h-6 stroke-input stroke-3" />
          </Button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
