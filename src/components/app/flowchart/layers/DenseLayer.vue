<script setup lang="ts">
import type { DenseLayerType } from "@/types";
import Dense from "./icons/Dense.vue";
import { useRenderStore } from "@/stores/renderStore";

const props = defineProps<{
  params: DenseLayerType;
  labelName: string;
  labelParams: string;
}>();

const renderStore = useRenderStore();
</script>

<template>
  <div class="flex flex-col items-center -translate-y-1/2">
    <p v-if="renderStore.showLayerLabels" class="mb-16 text-2xl">
      {{ labelParams }}
    </p>
    <Dense :size="props.params.output_nodes" />
    <p v-if="renderStore.showLayerLabels" class="mt-16 text-2xl">
      {{ labelName }}
    </p>
  </div>
</template>
