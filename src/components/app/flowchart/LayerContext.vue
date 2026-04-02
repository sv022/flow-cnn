<script setup lang="ts">
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuTrigger } from "@/components/ui/context-menu";
import { LucideEdit, LucideTrash } from "lucide-vue-next";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ref } from "vue";
import { LayerType, type Layer } from "@/types";
import ConvSettings from "./settings/ConvSettings.vue";
import { useModelStore } from "@/stores/modelStore";
import PoolSettings from "./settings/PoolSettings.vue";
import DenseSettings from "./settings/DenseSettings.vue";

const modelStore = useModelStore();

const props = defineProps<{
  layer: Layer;
}>();

const isSheetOpen = ref(false);

function openSheet() {
  isSheetOpen.value = true;
}
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>
      <slot />
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem @select="openSheet">
        <LucideEdit class="mr-2 h-4 w-4" />
        Edit layer parameters
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem @select="modelStore.removeLayer(props.layer.id)">
        <LucideTrash class="mr-2 h-4 w-4" />
        Delete
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
  <Sheet v-model:open="isSheetOpen">
    <SheetContent class="overflow-y-scroll h-screen">
      <SheetHeader class="mt-12">
        <SheetTitle>Parameters</SheetTitle>
        <SheetDescription> Layer: Conv64_1</SheetDescription>
      </SheetHeader>
      <ConvSettings v-if="layer.params.type === LayerType.Convolution" :layer="props.layer.params as any" />
      <PoolSettings v-else-if="layer.params.type === LayerType.Pooling" :layer="props.layer.params as any" />
      <DenseSettings v-else-if="layer.params.type === LayerType.Dense" :layer="props.layer.params as any" />
      <SheetFooter class="flex w-full">
        <Button class="w-full p-6 font-semibold" variant="destructive" @click="modelStore.removeLayer(props.layer.id)">
          <LucideTrash class="mr-2 h-4 w-4" />
          Remove layer
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
