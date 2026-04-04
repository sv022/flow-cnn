<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { cn } from "@/lib/utils";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { LucideLogOut } from "lucide-vue-next";
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
        <div class="w-full grow flex items-end">
          <TooltipProvider disable-hoverable-content>
            <Tooltip :delay-duration="100">
              <TooltipTrigger as-child>
                <Button variant="outline" class="w-full justify-center h-10 mt-5">
                  <span :class="cn('flex justify-center items-center', isOpen === false ? '' : 'mr-4')">
                    <LucideLogOut />
                  </span>
                  <p :class="cn('whitespace-nowrap', !isOpen ? 'opacity-0 hidden' : 'opacity-100')">Sign out</p>
                </Button>
              </TooltipTrigger>
              <TooltipContent v-if="!isOpen" side="right"> Sign out </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  </ScrollArea>
</template>

<style scoped></style>
