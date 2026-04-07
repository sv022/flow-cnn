<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ScrollArea } from "@/components/ui/scroll-area";
import ModelMenu from "./model/ModelMenu.vue";

defineProps<{
  isOpen: boolean;
}>();
</script>

<template>
  <ScrollArea class="[&>div>div[style]]:block!">
    <div class="mt-4 h-full w-full">
      <div class="flex w-full flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-16px-40px-32px)] items-start space-y-1 px-2">
        <ModelMenu />
        <div class="w-full grow flex items-end"></div>
      </div>
    </div>
  </ScrollArea>
</template>

<style scoped></style>
