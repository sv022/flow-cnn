<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Spinner } from "@/components/ui/spinner";
import { Item, ItemContent, ItemMedia } from "@/components/ui/item";
import { useModelStore } from "@/stores/modelStore";
import ValidateContent from "./ValidateContent.vue";
import { LucideShieldCheck } from "lucide-vue-next";
import { Separator } from "@/components/ui/separator";
import NoErrorsFound from "./NoErrorsFound.vue";

const modelStore = useModelStore();
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <slot />
          </TooltipTrigger>
          <TooltipContent side="top" class="bg-transparent border border-mint-700 text-mint-700">
            <p>Validate model</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <Item class="border-0" variant="outline">
          <ItemMedia class="h-12 w-12 bg-mint-200" variant="icon">
            <LucideShieldCheck class="size-6 stroke-mint-700" />
          </ItemMedia>
          <ItemContent>
            <DialogTitle>Model Validation Result</DialogTitle>
            <DialogDescription>Check for errors in the model</DialogDescription>
          </ItemContent>
        </Item>
      </DialogHeader>
      <Separator />
      <div class="flex items-center justify-center">
        <Spinner v-if="modelStore.validationPending" />
        <NoErrorsFound v-else-if="modelStore.validationAlerts.length === 0" />
        <ValidateContent v-else />
      </div>
      <Separator />
      <DialogFooter>
        <DialogClose as-child>
          <Button variant="outline"> Cancel </Button>
        </DialogClose>
        <Button class="bg-mint-700 hover:bg-mint-500" type="submit" :disabled="modelStore.validationPending || modelStore.validationAlerts.length === 0"> Save changes </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
