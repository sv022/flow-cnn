import type { Model } from "@/types/model";
import { mockModels } from "@/utils/mock";
import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useSavedStore = defineStore("savedStore", () => {
  const prebuiltModels = ref<Model[]>(mockModels);
  const savedModels = ref<Model[]>([]);

  const saveModel = (model: Model) => {
    savedModels.value.push(model);
  };

  const deleteModel = (model: Model) => {
    savedModels.value = savedModels.value.filter((m) => m.id !== model.id);
  };

  const updateModel = (id: string, newModel: Model) => {
    savedModels.value.forEach((m) => {
      if (m.id === id) {
        m.name = newModel.name;
        m.layers = newModel.layers;
        m.updatedAt = new Date();
      }
    });
  };

  const checkName = (name: string) => {
    return savedModels.value.some((m) => m.name === name);
  };

  return {
    prebuiltModels,
    savedModels,
    saveModel,
    deleteModel,
    updateModel,
    checkName,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSavedStore, import.meta.hot));
}
