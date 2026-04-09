<script setup lang="ts">
import { Button } from "@/components/ui/button";
</script>

<template>
  <div class="flex space-x-4">
    <Button class="bg-mint-700/90 hover:bg-mint-700" @click="() => {}"> {{ $t("model.actions.inference") }} </Button>
    <Button variant="outline" @click="() => {}"> {{ $t("model.actions.export") }} </Button>
  </div>
</template>
