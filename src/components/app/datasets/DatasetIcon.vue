<script setup lang="ts">
import { computed } from "vue";
import * as icons from "lucide-vue-next";

const props = defineProps<{ name: string }>();

const icon = computed(() => icons[props.name as keyof typeof icons] ?? icons.HelpCircle);
</script>

<template>
  <component :is="icon" />
</template>
