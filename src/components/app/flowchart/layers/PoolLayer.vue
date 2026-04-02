<script setup lang="ts">
import { LayerType, type PoolingLayerType } from "@/types";
import Features3C from "./icons/Features3C.vue";
import Features5C from "./icons/Features5C.vue";
import Features9C from "./icons/Features9C.vue";
import Features18C from "./icons/Features18C.vue";

const props = defineProps<{
  params: PoolingLayerType;
}>();
</script>
<template>
  <Features18C v-if="props.params.channels >= 64" :type="LayerType.Pooling" />
  <Features9C v-else-if="props.params.channels >= 32" :type="LayerType.Pooling" />
  <Features5C v-else-if="props.params.channels >= 16" :type="LayerType.Pooling" />
  <Features3C v-else :type="LayerType.Pooling" />
</template>
