import { ref } from "vue";
import { defineStore } from "pinia";

export const useRenderStore = defineStore("render", () => {
  const offset = ref(8);
  const featureScale = ref(10);

  return {
    offset,
    featureScale,
  };
});
