<script setup lang="ts">
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";

import type { Dataset } from "@/types";
import DatasetIcon from "./DatasetIcon.vue";
import { Badge } from "@/components/ui/badge";

const props = defineProps<{
  dataset: Dataset;
}>();
</script>
<template>
  <div class="flex flex-col size-70 border-l-4 border-taupe-700/70 rounded-xl shadow cursor-pointer">
    <Item class="flex items-start justify-between">
      <ItemMedia class="size-12 bg-taupe-700/10" variant="icon">
        <DatasetIcon class="size-6 stroke-taupe-700" :name="props.dataset.icon" />
      </ItemMedia>
      <Badge class="bg-taupe-500/70 hover:bg-taupe-500/70">
        {{ props.dataset.difficulty }}
      </Badge>
    </Item>
    <Item>
      <ItemContent class="h-18">
        <ItemTitle class="font-semibold text-carbon text-xl">{{ props.dataset.name }}</ItemTitle>
        <ItemDescription class="line-clamp-2"> {{ props.dataset.description }} </ItemDescription>
      </ItemContent>
    </Item>
    <div class="flex mt-auto">
      <Item>
        <ItemContent>
          <ItemTitle class="text-muted-foreground text-sm line-clamp-1">{{ $t("datasets.trainSize") }}</ItemTitle>
          <ItemDescription class="text-lg text-charcoal font-semibold"> {{ props.dataset.trainSize }} </ItemDescription>
        </ItemContent>
      </Item>
      <Item>
        <ItemContent>
          <ItemTitle class="text-muted-foreground text-sm line-clamp-1">{{ $t("datasets.testSize") }}</ItemTitle>
          <ItemDescription class="text-lg text-charcoal font-semibold"> {{ props.dataset.testSize }} </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  </div>
</template>
