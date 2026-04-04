<script setup lang="ts">
import type { DenseLayerType } from "@/types";
import Dense from "./icons/Dense.vue";

const props = defineProps<{
  params: DenseLayerType;
  labelName: string;
  labelParams: string;
}>();
</script>

<template>
  <div class="-translate-y-1/2">
    <p class="mb-16 text-2xl -translate-x-1/4">
      {{ labelParams }}
    </p>
    <Dense :size="props.params.output_nodes" />
    <p class="mt-16 text-2xl -translate-x-1/4">
      {{ labelName }}
    </p>
  </div>
</template>
