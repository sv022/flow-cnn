import { LayerType, type Layer } from "@/types";

export const mockLayers = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    type: "layer",
    params: {
      type: LayerType.Convolution,
      input_width: 28,
      input_height: 28,
      channels: 1,
      kernel_size: 3,
      num_kernels: 32,
      stride: 1,
      padding: 0,
    },
  },
  {
    id: "2",
    position: { x: 0, y: 0 },
    type: "layer",
    params: {
      type: LayerType.Pooling,
      input_width: 28,
      input_height: 28,
      channels: 32,
      pool: 2,
      stride: 2,
    },
  },
  {
    id: "3",
    position: { x: 0, y: 0 },
    type: "layer",
    params: {
      type: LayerType.Convolution,
      input_width: 14,
      input_height: 14,
      channels: 32,
      kernel_size: 3,
      num_kernels: 64,
      stride: 1,
      padding: 0,
    },
  },
  {
    id: "4",
    position: { x: 0, y: 0 },
    type: "layer",
    params: {
      type: LayerType.Pooling,
      input_width: 14,
      input_height: 14,
      channels: 64,
      pool: 2,
      stride: 2,
    },
  },
  {
    id: "5",
    position: { x: 0, y: 0 },
    type: "layer",
    params: {
      type: LayerType.Dense,
      input_nodes: 7 * 7 * 64,
      output_nodes: 128,
    },
  },
  {
    id: "6",
    position: { x: 0, y: 0 },
    type: "layer",
    params: {
      type: LayerType.Dense,
      input_nodes: 128,
      output_nodes: 10,
    },
  },
] as Layer[];
