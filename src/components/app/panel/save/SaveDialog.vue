<script setup lang="ts">
import { DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { computed, ref } from "vue";
import { useModelStore } from "@/stores/modelStore";
import { useSavedStore } from "@/stores/savedStore";
import { cn } from "@/lib/utils";
import { useI18n } from "vue-i18n";
import { Button } from "@/components/ui/button";
import type { Model } from "@/types/model";
const { tm } = useI18n();

const modelStore = useModelStore();
const savedStore = useSavedStore();

const saveOptions = ["save", "json"];
const selectedSave = ref(saveOptions[0]);

const name = ref(modelStore.name);

interface ValidationAlert {
  type: "error" | "hint";
  message: string;
}

const validateAlert = ref<ValidationAlert | null>(null);

function vaildateName() {
  if (name.value.length < 3) {
    validateAlert.value = {
      type: "error",
      message: tm("save.nameValidation.tooShort"),
    };
  } else if (savedStore.checkName(name.value)) {
    validateAlert.value = {
      type: "hint",
      message: tm("save.nameValidation.occupied"),
    };
  } else {
    validateAlert.value = null;
  }
}

const alertStyle = computed(() => {
  if (!validateAlert.value) return "hidden";
  return validateAlert.value?.type === "error" ? "text-destructive-foreground" : "text-muted-foreground";
});

function toJson(model: Model) {
  const json = JSON.stringify(
    {
      learning_rate: modelStore.trainHyperparams.learning_rate,
      layers: [...model.layers.map((layer) => layer.params)],
    },
    null,
    2,
  );

  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${model.name.replaceAll(" ", "_")}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function saveModel() {
  modelStore.name = name.value;
  const newModel = {
    id: Date.now().toString(),
    name: name.value,
    layers: modelStore.layers,
    isTrained: false,
    updatedAt: new Date(),
  } as Model;

  if (selectedSave.value === "json") {
    toJson(newModel);
    return;
  }

  if (savedStore.checkName(name.value)) {
    const id = savedStore.savedModels.find((m) => m.name === name.value)!.id!;
    savedStore.updateModel(id, newModel);
  } else {
    savedStore.saveModel(newModel);
  }
}

if (savedStore.checkName(name.value)) {
  validateAlert.value = {
    type: "hint",
    message: tm("save.nameValidation.occupied"),
  };
}
</script>

<template>
  <DialogHeader>
    <DialogTitle>{{ $t("save.title") }}</DialogTitle>
    <DialogDescription> {{ $t("save.description") }} </DialogDescription>
  </DialogHeader>
  <div class="grid gap-4 py-4">
    <div class="grid gap-3">
      <Label>{{ $t("save.labelFormat") }}</Label>
      <Select v-model="selectedSave">
        <SelectTrigger class="w-full">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem v-for="option in saveOptions" :key="option" :value="option">
              {{ $t(`save.options.${option}`) }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <div class="grid gap-3">
      <Label>{{ $t("save.labelName") }}</Label>
      <Input v-model="name" @focusout="vaildateName" />
      <p :class="cn('text-xs', alertStyle)">{{ validateAlert?.message }}</p>
    </div>
  </div>
  <DialogFooter>
    <DialogClose as-child>
      <Button variant="outline"> {{ $t("save.actions.cancel") }} </Button>
    </DialogClose>
    <DialogClose as-child>
      <Button class="bg-mint-700 hover:bg-mint-800" :disabled="validateAlert?.type === 'error'" @click="saveModel"> {{ $t("save.actions.save") }} </Button>
    </DialogClose>
  </DialogFooter>
</template>
