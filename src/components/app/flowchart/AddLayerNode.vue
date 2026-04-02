<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useModelStore } from "@/stores/modelStore";
import { LayerType } from "@/types";
import { LucidePlus } from "lucide-vue-next";

const props = defineProps<{
  id: string;
}>();

const modelStore = useModelStore();
</script>

<template>
  <div class="flex group justify-center w-24 h-40 -translate-x-7">
    <DropdownMenu>
      <DropdownMenuTrigger class="size-7" as-child>
        <Button class="invisible group-hover:visible" variant="outline" size="sm">
          <LucidePlus class="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="group">
        <DropdownMenuLabel>Select layer type</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem @click="modelStore.addLayer(props.id, LayerType.Convolution)">Convolution</DropdownMenuItem>
        <DropdownMenuItem @click="modelStore.addLayer(props.id, LayerType.Pooling)">Pooling</DropdownMenuItem>
        <DropdownMenuItem @click="modelStore.addLayer(props.id, LayerType.Dense)">Dense</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
</template>
