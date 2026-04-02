import { useStorage } from '@vueuse/core'
import { ref } from 'vue'

export function useSidebar() {
  const isOpen = ref( useStorage('sidebar_state', false) )

  const setOpen = () => {
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    setOpen,
  }
}
