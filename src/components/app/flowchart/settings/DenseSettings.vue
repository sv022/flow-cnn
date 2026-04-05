<script setup lang="ts">
import { Label } from "@/components/ui/label";
import type { DenseLayerType } from "@/types";
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@/components/ui/number-field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { computed, ref } from "vue";
import { useModelStore } from "@/stores/modelStore";
import LayerParams from "./LayerParams.vue";

const modelStore = useModelStore();

const props = defineProps<{
  id: string;
  layer: DenseLayerType;
}>();

const inputNodes = ref<number>(props.layer.input_nodes);
const outputNodes = ref<number>(props.layer.output_nodes);
const activation = ref<string>("Sigmoid");

const activationOptions = ["ReLU", "Sigmoid", "Tanh"];

function updateLayer() {
  modelStore.updateLayer(props.id, {
    ...props.layer,
    input_nodes: inputNodes.value,
    output_nodes: outputNodes.value,
  });
}

const learnableParams = computed(() => {
  return inputNodes.value * outputNodes.value;
});

const outputShape = computed(() => {
  return `(
    1, ${outputNodes.value}
)`;
});
</script>
<template>
  <div class="grid flex-1 grow auto-rows-min gap-6 py-10">
    <div class="grid gap-3">
      <Label for="dense-settings-input-nodes">Input Nodes</Label>
      <NumberField id="dense-settings-input-nodes" :default-value="props.layer.input_nodes" :min="1" :max="16384" v-model="inputNodes" @update:model-value="updateLayer">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
    <div class="grid gap-3">
      <Label for="dense-settings-output-nodes">Output Nodes</Label>
      <NumberField id="dense-settings-output-nodes" :default-value="props.layer.output_nodes" :min="1" :max="16384" v-model="outputNodes" @update:model-value="updateLayer">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
    <div class="grid gap-3 mt-3">
      <Label for="dense-settings-activation">Activation</Label>
      <Select id="dense-settings-activation" v-model="activation" @update:model-value="updateLayer">
        <SelectTrigger>
          <SelectValue placeholder="Sigmoid" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="option in activationOptions" :key="option" :value="option">
              {{ option }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <LayerParams :learnable-params="learnableParams" :output-shape="outputShape" />
  </div>
</template>
