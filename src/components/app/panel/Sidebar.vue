<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/block-lang -->
<script setup lang="ts">
import { cn } from '@/lib/utils'
import SidebarToggle from './SidebarToggle.vue';
import { RouterLink } from 'vue-router';
import { Button } from '@/components/ui/button';
import AppPanelMenu from './Menu.vue';
import { useSidebar } from '@/utils/sidebar';
import FlowCnnLogo from './FlowCnnLogo.vue';
const { isOpen, setOpen } = useSidebar()

</script>

<template>
<aside
  :class="cn('fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300', isOpen ? 'w-72' : 'w-22.5')">
  <SidebarToggle :is-open="isOpen" :set-is-open="setOpen" />
  <div class="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
    <Button variant="ghost" class="hover:bg-transparent" as-child>
      <RouterLink to="/">
        <FlowCnnLogo />
      </RouterLink>
    </Button>
    <AppPanelMenu :is-open="isOpen" />
  </div>
</aside>
</template>
