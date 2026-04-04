<script setup lang="ts">
import { Label } from "@/components/ui/label";
import type { ConvolutionLayerType } from "@/types";
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@/components/ui/number-field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ref } from "vue";
import { useModelStore } from "@/stores/modelStore";

const props = defineProps<{
  id: string;
  layer: ConvolutionLayerType;
}>();

const modelStore = useModelStore();

const layerSize = ref<number>(props.layer.input_width);
const channels = ref<number>(props.layer.channels);
const kernelSize = ref<number>(props.layer.kernel_size);
const numKernels = ref<number>(props.layer.num_kernels);
const stride = ref<number>(props.layer.stride);
const padding = ref<number>(props.layer.padding);
const activation = ref<string>("ReLU");

const activationOptions = ["ReLU", "Sigmoid", "Tanh"];

function updateLayer() {
  if (layerSize.value < kernelSize.value) {
    layerSize.value = kernelSize.value;
  }
  modelStore.updateLayer(props.id, {
    ...props.layer,
    input_width: layerSize.value,
    input_height: layerSize.value,
    channels: channels.value,
    kernel_size: kernelSize.value,
    num_kernels: numKernels.value,
    stride: stride.value,
    padding: padding.value,
  });
}
</script>
<template>
  <div class="grid flex-1 grow auto-rows-min gap-6 py-10">
    <div class="grid gap-3">
      <Label>Input size</Label>
      <div class="flex space-x-2">
        <NumberField id="conv-settings-input-width" :default-value="props.layer.input_width" :min="kernelSize" :max="512" v-model="layerSize" @update:model-value="updateLayer">
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
        <NumberField id="conv-settings-input-height" :default-value="props.layer.input_height" :min="kernelSize" :max="512" v-model="layerSize" @update:model-value="updateLayer">
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>
    </div>
    <div class="grid gap-3">
      <Label for="conv-settings-channels">Channels</Label>
      <NumberField id="conv-settings-channels" :default-value="props.layer.channels" :min="1" :max="128" v-model="channels" @update:model-value="updateLayer">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
    <div class="grid gap-3 mt-6">
      <Label>Kernel size</Label>
      <div class="flex space-x-2">
        <NumberField id="conv-settings-kernel-width" :default-value="props.layer.kernel_size" :min="3" :max="11" :step="2" :step-snapping="true" v-model="kernelSize" @update:model-value="updateLayer">
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
        <NumberField
          id="conv-settings-kernel-height"
          :default-value="props.layer.kernel_size"
          :min="1"
          :max="11"
          :step="2"
          :step-snapping="true"
          v-model="kernelSize"
          @update:model-value="updateLayer"
        >
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>
    </div>
    <div class="grid gap-3">
      <Label for="conv-settings-num-kernels">Number of Kernels</Label>
      <NumberField id="conv-settings-num-kernels" :default-value="props.layer.num_kernels" :min="1" :max="128" v-model="numKernels" @update:model-value="updateLayer">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
    <div class="grid gap-3 mt-6">
      <Label for="conv-settings-stride">Stride</Label>
      <NumberField id="conv-settings-stride" :default-value="props.layer.stride" :min="1" :max="3" v-model="stride" @update:model-value="updateLayer">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
    <div class="grid gap-3">
      <Label for="conv-settings-padding">Padding</Label>
      <NumberField id="conv-settings-padding" :default-value="props.layer.padding" :min="0" :max="3" v-model="padding" @update:model-value="updateLayer">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
    <div class="grid gap-3 mt-3">
      <Label for="conv-settings-activation">Activation</Label>
      <Select id="conv-settings-activation" v-model="activation">
        <SelectTrigger>
          <SelectValue placeholder="ReLU" />
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
