<script setup lang="ts">
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from "@/components/ui/context-menu";
import { useModelStore } from "@/stores/modelStore";
import Cifar from "./icons/input/Cifar.vue";
import Digits from "./icons/input/Digits.vue";
import Fashion from "./icons/input/Fashion.vue";
import { LucideTrash } from "lucide-vue-next";

const modelStore = useModelStore();
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <p>{{ `${modelStore.selectedDataset?.imageSize[0]}x${modelStore.selectedDataset?.imageSize[1]}x${modelStore.selectedDataset?.imageSize[2]}` }}</p>
    <ContextMenu>
      <ContextMenuTrigger>
        <Digits v-if="modelStore.selectedDataset!.id === '1'" />
        <Fashion v-else-if="modelStore.selectedDataset!.id === '2'" />
        <Cifar v-else-if="modelStore.selectedDataset!.id === '3'" />
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem class="text-destructive-foreground focus:bg-destructive focus:text-destructive-foreground" @click="modelStore.resetDataset">
          <LucideTrash class="mr-2 h-4 w-4" />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
    <p>{{ modelStore.selectedDataset!.name }}</p>
  </div>
</template>
