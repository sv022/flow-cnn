<script setup lang="ts">
import { LayerType, type ConvolutionLayerType } from "@/types";
import Features3C from "./icons/Features3C.vue";
import Features5C from "./icons/Features5C.vue";
import Features9C from "./icons/Features9C.vue";
import Features18C from "./icons/Features18C.vue";

const props = defineProps<{
  params: ConvolutionLayerType;
}>();
</script>
<template>
  <Features18C v-if="props.params.channels >= 64" :type="LayerType.Convolution" />
  <Features9C v-else-if="props.params.channels >= 32" :type="LayerType.Convolution" />
  <Features5C v-else-if="props.params.channels >= 16" :type="LayerType.Convolution" />
  <Features3C v-else :type="LayerType.Convolution" />
</template>
