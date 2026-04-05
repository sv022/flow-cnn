<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRenderStore } from "@/stores/renderStore";

const renderStore = useRenderStore();
</script>
<template>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjI2ORQS3WMXPgiwF1Evi_k6fFfUrej8g7Q&s" :width="28 * renderStore.featureScale" alt="" />
</template>
