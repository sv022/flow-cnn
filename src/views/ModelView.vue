<script setup lang="ts">
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { LucideArrowLeft } from "lucide-vue-next";
import { useSharedTabs } from "@/utils/tabs";
import { useRoute } from "vue-router";
import { Button } from "@/components/ui/button";
import { useSavedStore } from "@/stores/savedStore";
import { useI18n } from "vue-i18n";
import { formatUpdatedDate, formatUpdatedDateEn } from "@/utils/dateFormatting";
import Model from "@/components/app/model/Model.vue";

const { setTab } = useSharedTabs();
const { locale } = useI18n();

const route = useRoute();

const savedStore = useSavedStore();

const model = savedStore.getModel(route.params.id as string);

function updatedDate(date: Date) {
  if (locale.value.includes("ru")) {
    return formatUpdatedDate(date);
  }
  return formatUpdatedDateEn(date);
}
</script>

<template>
  <div class="p-4">
    <div>
      <Breadcrumb>
        <BreadcrumbList class="px-4">
          <BreadcrumbItem>
            <BreadcrumbLink @click="setTab({ name: 'Model', path: '/' })"> {{ $t("model.breadcrumb.saved") }} </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink @click="setTab({ name: 'Train', path: '/train' })"> {{ model?.name }} </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div class="flex justify-between">
        <Item>
          <ItemContent>
            <ItemTitle class="text-3xl font-semibold text-carbon pb-2">{{ $t("model.title") }}</ItemTitle>
            <ItemDescription>{{ updatedDate(model?.updatedAt!) }}</ItemDescription>
          </ItemContent>
        </Item>
        <Button class="text-muted-foreground" variant="ghost" @click="setTab({ name: 'saved', path: '/saved' })">
          <LucideArrowLeft class="mr-2 w-4 h-4" />
          {{ $t("model.back") }}
        </Button>
      </div>
    </div>
    <Model :model="model!" />
  </div>
</template>
