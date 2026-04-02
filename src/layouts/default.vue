<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useSidebar } from '@/utils/sidebar';

import AppPanelSidebar from '../components/app/panel/Sidebar.vue';
import AppPanelContentLayout from '../components/app/panel/ContentLayout.vue';
import AppPanelFooter from '../components/app/panel/Footer.vue';

const { isOpen } = useSidebar()
</script>

<template>
<div>
  <AppPanelSidebar />
  <main :class="cn(
    'flex flex-col min-h-[calc(100vh-56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300',
    !isOpen ? 'lg:ml-22.5' : 'lg:ml-72',
  )">
    <AppPanelContentLayout>
      <slot />
    </AppPanelContentLayout>
  </main>
  <footer :class="cn(
    'transition-[margin-left] ease-in-out duration-300',
    !isOpen ? 'lg:ml-22.5' : 'lg:ml-72',
  )">
    <AppPanelFooter />
  </footer>
</div>
</template>

<style scoped></style>
