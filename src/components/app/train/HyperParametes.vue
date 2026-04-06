<script setup lang="ts">
import { Label } from "@/components/ui/label";
import { NumberField, NumberFieldContent, NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput } from "@/components/ui/number-field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SectionHeader from "./SectionHeader.vue";
import { ref } from "vue";
import { useModelStore } from "@/stores/modelStore";

const modelStore = useModelStore();

const learningRate = ref<number>(modelStore.trainHyperparams.learning_rate);
const epochs = ref<number>(modelStore.trainHyperparams.epochs);

const lossFunction = ref<string>(modelStore.trainHyperparams.loss_function);
const lossOptions = ["MSE", "Cross Entropy"];

const updateParams = () => {
  modelStore.trainHyperparams.learning_rate = learningRate.value;
  modelStore.trainHyperparams.epochs = epochs.value;
  modelStore.trainHyperparams.loss_function = lossFunction.value;
};
</script>

<template>
  <div>
    <SectionHeader title="Hyperparameters" />
    <div class="flex space-x-8 py-4">
      <div class="flex space-x-8">
        <div class="flex flex-col gap-8">
          <span>
            <Label class="text-charcoal">Epochs</Label>
            <NumberField class="mt-2" :default-value="epochs" :min="1" :max="200" :step="1" v-model="epochs" @update:model-value="updateParams">
              <NumberFieldContent>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldContent>
            </NumberField>
          </span>
          <span>
            <Label class="text-charcoal">Learning Rate</Label>
            <NumberField class="mt-2" :default-value="learningRate" :min="0.0001" :max="0.5" :step="0.001" v-model="learningRate" @update:model-value="updateParams">
              <NumberFieldContent>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldContent>
            </NumberField>
          </span>
        </div>
        <div class="flex flex-col gap-8">
          <span>
            <Label class="text-charcoal">Loss function</Label>
            <div class="h-2"></div>
            <Select v-model="lossFunction" @update:model-value="updateParams">
              <SelectTrigger class="w-40">
                <SelectValue placeholder="ReLU" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem v-for="option in lossOptions" :key="option" :value="option">
                    {{ option }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
