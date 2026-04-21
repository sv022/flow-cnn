<script setup lang="ts">
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { useModelStore } from "@/stores/modelStore";
import { LayerType } from "@/types";
import LayerIcon from "./LayerIcon.vue";

const props = defineProps<{
  id: string;
}>();

const modelStore = useModelStore();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger class="size-7" as-child>
      <slot />
    </DropdownMenuTrigger>
    <DropdownMenuContent class="group">
      <DropdownMenuLabel>{{ $t("flowchart.dropdown.title") }}</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem v-for="layer in LayerType" :key="layer" @click="modelStore.addLayer(props.id, layer)">
        <span class="flex text-carbon items-center text-sm">
          <LayerIcon :type="layer" />
          {{ $t(`flowchart.dropdown.${layer}`) }}
        </span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
