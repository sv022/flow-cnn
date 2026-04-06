import router from "@/router";
import { createSharedComposable } from "@vueuse/core";
import { ref } from "vue";

interface Tab {
  name: string;
  path: string;
}

export const appTabs = [
  {
    name: "Model",
    path: "/",
  },
  {
    name: "Datasets",
    path: "/datasets",
  },
  {
    name: "Tutorials",
    path: "/tutorials",
  },
  {
    name: "Saved models",
    path: "/saved",
  },
] as Tab[];

export const useSharedTabs = createSharedComposable(useTabs);

function useTabs() {
  const activeTab = ref<Tab>(appTabs[0]!);

  const setTab = (tab: Tab) => {
    activeTab.value = tab;
    router.push(tab.path);
  };

  return {
    activeTab,
    setTab,
  };
}
