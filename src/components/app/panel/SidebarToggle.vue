<script lang="ts" setup>
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'
import { LucideChevronLeft } from 'lucide-vue-next';

defineProps<{
  isOpen: boolean
  setIsOpen?: () => void
}>()
</script>

<template>
<div class="invisible lg:visible absolute top-3 -right-4 z-20">
  <Button class="rounded-md w-8 h-8" variant="outline" size="icon" @click="setIsOpen">
    <LucideChevronLeft :class="cn('h-4 w-4 transition-transform ease-in-out duration-700', !isOpen ? 'rotate-180' : 'rotate-0',
    )" />
  </Button>
</div>
</template>
