<script setup lang="ts">
import { useModelStore } from "@/stores/modelStore";
import LayoutItem from "./LayoutItem.vue";

const modelStore = useModelStore();
</script>
<template>
  <div class="space-y-2 pl-2">
    <LayoutItem v-for="layer in modelStore.layers" :key="layer.id" :id="layer.id" :labelName="layer.labelName" :type="layer.params.type" />
  </div>
</template>
