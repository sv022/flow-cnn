<script setup lang="ts">
import { LayerType } from "@/types";

const props = defineProps<{
  type: LayerType;
}>();
</script>

<template>
  <svg
    v-if="props.type === LayerType.Convolution"
    viewBox="0 0 310 310"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="310.000000"
    height="310.000000"
    fill="none"
    customFrame="#000000"
  >
    <g id="Group 7">
      <rect
        id="Rectangle 8"
        width="260.000000"
        height="260.000000"
        x="0.000000"
        y="0.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 8"
        width="250.000000"
        height="250.000000"
        x="5.000000"
        y="5.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 7"
        width="260.000000"
        height="260.000000"
        x="25.000000"
        y="25.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 7"
        width="250.000000"
        height="250.000000"
        x="30.000000"
        y="30.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 6"
        width="260.000000"
        height="260.000000"
        x="50.000000"
        y="50.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 6"
        width="250.000000"
        height="250.000000"
        x="55.000000"
        y="55.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
    </g>
  </svg>
  <svg
    v-else-if="props.type === LayerType.Pooling"
    viewBox="0 0 310 310"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="310.000000"
    height="310.000000"
    fill="none"
    customFrame="#000000"
  >
    <g id="Group 11">
      <rect
        id="Rectangle 8"
        width="260.000000"
        height="260.000000"
        x="0.000000"
        y="0.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 8"
        width="250.000000"
        height="250.000000"
        x="5.000000"
        y="5.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 7"
        width="260.000000"
        height="260.000000"
        x="25.000000"
        y="25.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 7"
        width="250.000000"
        height="250.000000"
        x="30.000000"
        y="30.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 6"
        width="260.000000"
        height="260.000000"
        x="50.000000"
        y="50.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 6"
        width="250.000000"
        height="250.000000"
        x="55.000000"
        y="55.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
    </g>
  </svg>
</template>
