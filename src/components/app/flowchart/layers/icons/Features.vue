<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRenderStore } from "@/stores/renderStore";
import Filter from "./Filter.vue";
import { computed } from "vue";

const props = defineProps<{
  size: number;
  channels: number;
  kernelSize: number;
  labelName: string;
  labelParams: string;
}>();

const renderStore = useRenderStore();

const filterPos = computed(() => {
  const offset = renderStore.offset * (props.channels - 1) + Math.floor(renderStore.featureScale * props.size * 0.66) - props.kernelSize * renderStore.featureScale * 0.66;
  const top = offset;
  const left = top;

  return { top, left };
});

const labelNamePos = computed(() => {
  const top = props.size * renderStore.featureScale + renderStore.offset * props.channels + (renderStore.featureScale + renderStore.offset) * renderStore.featureScale * 0.1;
  const left = props.size * renderStore.featureScale + (renderStore.offset * props.channels - 1) + (renderStore.featureScale + renderStore.offset) * renderStore.featureScale * 0.1 - 200;

  return { top, left };
});
</script>

<template>
  <div
    class="relative visible inline-block w-max -translate-y-1/2"
    :style="{
      height: `${props.size * renderStore.featureScale + renderStore.offset * (props.channels - 2)}px`,
    }"
  >
    <p
      v-if="renderStore.showLayerLabels"
      class="absolute text-2xl"
      :style="{
        top: `${-(renderStore.offset + renderStore.featureScale) - 3 * renderStore.featureScale - 20}px`,
      }"
    >
      {{ labelParams }}
    </p>
    <svg
      v-for="(i, index) in props.channels"
      :key="index"
      class="absolute"
      :style="{
        width: `${props.size * renderStore.featureScale}px`,
        height: `${props.size * renderStore.featureScale}px`,
        top: `${renderStore.offset * index}px`,
        left: `${renderStore.offset * index}px`,
      }"
      viewBox="0 0 260 260"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <rect width="260" height="260" rx="5" :fill="index % 2 === props.channels % 2 ? 'rgb(193,193,193)' : 'rgb(237,237,237)'" fill-opacity="0.9" />

      <rect width="255" height="255" x="2.5" y="2.5" rx="2.5" stroke="rgb(80,80,80)" stroke-width="5" />
    </svg>
    <Filter
      class="z-10 absolute"
      :style="{
        width: `${props.kernelSize * renderStore.featureScale}px`,
        height: `${props.kernelSize * renderStore.featureScale}px`,
        top: `${filterPos.top}px`,
        left: `${filterPos.left}px`,
      }"
    />
    <p
      v-if="renderStore.showLayerLabels"
      class="absolute text-2xl"
      :style="{
        top: `${labelNamePos.top}px`,
        left: `${labelNamePos.left}px`,
      }"
    >
      {{ labelName }}
    </p>
  </div>
</template>
