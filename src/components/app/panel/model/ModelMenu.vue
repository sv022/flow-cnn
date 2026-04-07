<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LucideNetwork, LucideSettings2 } from "lucide-vue-next";
import LayoutTree from "./LayoutTree.vue";
import RenderParams from "./RenderParams.vue";
</script>
<template>
  <Accordion type="multiple" collapsible class="w-full" default-value="item-2">
    <AccordionItem value="item-1">
      <AccordionTrigger class="text-sm text-charcoal">
        <span class="flex items-center">
          <LucideSettings2 class="mr-2 h-4 w-4 stroke-highlight" />
          {{ $t("sidebar.general.title") }}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <RenderParams />
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger class="text-sm text-text-charcoal">
        <span class="flex items-center">
          <LucideNetwork class="mr-2 h-4 w-4 stroke-highlight" />
          {{ $t("sidebar.layout.title") }}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <LayoutTree />
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
