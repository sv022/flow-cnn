<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRenderStore } from "@/stores/renderStore";

const props = defineProps<{
  size: number;
  channels: number;
}>();

const renderStore = useRenderStore();
</script>

<template>
  <div class="relative visible inline-block w-max">
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
  </div>
</template>
