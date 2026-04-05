import { AlertType, type ConvolutionLayerType, type DenseLayerType, type Layer, LayerType, type PoolingLayerType, type ValidationAlert, type ValidationError, type ValidationWarning } from "@/types";

interface DimensionState {
  width: number;
  height: number;
  channels: number;
}

export const _validateModel = (layers: Layer[]): ValidationAlert[] => {
  const alerts: ValidationAlert[] = [];

  if (layers.length === 0) {
    alerts.push({
      type: AlertType.Error,
      body: { layerLabelFrom: "", layerLabelTo: "", expected: ">0", actual: "0" } as ValidationError,
    });
    return alerts;
  }
  let current: DimensionState = {
    width: 0,
    height: 0,
    channels: 0,
  };

  if (layers[0]!.params.type === LayerType.Dense) {
    current = {
      width: 1,
      height: layers[0]!.params.input_nodes,
      channels: 1,
    };
  } else {
    current = {
      width: layers[0]!.params.input_width,
      height: layers[0]!.params.input_height,
      channels: layers[0]!.params.channels,
    };
    alerts.push(...validateLayerInput(layers, 0, current));
  }

  for (let i = 0; i < layers.length; i++) {
    const layer = layers[i];
    const inputErrors = validateLayerInput(layers, i, current);
    alerts.push(...inputErrors);

    const nextState = calculateNextDimensions(layer!.params, current);
    const warnings = validateArchitecture(layers, i, current, nextState);
    alerts.push(...warnings);

    current = nextState;
  }

  return alerts;
};

const validateLayerInput = (layers: Layer[], layerIndex: number, current: DimensionState): ValidationAlert[] => {
  const layer = layers[layerIndex];
  const params = layer!.params;
  const errors: ValidationAlert[] = [];

  if (params.type === LayerType.Dense) {
    const flattened = current.width * current.height * current.channels;
    return validateDenseInput(layerIndex, flattened, layers);
  }

  if (params.input_width !== current.width || params.input_height !== current.height || params.channels !== current.channels) {
    errors.push({
      type: AlertType.Error,
      body: {
        layerLabelFrom: layerIndex > 0 ? layers[layerIndex - 1]!.labelName : "Input",
        layerLabelTo: layer!.labelName,
        expected: `(${current.width}, ${current.height}, ${current.channels})`,
        actual: `(${params.input_width}, ${params.input_height}, ${params.channels})`,
      } as ValidationError,
    });
  }

  return errors;
};

const validateDenseInput = (layerIndex: number, flattened: number, layers: Layer[]): ValidationAlert[] => {
  const layer = layers[layerIndex];
  if (layer?.params.type === LayerType.Dense && layer!.params.input_nodes !== flattened) {
    return [
      {
        type: AlertType.Error,
        body: {
          layerLabelFrom: layerIndex > 0 ? layers[layerIndex - 1]!.labelName : "Input",
          layerLabelTo: layer.labelName,
          expected: `${flattened}`,
          actual: `${layer.params.input_nodes}`,
        } as ValidationError,
      },
    ];
  }
  return [];
};

const calculateNextDimensions = (params: DenseLayerType | PoolingLayerType | ConvolutionLayerType, current: DimensionState): DimensionState => {
  switch (params.type) {
    case LayerType.Convolution:
      const convW = Math.floor((current.width + 2 * params.padding - params.kernel_size) / params.stride) + 1;
      const convH = Math.floor((current.height + 2 * params.padding - params.kernel_size) / params.stride) + 1;
      return { width: convW, height: convH, channels: params.num_kernels };

    case LayerType.Pooling:
      const poolW = Math.floor((current.width - params.pool) / params.stride) + 1;
      const poolH = Math.floor((current.height - params.pool) / params.stride) + 1;
      return { width: poolW, height: poolH, channels: current.channels };

    case LayerType.Dense:
      return { width: 1, height: params.output_nodes, channels: 1 };
    default:
      return current;
  }
};

const validateArchitecture = (layers: Layer[], index: number, current: DimensionState, next: DimensionState): ValidationAlert[] => {
  const warnings: ValidationAlert[] = [];
  const layer = layers[index];
  const params = layer!.params;

  if (params.type === LayerType.Convolution) {
    if (params.kernel_size > 7) {
      warnings.push({
        type: AlertType.Warning,
        body: { layerLabel: layer!.labelName, text: "Kernel size > 7 is not recommended. Use Pooling layer instead or split into multiple layers" } as ValidationWarning,
      });
    }
  }

  if (params.type === LayerType.Dense && params.input_nodes < next.height * 2) {
    warnings.push({
      type: AlertType.Warning,
      body: { layerLabel: layer!.labelName, text: `Layer nodes (${params.input_nodes}) is too small for next input` } as ValidationWarning,
    });
  }

  return warnings;
};
