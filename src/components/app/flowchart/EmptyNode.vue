<script setup lang="ts">
import { LucidePlus, SquareDashedMousePointer } from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import AddLayerDropdown from "./dropdown/AddLayerDropdown.vue";

const props = defineProps<{
  id: string;
}>();
</script>

<template>
  <Empty class="border border-dashed">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <SquareDashedMousePointer />
      </EmptyMedia>
      <EmptyTitle>{{ $t("flowchart.empty.title") }}</EmptyTitle>
      <EmptyDescription>{{ $t("flowchart.empty.description") }}</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <AddLayerDropdown :id="props.id">
        <Button variant="outline" size="sm"> <LucidePlus class="h-4 w-4" /> </Button>
      </AddLayerDropdown>
    </EmptyContent>
  </Empty>
</template>
