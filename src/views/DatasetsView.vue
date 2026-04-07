<script setup lang="ts">
import Datasets from "@/components/app/datasets/Datasets.vue";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
</script>
<template>
  <div class="p-4">
    <Item>
      <ItemContent>
        <ItemTitle class="text-2xl font-semibold text-carbon">{{ $t("datasets.title") }}</ItemTitle>
        <ItemDescription>{{ $t("datasets.description") }}</ItemDescription>
      </ItemContent>
    </Item>
    <Datasets />
  </div>
</template>
