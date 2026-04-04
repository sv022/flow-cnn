import { ref } from "vue";
import { defineStore } from "pinia";

export const useRenderStore = defineStore("render", () => {
  const offset = ref(8);
  const featureScale = ref(10);
  const layerSpacingCoef = ref(1.0);
  const showLayerLabels = ref(true);

  return {
    offset,
    featureScale,
    layerSpacingCoef,
    showLayerLabels,
  };
});
