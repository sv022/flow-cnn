<script setup lang="ts">
import Separator from "@/components/ui/separator/Separator.vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps<{
  learnableParams: number;
  outputShape: string;
}>();
</script>
<template>
  <Separator />
  <div>
    <div class="flex justify-between">
      <p class="text-muted-foreground text-sm">{{ $t("flowchart.settings.learnableParams") }}</p>
      <p class="text-positive-foreground text-sm font-semibold">
        {{ learnableParams }}
      </p>
    </div>
  </div>
  <div>
    <div class="flex justify-between">
      <p class="text-muted-foreground text-sm">{{ $t("flowchart.settings.outputShape") }}</p>
      <p class="text-carbon text-sm font-semibold">
        {{ outputShape }}
      </p>
    </div>
  </div>
</template>
