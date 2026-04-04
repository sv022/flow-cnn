import type { Layer } from "@/types";

export function getLayerShiftX(layer: Layer): number {
  if (layer.params.type === "conv" || layer.params.type === "pool") {
    return 125;
  }
  return 200 + 125;
}
