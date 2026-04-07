<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useRenderStore } from "@/stores/renderStore";
import { ref } from "vue";

const renderStore = useRenderStore();

const featureOffset = ref([renderStore.offset]);
const featureScale = ref([renderStore.featureScale]);
const layerSpacingCoef = ref([renderStore.layerSpacingCoef]);
const showLayerLabels = ref(renderStore.showLayerLabels);

function updateRenderParams() {
  renderStore.featureScale = featureScale.value[0]!;
  renderStore.layerSpacingCoef = layerSpacingCoef.value[0]!;
  renderStore.offset = featureOffset.value[0]!;
  renderStore.showLayerLabels = showLayerLabels.value;
}
</script>
<template>
  <div class="flex flex-col space-y-6 py-4">
    <span class="flex items-center space-x-4">
      <Label class="text-charcoal text-nowrap" for="feature-scale">{{ $t("sidebar.general.scale") }}</Label>
      <Slider id="feature-scale" v-model="featureScale" :min="1" :max="10" :step="0.1" @update:model-value="updateRenderParams" />
    </span>
    <span class="flex space-x-4">
      <Label class="text-charcoal text-nowrap">{{ $t("sidebar.general.spacing") }}</Label>
      <Slider v-model="featureOffset" :default-value="featureOffset" :min="8" :max="32" :step="0.1" @update:model-value="updateRenderParams" />
    </span>
    <span class="flex space-x-4 mt-2">
      <Label class="text-charcoal text-nowrap">{{ $t("sidebar.general.labels") }}</Label>
      <Checkbox v-model="showLayerLabels" @update:model-value="updateRenderParams" />
    </span>
  </div>
</template>
