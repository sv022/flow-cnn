<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ size: number }>();

const denseSizePx = computed(() => `${Math.round(Math.sqrt(props.size)) * 50}px`);
</script>

<template>
  <div class="border-[#505050] bg-[#DDDDDD] border-2 w-12.5 rounded-xs -translate-y-1/2" :style="{ height: denseSizePx }"></div>
</template>
