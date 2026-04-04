<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LucideLayers, LucideSettings2 } from "lucide-vue-next";
</script>
<template>
  <Accordion type="single" collapsible class="w-full" default-value="item-2">
    <AccordionItem value="item-1">
      <AccordionTrigger class="text-sm text-muted-foreground">
        <span class="flex items-center">
          <LucideSettings2 class="mr-2 h-4 w-4" />
          General settings
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <p>General settings for the model</p>
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger class="text-sm text-muted-foreground">
        <span class="flex items-center">
          <LucideLayers class="mr-2 h-4 w-4" />
          Layout
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <p>Model tree layout</p>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
