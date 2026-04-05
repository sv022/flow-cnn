<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRenderStore } from "@/stores/renderStore";

const renderStore = useRenderStore();
</script>
<template>
  <img src="https://mint.westdri.ca/ai/pt/img/mnist_digit.png" :width="28 * renderStore.featureScale" alt="" />
</template>
