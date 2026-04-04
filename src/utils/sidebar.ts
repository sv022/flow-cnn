import { ref } from "vue";

export function useSidebar() {
  const isOpen = ref(true);

  const setOpen = () => {
    isOpen.value = !isOpen.value;
  };

  return {
    isOpen,
    setOpen,
  };
}
