<script setup lang="ts">
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import type { Dataset } from "@/types";
import DatasetIcon from "../datasets/DatasetIcon.vue";
import { LucideCheckCircle2 } from "lucide-vue-next";
import { useModelStore } from "@/stores/modelStore";

const props = defineProps<{
  dataset: Dataset;
}>();

const modelStore = useModelStore();
</script>
<template>
  <div class="flex flex-col justify-between p-2 size-48 border-l-4 border-taupe-700/70 shadow rounded-xl cursor-pointer" @click="modelStore.setDataset(props.dataset)">
    <div class="flex justify-between p-2">
      <Item class="p-0">
        <ItemMedia class="size-12" variant="icon">
          <DatasetIcon class="stroke-taupe-700 size-6" :name="props.dataset.icon" />
        </ItemMedia>
      </Item>
      <LucideCheckCircle2 v-if="dataset.id === modelStore.selectedDataset?.id" class="w-6 h-6 stroke-taupe-700" />
    </div>
    <Item>
      <ItemContent>
        <ItemTitle> {{ props.dataset.name }}</ItemTitle>
        <ItemDescription class="line-clamp-2">
          {{ props.dataset.description }}
        </ItemDescription>
      </ItemContent>
    </Item>
  </div>
</template>
