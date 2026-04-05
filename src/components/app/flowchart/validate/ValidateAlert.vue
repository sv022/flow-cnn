<script setup lang="ts">
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { LucideCircleAlert, LucideTriangleAlert } from "lucide-vue-next";
import { AlertType, type ValidationAlert, type ValidationError, type ValidationWarning } from "@/types/validation";

const props = defineProps<{
  alert: ValidationAlert;
}>();

function getAlertItemClasses(type: AlertType) {
  switch (type) {
    case AlertType.Error:
      return "bg-destructive border border-destructive-foreground";
    case AlertType.Warning:
      return "bg-warning/10 border border-warning";
  }
}

function getTitleColor(type: AlertType) {
  switch (type) {
    case AlertType.Error:
      return "text-destructive-foreground font-semibold";
    case AlertType.Warning:
      return "text-warning font-semibold";
  }
}

function formatError(body: ValidationError) {
  return `Incompatible dimensions: ${body.layerLabelFrom} ${body.actual} -> ${body.layerLabelTo}. Expected: ${body.expected}`;
}

function formatWarning(body: ValidationWarning) {
  return `${body.layerLabel}: ${body.text}`;
}
</script>

<template>
  <Item :class="getAlertItemClasses(props.alert.type)" class="w-full" variant="outline">
    <ItemMedia variant="default">
      <LucideCircleAlert v-if="alert.type == AlertType.Error" class="size-6 stroke-destructive-foreground -translate-y-1" />
      <LucideTriangleAlert v-else class="size-6 stroke-warning -translate-y-1" />
    </ItemMedia>
    <ItemContent>
      <ItemTitle :class="getTitleColor(props.alert.type)">{{ props.alert.type }}</ItemTitle>
      <ItemDescription> {{ props.alert.type == AlertType.Error ? formatError(props.alert.body as ValidationError) : formatWarning(props.alert.body as ValidationWarning) }} </ItemDescription>
    </ItemContent>
  </Item>
</template>
