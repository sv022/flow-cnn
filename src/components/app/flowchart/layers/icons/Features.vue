<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const props = defineProps<{
  size: number;
  channels: number;
}>();

const offset = 8; // смещение между слоями (px)
</script>

<template>
  <div class="relative visible inline-block w-max">
    <svg
      v-for="(i, index) in props.channels"
      :key="index"
      class="absolute"
      :style="{
        width: `${props.size * 10}px`,
        height: `${props.size * 10}px`,
        top: `${offset * index}px`,
        left: `${offset * index}px`,
      }"
      viewBox="0 0 260 260"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <!-- Фон с собственной прозрачностью -->
      <rect width="260" height="260" rx="5" :fill="index % 2 === props.channels % 2 ? 'rgb(193,193,193)' : 'rgb(237,237,237)'" fill-opacity="0.9" />

      <!-- Рамка тоже -->
      <rect width="255" height="255" x="2.5" y="2.5" rx="2.5" stroke="rgb(80,80,80)" stroke-width="5" />
    </svg>
  </div>
</template>
