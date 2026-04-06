<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useModelStore } from "@/stores/modelStore";
import { LucideCheckCircle, LucideXCircle } from "lucide-vue-next";
import { onMounted, ref } from "vue";

const modelStore = useModelStore();

function getRuntimeEta() {
  return modelStore.layers.length * Math.random() * 1000;
}

const validationPending = ref(false);
const readyForTrain = ref(false);

onMounted(() => {
  validationPending.value = true;
  setTimeout(() => {
    readyForTrain.value = modelStore.checkReadyForTrain();
    validationPending.value = false;
  }, 3000);
});
</script>
<template>
  <div class="w-96 ml-auto h-full p-8 border-l-2 border-mint-700 rounded-xl">
    <h2 class="text-charcoal mb-8">Model summary</h2>
    <div class="space-y-4">
      <span class="flex justify-between">
        <p>Layers</p>
        <p class="font-semibold text-charcoal">{{ modelStore.layers.length }}</p>
      </span>
      <span class="flex justify-between">
        <p>Trainable parameters</p>
        <p class="font-semibold text-charcoal">{{ modelStore.trainableParams }}</p>
      </span>
      <span class="flex justify-between">
        <p>Runtime eta</p>
        <p class="font-semibold text-charcoal">{{ getRuntimeEta().toFixed(2) }}s.</p>
      </span>
      <span class="flex justify-between">
        <p>Precision</p>
        <Badge class="bg-taupe-700/50 hover:bg-taupe-700"> FP32 </Badge>
      </span>
      <div class="flex items-center justify-center w-full h-32 border border-input bg-input/5 rounded-xl mt-8">
        <span class="flex flex-col items-center" v-if="validationPending">
          <Spinner />
          <p class="mt-2 text-sm text-muted-foreground">Validating model...</p>
        </span>
        <span class="flex flex-col items-center" v-else-if="readyForTrain">
          <LucideCheckCircle class="h-12 w-12 stroke-positive-foreground" />
          <p class="mt-2 text-sm text-muted-foreground">Ready to launch</p>
        </span>
        <span class="flex flex-col items-center" v-else>
          <LucideXCircle class="h-12 w-12 stroke-destructive-foreground" />
          <p class="mt-2 text-sm text-muted-foreground">Invalid model</p>
        </span>
      </div>
      <Button class="w-full h-12 mt-8 font-semibold bg-mint-700/90 hover:bg-mint-700" variant="default" :disabled="!readyForTrain" @click="modelStore.runTrain"><p>Train model</p></Button>
    </div>
  </div>
</template>
