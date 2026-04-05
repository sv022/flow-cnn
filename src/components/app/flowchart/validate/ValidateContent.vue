<script setup lang="ts">
import { useModelStore } from "@/stores/modelStore";
import ValidateAlert from "./ValidateAlert.vue";

const modelStore = useModelStore();
</script>

<template>
  <div class="w-full space-y-2 overflow-y-scroll md:max-h-80 lg:max-h-128">
    <ValidateAlert v-for="alert in modelStore.validationAlerts" :key="alert.body.toString()" :alert="alert" />
  </div>
</template>
