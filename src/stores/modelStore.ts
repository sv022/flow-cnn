import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { Layer, AddLayerAction, LayerType } from "@/types";
import { mockLayers } from "@/utils/mock";
import { getLayerShiftX, getLayerY } from "@/utils/layerPlacement";
import { getNewLayerParams } from "@/utils/newLayer";

export const useModelStore = defineStore("model", () => {
  const layers = ref<Layer[]>(mockLayers as Layer[]);

  const addLayer = (addId: string, type: LayerType) => {
    let newLayerParams = {} as Layer["params"];
    let baseLayerParams = {} as Layer["params"];
    if (layers.value.length === 0) {
      baseLayerParams = {
        type,
        input_width: 26,
        input_height: 26,
        channels: 3,
        kernel_size: 3,
        num_kernels: 32,
        stride: 1,
        padding: 1,
      } as Layer["params"];
    } else {
      baseLayerParams = addId === "add-start" ? layers.value[0]!.params : layers.value[layers.value.length - 1]!.params;
    }
    if (addId === "add-start") newLayerParams = getNewLayerParams(type, baseLayerParams, "before")!;
    else newLayerParams = getNewLayerParams(type, baseLayerParams, "after")!;

    const newLayer: Layer = {
      id: `${Date.now()}`,
      type: "layer",
      position: { x: 0, y: 0 },
      params: newLayerParams,
    };

    if (addId === "add-start") layers.value.unshift(newLayer);
    else layers.value.push(newLayer);
  };

  const removeLayer = (id: string) => {
    layers.value = layers.value.filter((layer) => layer.id !== id);
  };

  const updateLayer = (id: string, newParams: Layer["params"]) => {
    const layer = layers.value.find((layer) => layer.id === id);
    if (layer) {
      layer.params = newParams;
    }
  };

  const modelNodes = computed(() => {
    const nodes = [] as (Layer | AddLayerAction)[];

    let currentX = 0;

    nodes.push({
      id: `add-start`,
      type: "add-layer",
      position: { x: -125, y: 0 },
    });

    layers.value.forEach((layer) => {
      const layerY = getLayerY(layer);
      layer.position = { x: currentX, y: layerY };
      currentX += getLayerShiftX(layer);

      nodes.push(layer);
    });

    nodes.push({
      id: `add-end`,
      type: "add-layer",
      position: { x: currentX - 125, y: 0 },
    });

    return nodes;
  });

  return {
    layers,
    modelNodes,
    addLayer,
    removeLayer,
    updateLayer,
  };
});
