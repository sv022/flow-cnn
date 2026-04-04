<script setup lang="ts">
import { type PoolingLayerType } from "@/types";
import Features from "./icons/Features.vue";

const props = defineProps<{
  params: PoolingLayerType;
}>();
</script>
<template>
  <Features :size="props.params.input_height" :channels="props.params.channels" :kernel-size="props.params.pool" />
</template>
