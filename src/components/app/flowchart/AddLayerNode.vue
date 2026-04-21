<script setup lang="ts">
import { Button } from "@/components/ui/button";

import { LucidePlus } from "lucide-vue-next";
import AddLayerDropdown from "./dropdown/AddLayerDropdown.vue";
const props = defineProps<{
  id: string;
}>();
</script>

<template>
  <div class="flex group justify-center w-24 h-40 -translate-x-7">
    <AddLayerDropdown :id="props.id">
      <Button class="invisible group-hover:visible" variant="outline" size="sm">
        <LucidePlus class="h-4 w-4" />
      </Button>
    </AddLayerDropdown>
  </div>
</template>
