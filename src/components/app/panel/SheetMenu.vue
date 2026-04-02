<script setup lang="ts">
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { RouterLink } from 'vue-router';
import { LucideMenu } from 'lucide-vue-next';
import FlowCnnLogo from './FlowCnnLogo.vue';

</script>

<template>
<Sheet>
  <SheetTrigger class="lg:hidden" as-child>
    <Button class-name="h-8" variant="outline" size="icon">
      <LucideMenu class="h-4 w-4" />
    </Button>
  </SheetTrigger>
  <SheetContent class="sm:w-72 px-3 h-full flex flex-col" side="left">
    <SheetHeader>
      <Button class="flex justify-center items-center pb-2 pt-1" variant="link" as-child>
        <RouterLink to="/">
          <FlowCnnLogo class="mr-2" />
          <h1 class="font-bold text-lg">
            Brand
          </h1>
        </RouterLink>
      </Button>
    </SheetHeader>
  </SheetContent>
</Sheet>
</template>

<style scoped></style>
