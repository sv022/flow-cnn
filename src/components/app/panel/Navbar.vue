<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { Button } from "@/components/ui/button";
import ColorModeToggle from "../ColorModeToggle.vue";
import UserDropdown from "./UserDropdown.vue";
import { appTabs, useTabs } from "@/utils/tabs";
import { cn } from "@/lib/utils";

const { activeTab, setTab } = useTabs();
</script>

<template>
  <header class="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-backdrop-filter:bg-background/60 dark:shadow-secondary">
    <div class="mx-4 sm:mx-8 flex h-14 items-center">
      <div class="flex items-center space-x-4 lg:space-x-0">
        <Button v-for="tab in appTabs" :key="tab.name" @click="setTab(tab)" variant="ghost">
          <p :class="cn('text-muted-foreground text-sm p-1', activeTab.name === tab.name ? 'border-b border-input' : '')">{{ tab.name }}</p>
        </Button>
      </div>
      <div class="flex flex-1 items-center space-x-2 justify-end">
        <ColorModeToggle />
        <UserDropdown />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
