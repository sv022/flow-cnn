<script setup lang="ts">
import { useSavedStore } from "@/stores/savedStore";
import ModelCard from "./ModelCard.vue";
import { useI18n } from "vue-i18n";
import { formatUpdatedDate, formatUpdatedDateEn } from "@/utils/dateFormatting";
import { useSharedTabs } from "@/utils/tabs";

const savedStore = useSavedStore();

const { locale } = useI18n();
const { setTab } = useSharedTabs();

function updatedDate(date: Date) {
  if (locale.value.includes("ru")) {
    return formatUpdatedDate(date);
  }
  return formatUpdatedDateEn(date);
}
</script>

<template>
  <div v-if="savedStore.savedModels.length > 0" class="flex h-full p-4 space-x-4">
    <ModelCard
      v-for="model in savedStore.savedModels"
      :key="model.id"
      :model="model"
      :updated-at="updatedDate(model.updatedAt!)"
      :pretrained="false"
      @click="setTab({ name: 'info', path: `model/${model.id}` })"
    />
  </div>
  <div v-else class="flex h-full p-4 space-x-4">
    <p class="text-muted-foreground text-sm">{{ $t("saved.empty") }}</p>
  </div>
</template>
