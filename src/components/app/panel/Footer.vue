<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="z-20 w-full bg-background/95 shadow backdrop-blur supports-backdrop-filter:bg-background/60">
    <div class="mx-4 md:mx-8 flex h-14 items-center">
      <p class="text-xs md:text-sm leading-loose text-muted-foreground text-left">
        View source code on

        <RouterLink to="https://github.com/sv022/flow-cnn" target="_blank" rel="noopener noreferrer" class="font-medium underline underline-offset-4"> GitHub </RouterLink>
        .
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
