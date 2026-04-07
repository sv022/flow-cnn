import router from "@/router";
import { createSharedComposable } from "@vueuse/core";
import { ref } from "vue";

interface Tab {
  name: string;
  path: string;
}

export const appTabs = [
  {
    name: "model",
    path: "/",
  },
  {
    name: "datasets",
    path: "/datasets",
  },
  {
    name: "tutorials",
    path: "/tutorials",
  },
  {
    name: "saved",
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
