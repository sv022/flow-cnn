<script setup lang="ts">
import type { Layer } from "@/types";
import { LayerType } from "@/types/layers";
import PoolLayer from "./layers/PoolLayer.vue";
import ConvLayer from "./layers/ConvLayer.vue";
import LayerContext from "./LayerContext.vue";
import DenseLayer from "./layers/DenseLayer.vue";

const props = defineProps<{
  id: string;
  layer: Layer;
}>();
</script>

<template>
  <LayerContext :layer="props.layer">
    <DenseLayer v-if="props.layer.params.type === LayerType.Dense" :params="props.layer.params" :label-name="props.layer.labelName" :label-params="props.layer.labelParams" />
    <PoolLayer v-else-if="props.layer.params.type === LayerType.Pooling" :params="props.layer.params" :label-name="props.layer.labelName" :label-params="props.layer.labelParams" />
    <ConvLayer v-else-if="props.layer.params.type === LayerType.Convolution" :params="props.layer.params" :label-name="props.layer.labelName" :label-params="props.layer.labelParams" />
  </LayerContext>
</template>
