<script setup lang="ts">
import { Label } from "@/components/ui/label";
import type { PoolingLayerType } from "@/types";
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@/components/ui/number-field";
import { ref } from "vue";
import { useModelStore } from "@/stores/modelStore";

const modelStore = useModelStore();

const props = defineProps<{
  id: string;
  layer: PoolingLayerType;
}>();

const layerSize = ref<number>(props.layer.input_width);
const channels = ref<number>(props.layer.channels);
const pool = ref<number>(props.layer.pool);
const stride = ref<number>(props.layer.stride);

function updateLayer() {
  modelStore.updateLayer(props.id, {
    ...props.layer,
    input_width: layerSize.value,
    input_height: layerSize.value,
    channels: channels.value,
    pool: pool.value,
    stride: stride.value,
  });
}
</script>
<template>
  <div class="grid flex-1 grow auto-rows-min gap-6 py-10">
    <div class="grid gap-3">
      <Label>Input size</Label>
      <div class="flex space-x-2">
        <NumberField id="pool-settings-input-width" :default-value="props.layer.input_width" :min="3" :max="512" v-model="layerSize" @update:model-value="updateLayer">
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
        <NumberField id="pool-settings-input-height" :default-value="props.layer.input_height" :min="3" :max="512" v-model="layerSize" @update:model-value="updateLayer">
          <NumberFieldContent>
            <NumberFieldDecrement />
            <NumberFieldInput />
            <NumberFieldIncrement />
          </NumberFieldContent>
        </NumberField>
      </div>
    </div>
    <div class="grid gap-3">
      <Label for="pool-settings-channels">Channels</Label>
      <NumberField id="pool-settings-channels" :default-value="props.layer.channels" :min="1" :max="128" v-model="channels" @update:model-value="updateLayer">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
    <div class="grid gap-3">
      <Label for="pool-settings-pool">Pool size</Label>
      <NumberField id="pool-settings-pool" :default-value="props.layer.pool" :min="2" :max="4" :step="2" :step-snapping="true" v-model="pool" @update:model-value="updateLayer">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
    <div class="grid gap-3">
      <Label for="pool-settings-stride">Stride</Label>
      <NumberField id="pool-settings-stride" :default-value="props.layer.stride" :min="1" :max="3" v-model="stride" @update:model-value="updateLayer">
        <NumberFieldContent>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldContent>
      </NumberField>
    </div>
  </div>
</template>
