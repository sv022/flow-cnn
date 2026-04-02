<script setup lang="ts">
import { Label } from "@/components/ui/label";
import type { DenseLayerType } from "@/types";
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@/components/ui/number-field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { ref } from "vue";

const props = defineProps<{
  layer: DenseLayerType;
}>();

const inputNodes = ref<number>(props.layer.input_nodes);
const outputNodes = ref<number>(props.layer.output_nodes);
const activation = ref<string>("Sigmoid");

const activationOptions = ["ReLU", "Sigmoid", "Tanh"];
</script>
<template>
  <div class="grid flex-1 grow auto-rows-min gap-6 py-10">
    <div class="grid gap-3">
      <Label for="dense-settings-input-nodes">Input Nodes</Label>
      <NumberField id="dense-settings-input-nodes" :default-value="props.layer.input_nodes" :min="1" :max="1024" v-model="inputNodes">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
    <div class="grid gap-3">
      <Label for="dense-settings-output-nodes">Output Nodes</Label>
      <NumberField id="dense-settings-output-nodes" :default-value="props.layer.output_nodes" :min="1" :max="1024" v-model="outputNodes">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
    <div class="grid gap-3 mt-3">
      <Label for="dense-settings-activation">Activation</Label>
      <Select id="dense-settings-activation" v-model="activation">
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
  </div>
</template>
