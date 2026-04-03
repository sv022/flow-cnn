<script setup lang="ts">
import type { DenseLayerType } from "@/types";
import Dense from "./icons/Dense.vue";

const props = defineProps<{
  params: DenseLayerType;
}>();
</script>

<template>
  <Dense :size="props.params.output_nodes" />
</template>
