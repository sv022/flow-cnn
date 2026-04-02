<script setup lang="ts">
import { LayerType } from "@/types";

const props = defineProps<{
  type: LayerType;
}>();
</script>
<template>
  <svg
    v-if="props.type === LayerType.Convolution"
    viewBox="0 0 460 460"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="460.000000"
    height="460.000000"
    fill="none"
    customFrame="#000000"
  >
    <g id="Group 9">
      <rect
        id="Rectangle 19"
        width="260.000000"
        height="260.000000"
        x="0.000000"
        y="0.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 19"
        width="250.000000"
        height="250.000000"
        x="5.000000"
        y="5.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 20"
        width="260.000000"
        height="260.000000"
        x="25.000000"
        y="25.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 20"
        width="250.000000"
        height="250.000000"
        x="30.000000"
        y="30.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 21"
        width="260.000000"
        height="260.000000"
        x="50.000000"
        y="50.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 21"
        width="250.000000"
        height="250.000000"
        x="55.000000"
        y="55.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 22"
        width="260.000000"
        height="260.000000"
        x="75.000000"
        y="75.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 22"
        width="250.000000"
        height="250.000000"
        x="80.000000"
        y="80.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 23"
        width="260.000000"
        height="260.000000"
        x="100.000000"
        y="100.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 23"
        width="250.000000"
        height="250.000000"
        x="105.000000"
        y="105.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 24"
        width="260.000000"
        height="260.000000"
        x="125.000000"
        y="125.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 24"
        width="250.000000"
        height="250.000000"
        x="130.000000"
        y="130.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 25"
        width="260.000000"
        height="260.000000"
        x="150.000000"
        y="150.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 25"
        width="250.000000"
        height="250.000000"
        x="155.000000"
        y="155.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 26"
        width="260.000000"
        height="260.000000"
        x="175.000000"
        y="175.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 26"
        width="250.000000"
        height="250.000000"
        x="180.000000"
        y="180.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 27"
        width="260.000000"
        height="260.000000"
        x="200.000000"
        y="200.000000"
        rx="10.000000"
        fill="rgb(223,228,226)"
      />
      <rect
        id="Rectangle 27"
        width="250.000000"
        height="250.000000"
        x="205.000000"
        y="205.000000"
        rx="5.000000"
        stroke="rgb(163,178,171)"
        stroke-width="10.000000"
      />
    </g>
  </svg>
  <svg
    v-else-if="props.type === LayerType.Pooling"
    viewBox="0 0 460 460"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="460.000000"
    height="460.000000"
    fill="none"
    customFrame="#000000"
  >
    <g id="Group 13">
      <rect
        id="Rectangle 19"
        width="260.000000"
        height="260.000000"
        x="0.000000"
        y="0.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 19"
        width="250.000000"
        height="250.000000"
        x="5.000000"
        y="5.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 20"
        width="260.000000"
        height="260.000000"
        x="25.000000"
        y="25.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 20"
        width="250.000000"
        height="250.000000"
        x="30.000000"
        y="30.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 21"
        width="260.000000"
        height="260.000000"
        x="50.000000"
        y="50.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 21"
        width="250.000000"
        height="250.000000"
        x="55.000000"
        y="55.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 22"
        width="260.000000"
        height="260.000000"
        x="75.000000"
        y="75.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 22"
        width="250.000000"
        height="250.000000"
        x="80.000000"
        y="80.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 23"
        width="260.000000"
        height="260.000000"
        x="100.000000"
        y="100.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 23"
        width="250.000000"
        height="250.000000"
        x="105.000000"
        y="105.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 24"
        width="260.000000"
        height="260.000000"
        x="125.000000"
        y="125.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 24"
        width="250.000000"
        height="250.000000"
        x="130.000000"
        y="130.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 25"
        width="260.000000"
        height="260.000000"
        x="150.000000"
        y="150.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 25"
        width="250.000000"
        height="250.000000"
        x="155.000000"
        y="155.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 26"
        width="260.000000"
        height="260.000000"
        x="175.000000"
        y="175.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 26"
        width="250.000000"
        height="250.000000"
        x="180.000000"
        y="180.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
      <rect
        id="Rectangle 27"
        width="260.000000"
        height="260.000000"
        x="200.000000"
        y="200.000000"
        rx="10.000000"
        fill="rgb(227,226,231)"
      />
      <rect
        id="Rectangle 27"
        width="250.000000"
        height="250.000000"
        x="205.000000"
        y="205.000000"
        rx="5.000000"
        stroke="rgb(184,184,194)"
        stroke-width="10.000000"
      />
    </g>
  </svg>
</template>
