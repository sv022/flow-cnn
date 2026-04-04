import { LayerType, type Layer } from "@/types";

function conv2dOutputSize(inputHeight: number, kernelHeight: number, strideHeight: number, paddingHeight: number): number {
  const outputSize = Math.floor((inputHeight + 2 * paddingHeight - kernelHeight) / strideHeight) + 1;

  return outputSize;
}

function poolOutputSize(inputHeight: number, kernelHeight: number, strideHeight: number = 1): number {
  const outputSize = Math.floor((inputHeight - kernelHeight) / strideHeight) + 1;

  return outputSize;
}

function poolInputSize(outputSize: number, kernelHeight: number, strideHeight: number = 1): number {
  const inputSize = (outputSize - 1) * strideHeight + kernelHeight;

  return inputSize;
}

export function getNewLayerParams(type: LayerType, nextLayer: Layer["params"], where: "before" | "after") {
  switch (type) {
    case LayerType.Convolution:
      if (nextLayer.type === LayerType.Convolution) {
        return {
          type: LayerType.Convolution,
          input_width: where == "before" ? nextLayer.input_width + 2 : conv2dOutputSize(nextLayer.input_width, nextLayer.kernel_size, nextLayer.stride, nextLayer.padding),
          input_height: where == "before" ? nextLayer.input_height + 2 : conv2dOutputSize(nextLayer.input_height, nextLayer.kernel_size, nextLayer.stride, nextLayer.padding),
          channels: nextLayer.channels,
          kernel_size: 3,
          num_kernels: nextLayer.channels,
          stride: 1,
          padding: 0,
        } as Layer["params"];
      } else if (nextLayer.type === LayerType.Pooling) {
        return {
          type: LayerType.Convolution,
          input_width: where == "before" ? nextLayer.input_width + 2 : poolOutputSize(nextLayer.input_width, nextLayer.pool, nextLayer.stride),
          input_height: where == "before" ? nextLayer.input_height + 2 : poolOutputSize(nextLayer.input_height, nextLayer.pool, nextLayer.stride),
          channels: nextLayer.channels,
          kernel_size: 3,
          num_kernels: nextLayer.channels,
          stride: 1,
          padding: 0,
        } as Layer["params"];
      } else if (nextLayer.type === LayerType.Dense) {
        return {
          type: LayerType.Convolution,
          input_width: where == "before" ? Math.sqrt(nextLayer.input_nodes) + 2 : Math.sqrt(nextLayer.input_nodes),
          input_height: where == "before" ? Math.sqrt(nextLayer.input_nodes) + 2 : Math.sqrt(nextLayer.input_nodes),
          channels: 1,
          kernel_size: 3,
          num_kernels: 1,
          stride: 1,
          padding: 0,
        } as Layer["params"];
      }
      break;
    case LayerType.Pooling:
      if (nextLayer.type === LayerType.Convolution) {
        return {
          type: LayerType.Pooling,
          input_width: where == "before" ? poolInputSize(nextLayer.input_width, 2, 2) : conv2dOutputSize(nextLayer.input_height, nextLayer.kernel_size, nextLayer.stride, nextLayer.padding),
          input_height: where == "before" ? poolInputSize(nextLayer.input_height, 2, 2) : conv2dOutputSize(nextLayer.input_height, nextLayer.kernel_size, nextLayer.stride, nextLayer.padding),
          channels: nextLayer.channels,
          pool: 2,
          stride: 2,
        } as Layer["params"];
      } else if (nextLayer.type === LayerType.Pooling) {
        return {
          type: LayerType.Pooling,
          input_width: where == "before" ? poolInputSize(nextLayer.input_width, 2, 2) : poolOutputSize(nextLayer.input_width, nextLayer.pool, nextLayer.stride),
          input_height: where == "before" ? poolInputSize(nextLayer.input_height, 2, 2) : poolOutputSize(nextLayer.input_height, nextLayer.pool, nextLayer.stride),
          channels: nextLayer.channels,
          pool: 2,
          stride: 2,
        } as Layer["params"];
      } else if (nextLayer.type === LayerType.Dense) {
        return {
          type: LayerType.Pooling,
          input_width: where == "before" ? poolInputSize(Math.floor(Math.sqrt(nextLayer.input_nodes)), 2, 2) : Math.floor(Math.sqrt(nextLayer.output_nodes)),
          input_height: where == "before" ? poolInputSize(Math.floor(Math.sqrt(nextLayer.input_nodes)), 2, 2) : Math.floor(Math.sqrt(nextLayer.output_nodes)),
          channels: 1,
          pool: 2,
          stride: 2,
        } as Layer["params"];
      }
      break;
    case LayerType.Dense:
      if (nextLayer.type === LayerType.Convolution) {
        return {
          type: LayerType.Dense,
          input_nodes:
            where == "before"
              ? nextLayer.input_width * nextLayer.input_height * nextLayer.channels
              : conv2dOutputSize(nextLayer.input_height, nextLayer.kernel_size, nextLayer.stride, nextLayer.padding),
          output_nodes: where == "before" ? nextLayer.input_height * nextLayer.input_width * nextLayer.channels : 10,
        } as Layer["params"];
      } else if (nextLayer.type === LayerType.Pooling) {
        return {
          type: LayerType.Dense,
          input_nodes:
            where == "before"
              ? nextLayer.input_width * nextLayer.input_height * nextLayer.channels
              : poolOutputSize(nextLayer.input_width, nextLayer.pool, nextLayer.stride) * poolOutputSize(nextLayer.input_height, nextLayer.pool, nextLayer.stride) * nextLayer.channels,
          output_nodes: where == "before" ? nextLayer.input_width * nextLayer.input_height * nextLayer.channels : 10,
        } as Layer["params"];
      } else {
        return {
          type: LayerType.Dense,
          input_nodes: where == "before" ? nextLayer.input_nodes : nextLayer.output_nodes,
          output_nodes: where == "before" ? nextLayer.input_nodes : 10,
        } as Layer["params"];
      }
  }
}

export function getLabelsFromParams(params: Layer["params"]) {
  switch (params.type) {
    case LayerType.Convolution:
      return {
        labelName: `conv2d${params.num_kernels}@${params.kernel_size}x${params.kernel_size}`,
        labelParams: `${params.channels}@${params.input_width}x${params.input_height}`,
      };
    case LayerType.Pooling:
      return {
        labelName: `maxpool${params.channels}@${params.pool}x${params.pool}`,
        labelParams: `${params.channels}@${params.input_width}x${params.input_height}`,
      };
    case LayerType.Dense:
      return {
        labelName: `dense-${params.input_nodes}`,
        labelParams: `1x${params.output_nodes}`,
      };
  }
}
