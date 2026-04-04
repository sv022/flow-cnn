import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { Layer, AddLayerAction, LayerType } from "@/types";
import { mockLayers } from "@/utils/mock";
import { getNewLayerParams } from "@/utils/newLayer";
import { useRenderStore } from "./renderStore";

export const useModelStore = defineStore("model", () => {
  const layers = ref<Layer[]>(mockLayers as Layer[]);

  const renderStore = useRenderStore();

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
      const layerY = 0;
      layer.position = { x: currentX, y: layerY };
      if (layer.params.type === "conv" || layer.params.type === "pool") {
        currentX += layer.params.input_width * renderStore.featureScale + renderStore.offset * (layer.params.channels - 1) * renderStore.layerSpacingCoef;
        if (layer.params.channels <= 3) currentX += 150 * renderStore.layerSpacingCoef;
        else currentX += 100 * renderStore.layerSpacingCoef;
      } else {
        layer.position.x += 125 * renderStore.layerSpacingCoef;
        currentX += 50 + 125 * renderStore.layerSpacingCoef;
      }

      nodes.push(layer);
    });

    nodes.push({
      id: `add-end`,
      type: "add-layer",
      position: { x: currentX + 100 * renderStore.layerSpacingCoef, y: 0 },
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
