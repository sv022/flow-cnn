import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { Layer, AddLayerAction, LayerType, Dataset, InputLayer, LayersEmpty } from "@/types";
// import { mockLayers } from "@/utils/mock";
import { getBaseLayerParams, getLabelsFromParams, getNewLayerParams } from "@/utils/newLayer";
import { useRenderStore } from "./renderStore";
import type { ValidationAlert } from "@/types/validation";
import { _validateModel } from "@/utils/validate";

export const useModelStore = defineStore("model", () => {
  const name = ref("");

  const layers = ref<Layer[]>([] as Layer[]);

  const renderStore = useRenderStore();

  const validationPending = ref(false);
  const validationAlerts = ref<ValidationAlert[]>([]);

  const selectedDataset = ref<Dataset | null>(null);

  const trainHyperparams = ref({
    epochs: 10,
    learning_rate: 0.001,
    loss_function: "MSE",
  });

  const accuracy = ref<number | null>(null);

  const addLayer = (addId: string, type: LayerType) => {
    let newLayerParams = {} as Layer["params"];
    let baseLayerParams = {} as Layer["params"];
    if (layers.value.length === 0) {
      if (selectedDataset.value === null) baseLayerParams = getBaseLayerParams(type);
      else baseLayerParams = getBaseLayerParams(type, selectedDataset!.value.imageSize);
      newLayerParams = baseLayerParams;
    } else {
      baseLayerParams = addId === "add-start" ? layers.value[0]!.params : layers.value[layers.value.length - 1]!.params;
      if (addId === "add-start") newLayerParams = getNewLayerParams(type, baseLayerParams, "before")!;
      else newLayerParams = getNewLayerParams(type, baseLayerParams, "after")!;
    }

    const newLabels = getLabelsFromParams(newLayerParams);

    const newLayer: Layer = {
      id: `${Date.now()}`,
      type: "layer",
      labelName: newLabels.labelName,
      labelParams: newLabels.labelParams,
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
    const updatedLabels = getLabelsFromParams(newParams);

    const layer = layers.value.find((layer) => layer.id === id);
    if (layer) {
      layer.params = newParams;
      layer.labelName = updatedLabels.labelName;
      layer.labelParams = updatedLabels.labelParams;
    }
  };

  const updateLayerLabel = (id: string, labelName: string) => {
    const layer = layers.value.find((layer) => layer.id === id);
    if (layer) {
      layer.labelName = labelName;
    }
  };

  const validateModel = () => {
    validationPending.value = true;
    setTimeout(() => {
      validationPending.value = false;
    }, 1000);

    validationAlerts.value = _validateModel(layers.value, selectedDataset.value);
  };

  const loadModel = (newName: string, newLayers: Layer[]) => {
    name.value = newName;
    layers.value = newLayers;
  };

  const setDataset = (dataset: Dataset) => {
    selectedDataset.value = dataset;
  };

  const resetDataset = () => {
    selectedDataset.value = null;
  };

  const trainableParams = computed(() => {
    let params = 0;
    layers.value.forEach((layer) => {
      if (layer.params.type === "conv") {
        params += layer.params.num_kernels * layer.params.kernel_size * layer.params.kernel_size * layer.params.channels;
      } else if (layer.params.type === "dense") {
        params += layer.params.input_nodes * layer.params.output_nodes;
      }
    });
    return params;
  });

  const checkReadyForTrain = () => {
    validateModel();
    return layers.value.length > 0 && validationAlerts.value.length === 0;
  };

  const runTrain = () => {
    // TODO
  };

  const modelNodes = computed(() => {
    const nodes = [] as (Layer | AddLayerAction | InputLayer | LayersEmpty)[];

    let currentX = 0;

    if (selectedDataset.value) {
      nodes.push({
        id: `input-layer`,
        type: "input-layer",
        position: { x: -500, y: 0 },
        labelName: selectedDataset.value.name,
        labelParams: `${selectedDataset.value.imageSize[0]}x${selectedDataset.value.imageSize[1]}x${selectedDataset.value.imageSize[2]}`,
      });
    }

    if (layers.value.length === 0) {
      nodes.push({
        id: `empty`,
        type: "empty",
        position: { x: 0, y: -150 },
      });
      return nodes;
    }

    nodes.push({
      id: `add-start`,
      type: "add-layer",
      position: { x: -100, y: 0 },
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
    name,
    layers,
    modelNodes,
    validationPending,
    validationAlerts,
    selectedDataset,
    trainableParams,
    trainHyperparams,
    accuracy,
    addLayer,
    removeLayer,
    updateLayer,
    updateLayerLabel,
    validateModel,
    loadModel,
    setDataset,
    resetDataset,
    checkReadyForTrain,
    runTrain,
  };
});
