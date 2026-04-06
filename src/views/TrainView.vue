<script setup lang="ts">
import TrainSetup from "@/components/app/train/TrainSetup.vue";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useSharedTabs } from "@/utils/tabs";
import { LucideArrowLeft } from "lucide-vue-next";

const { setTab } = useSharedTabs();
</script>
<template>
  <div class="p-4">
    <div>
      <Breadcrumb>
        <BreadcrumbList class="px-4">
          <BreadcrumbItem>
            <BreadcrumbLink @click="setTab({ name: 'Model', path: '/' })"> Model </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink @click="setTab({ name: 'Train', path: '/train' })"> Training </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div class="p-4 flex justify-between">
        <h1 class="text-3xl font-semibold text-carbon">Training configuration</h1>
        <Button class="text-muted-foreground" variant="ghost" @click="setTab({ name: 'Model', path: '/' })">
          <LucideArrowLeft class="mr-2 w-4 h-4" />
          Back to canvas
        </Button>
      </div>
    </div>
    <TrainSetup />
  </div>
</template>
