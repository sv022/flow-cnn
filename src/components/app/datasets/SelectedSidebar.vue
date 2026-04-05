<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import type { Dataset } from "@/types";

const props = defineProps<{
  dataset: Dataset;
}>();
</script>

<template>
  <div class="w-96 ml-auto h-full p-4 border border-taupe-700/10 shadow rounded-xl -translate-y-12">
    <span class="flex items-center justify-between">
      <p class="text-charcoal font-semibold">Dataset preview</p>
      <slot />
    </span>
    <div>
      <Item class="px-0 py-8">
        <ItemContent>
          <ItemTitle class="text-2xl text-charcoal font-semibold mb-2">{{ props.dataset.name }}</ItemTitle>
          <ItemDescription class="space-x-2">
            <Badge class="bg-taupe-500/30" v-for="tag in props.dataset.tags" :key="tag" variant="secondary">
              {{ tag }}
            </Badge>
          </ItemDescription>
          <ItemDescription class="mt-4"> {{ props.dataset.description }} </ItemDescription>
        </ItemContent>
      </Item>
    </div>
    <img :src="props.dataset.imageSrc ? props.dataset.imageSrc : 'https://raw.githubusercontent.com/sv022/MockDB/refs/heads/main/assets/placeholder.png'" class="w-full" />
    <Button class="w-full bg-taupe-500 hover:bg-taupe-700 mt-8 font-semibold">Add to project</Button>
  </div>
</template>
