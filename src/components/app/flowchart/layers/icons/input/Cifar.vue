<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRenderStore } from "@/stores/renderStore";

const renderStore = useRenderStore();
</script>
<template>
  <img :width="32 * renderStore.featureScale" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyj8NN7fnpvI4DJYPd801Fienzrgq10LL_Kg&s" alt="" />
</template>
