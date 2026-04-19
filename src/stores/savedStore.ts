import type { Model } from "@/types/model";
import { mockModels } from "@/utils/mock";
import { defineStore, acceptHMRUpdate } from "pinia";
import { ref } from "vue";

export const useSavedStore = defineStore("savedStore", () => {
  const prebuiltModels = ref<Model[]>(mockModels);
  const savedModels = ref<Model[]>(localStorage.getItem("savedModels") ? JSON.parse(localStorage.getItem("savedModels")!) : []);

  const toLocalStorage = () => {
    localStorage.setItem("savedModels", JSON.stringify(savedModels.value));
  };

  const saveModel = (model: Model) => {
    savedModels.value.push(model);
    toLocalStorage();
  };

  const deleteModel = (model: Model) => {
    savedModels.value = savedModels.value.filter((m) => m.id !== model.id);
    toLocalStorage();
  };

  const updateModel = (id: string, newModel: Model) => {
    savedModels.value.forEach((m) => {
      if (m.id === id) {
        m.name = newModel.name;
        m.layers = newModel.layers;
        m.updatedAt = new Date();
      }
    });
    toLocalStorage();
  };

  const getModel = (id: string) => {
    return savedModels.value.find((m) => m.id === id);
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
    getModel,
    checkName,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSavedStore, import.meta.hot));
}
