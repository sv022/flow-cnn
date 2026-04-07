<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModelStore } from "@/stores/modelStore";
import { LayerType } from "@/types";
import { LucideBlend, LucideGrid2X2, LucideLayers } from "lucide-vue-next";
import { computed } from "vue";

const props = defineProps<{
  id: string;
  labelName: string;
  type: LayerType;
}>();

const modelStore = useModelStore();

const layerLabel = computed({
  get: () => props.labelName,
  set: (newValue) => modelStore.updateLayerLabel(props.id, newValue),
});
</script>
<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1" class="border-0">
      <AccordionTrigger>
        <span class="flex text-carbon items-center text-sm">
          <LucideLayers v-if="props.type === LayerType.Convolution" class="mr-2 h-4 w-4 stroke-convolution" />
          <LucideGrid2X2 v-else-if="props.type === LayerType.Pooling" class="mr-2 h-4 w-4 stroke-pooling" />
          <LucideBlend v-else-if="props.type === LayerType.Dense" class="mr-2 h-4 w-4 stroke-dense" />
          {{ props.labelName }}
        </span>
      </AccordionTrigger>
      <AccordionContent>
        <div>
          <span class="flex items-center space-x-4">
            <Label class="text-charcoal text-nowrap">{{ $t("sidebar.layout.layerLabel") }}</Label>
            <Input v-model="layerLabel" />
          </span>
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
