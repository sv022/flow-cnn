<script setup lang="ts">
import type { Layer } from "@/types";
import Dense from "./layers/icons/Dense.vue";
import Output from "./layers/icons/Output.vue";
import { LayerType } from "@/types/layers";
import PoolLayer from "./layers/PoolLayer.vue";
import ConvLayer from "./layers/ConvLayer.vue";
import LayerContext from "./LayerContext.vue";

const props = defineProps<{
  id: string;
  layer: Layer;
  isLastLayer: boolean;
}>();
</script>

<template>
  <LayerContext :layer="props.layer">
    <Output v-if="props.isLastLayer && props.layer.params.type === LayerType.Dense" :fill="'var(--color-output)'" />
    <Dense v-else-if="props.layer.params.type === LayerType.Dense" :fill="'var(--color-dense)'" />
    <PoolLayer v-else-if="props.layer.params.type === LayerType.Pooling" :params="props.layer.params" />
    <ConvLayer v-else-if="props.layer.params.type === LayerType.Convolution" :params="props.layer.params" />
  </LayerContext>
</template>
