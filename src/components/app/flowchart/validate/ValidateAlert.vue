<script setup lang="ts">
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { LucideCircleAlert, LucideTriangleAlert } from "lucide-vue-next";
import { AlertType, WarningType, type ValidationAlert, type ValidationError, type ValidationWarning } from "@/types/validation";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  alert: ValidationAlert;
}>();

const { tm } = useI18n();

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

const alertTitle = computed(() => {
  return tm(`flowchart.validation.alert.${props.alert.type}.title`);
});

const alertBody = computed(() => {
  switch (props.alert.type) {
    case AlertType.Error:
      return formatError(props.alert.body as ValidationError);
    case AlertType.Warning:
      return formatWarning(props.alert.body as ValidationWarning);
    default:
      return "";
  }
});

function formatError(body: ValidationError) {
  return tm(`flowchart.validation.alert.error.body.dimensions`)
    .toString()
    .replace("LABELFROM", body.layerLabelFrom)
    .replace("LABELTO", body.layerLabelTo)
    .replace("EXPECTED", body.expected)
    .replace("ACTUAL", body.actual);
}

function formatWarning(body: ValidationWarning) {
  if (body.type === WarningType.DenseTooSmall)
    return tm(`flowchart.validation.alert.architectureWarning.body.${body.type}`).toString().replace("EXPECTED", body.expected!).replace("ACTUAL", body.actual!);
  return tm(`flowchart.validation.alert.architectureWarning.body.${body.type}`);
}
</script>

<template>
  <Item :class="getAlertItemClasses(props.alert.type)" class="w-full" variant="outline">
    <ItemMedia variant="default">
      <LucideCircleAlert v-if="alert.type == AlertType.Error" class="size-6 stroke-destructive-foreground -translate-y-1" />
      <LucideTriangleAlert v-else class="size-6 stroke-warning -translate-y-1" />
    </ItemMedia>
    <ItemContent>
      <ItemTitle :class="getTitleColor(props.alert.type)">{{ alertTitle }}</ItemTitle>
      <ItemDescription class="line-clamp-none"> {{ alertBody }} </ItemDescription>
    </ItemContent>
  </Item>
</template>
