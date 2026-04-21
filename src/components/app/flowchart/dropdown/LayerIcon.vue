<script setup lang="ts">
import { LayerType } from "@/types";
import { LucideBlend, LucideGrid2X2, LucideLayers } from "lucide-vue-next";

const props = defineProps<{
  type: LayerType;
}>();
</script>

<template>
  <LucideLayers v-if="props.type === LayerType.Convolution" class="mr-2 h-4 w-4 stroke-convolution" />
  <LucideGrid2X2 v-else-if="props.type === LayerType.Pooling" class="mr-2 h-4 w-4 stroke-pooling" />
  <LucideBlend v-else-if="props.type === LayerType.Dense" class="mr-2 h-4 w-4 stroke-dense" />
</template>
