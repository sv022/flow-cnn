<script setup lang="ts">
import { type ConvolutionLayerType } from "@/types";
import Features from "./icons/Features.vue";

const props = defineProps<{
  params: ConvolutionLayerType;
}>();
</script>
<template>
  <!-- <Features18C v-if="props.params.channels >= 64" :type="LayerType.Convolution" />
  <Features9C v-else-if="props.params.channels >= 32" :type="LayerType.Convolution" />
  <Features5C v-else-if="props.params.channels >= 16" :type="LayerType.Convolution" />
  <Features3C v-else :type="LayerType.Convolution" /> -->
  <Features :size="props.params.input_height" :channels="props.params.channels" />
</template>
