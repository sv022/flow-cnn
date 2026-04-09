<script setup lang="ts">
const props = defineProps<{
  value: number;
}>();
</script>

<template>
  <div class="border-l border-mint-700 shadow flex-1/3 text-nowrap p-4 rounded-md text-charcoal">
    <p class="text-sm">
      <slot />
    </p>
    <p class="text-2xl font-semibold">{{ props.value }}</p>
  </div>
</template>
