<script setup lang="ts">
import type { DenseLayerType } from "@/types";
import Dense from "./icons/Dense.vue";
import Output from "./icons/Output.vue";

const props = defineProps<{
  params: DenseLayerType;
  isLastLayer: boolean;
}>();
</script>

<template>
  <Output v-if="props.isLastLayer" :fill="'var(--color-output)'" />
  <Dense v-else :fill="'var(--color-dense)'" />
</template>
