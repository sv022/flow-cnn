export enum LayerType {
  Convolution = "conv",
  Pooling = "pool",
  Dense = "dense",
}

export interface ConvolutionLayerType {
  type: LayerType.Convolution;
  input_width: number;
  input_height: number;
  channels: number;
  kernel_size: number;
  num_kernels: number;
  stride: number;
  padding: number;
}

export interface PoolingLayerType {
  type: LayerType.Pooling;
  input_width: number;
  input_height: number;
  channels: number;
  pool: number;
  stride: number;
}

export interface DenseLayerType {
  type: LayerType.Dense;
  input_nodes: number;
  output_nodes: number;
}

export interface Layer {
  id: string;
  position: { x: number; y: number };
  labelName: string;
  labelParams: string;
  type: "layer";
  params: ConvolutionLayerType | PoolingLayerType | DenseLayerType;
}

export interface AddLayerAction {
  id: string;
  type: "add-layer";
  position: { x: number; y: number };
}

export interface LayersEmpty {
  id: string;
  type: "empty";
  position: { x: number; y: number };
}

export interface InputLayer {
  id: string;
  position: { x: number; y: number };
  labelName: string;
  labelParams: string;
  type: "input-layer";
}
