import type { Layer } from "@/types";

export function getLayerY(layer: Layer): number {
  if (layer.params.type === "conv" || layer.params.type === "pool") {
    if (layer.params.channels >= 64) return -325;
    if (layer.params.channels >= 32) return -200;
    if (layer.params.channels >= 16) return -150;
    return -125;
  }
  // if (layer.params.type === "dense") {
  //   if (layer.params.input_nodes >= 512) return -325;
  //   if (layer.params.input_nodes >= 256) return -150;
  //   if (layer.params.input_nodes >= 128) return -125;
  //   return -100;
  // }
  return 0;
}

export function getLayerShiftX(layer: Layer): number {
  if (layer.params.type === "conv" || layer.params.type === "pool") {
    if (layer.params.channels >= 64) return 700 + 125;
    if (layer.params.channels >= 16) return 400 + 125;
    return 375 + 125;
  }
  return 200 + 125;
}
