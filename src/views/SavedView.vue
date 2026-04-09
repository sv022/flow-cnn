<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PrebuiltModels from "@/components/app/saved/PrebuiltModels.vue";
import SavedModels from "@/components/app/saved/SavedModels.vue";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
</script>
<template>
  <div class="p-4">
    <Item>
      <ItemContent>
        <ItemTitle class="text-2xl font-semibold text-carbon">{{ $t("saved.title") }}</ItemTitle>
        <ItemDescription>{{ $t("saved.description") }}</ItemDescription>
      </ItemContent>
    </Item>
    <Accordion :default-value="['prebuilt', 'saved']" class="p-4" type="multiple">
      <AccordionItem class="border-0" value="prebuilt">
        <AccordionTrigger class="text-muted-foreground justify-start space-x-4">
          <p>{{ $t("saved.prebuilt") }}</p></AccordionTrigger
        >
        <AccordionContent>
          <PrebuiltModels />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="border-0" value="saved">
        <AccordionTrigger class="text-muted-foreground justify-start space-x-4">
          <p>
            {{ $t("saved.saved") }}
          </p>
        </AccordionTrigger>
        <AccordionContent>
          <SavedModels />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
