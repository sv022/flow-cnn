<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Spinner } from "@/components/ui/spinner";
import { useModelStore } from "@/stores/modelStore";
import { useSavedStore } from "@/stores/savedStore";
import type { Model } from "@/types/model";
import { useSharedTabs } from "@/utils/tabs";
import { LucideCheckCheck, LucidePlay, LucideTrash } from "lucide-vue-next";
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

const props = defineProps<{
  model: Model;
  pretrained: boolean;
  updatedAt: string;
}>();

const modelStore = useModelStore();
const savedStore = useSavedStore();
const { tm } = useI18n();
const { setTab } = useSharedTabs();
const loadingPending = ref(false);

const badgeText = computed(() => {
  return props.model.isTrained ? `${tm("saved.card.badge.trained")}` : `${tm("saved.card.badge.saved")}`;
});

const accuracy = computed(() => {
  return props.model.isTrained ? `${props.model.trainRuns?.at(-1)?.accuracy?.toFixed(2)}%` : "-";
});

function selectModel() {
  loadingPending.value = true;
  modelStore.loadModel(props.model.name, props.model.layers);
  setTimeout(() => {
    setTab({ name: "model", path: "/" });
    loadingPending.value = false;
  }, 500);
}

function deleteModel() {
  savedStore.deleteModel(props.model);
  modelStore.loadModel("", []);
  setTimeout(() => {
    setTab({ name: "model", path: "/" });
  }, 500);
}
</script>

<template>
  <div class="flex flex-col border-l-4 border-mint-700/70 rounded-xl shadow cursor-pointer w-70">
    <div class="flex p-4 items-center justify-between">
      <Badge class="bg-mint-700/50 hover:bg-mint-700"> {{ badgeText }} </Badge>
      <div class="flex space-x-2">
        <Spinner class="h-4 w-4" v-if="loadingPending" />
        <LucideCheckCheck class="h-4 w-4 stroke-mint-700" v-else-if="modelStore.name === props.model.name && !props.pretrained" />
        <LucidePlay v-else @click.stop="selectModel" class="h-4 w-4 stroke-mint-700" />
        <AlertDialog v-if="!props.pretrained">
          <AlertDialogTrigger as-child>
            <LucideTrash @click.stop class="h-4 w-4 stroke-destructive-foreground" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{{ tm("saved.card.delete.title") }}</AlertDialogTitle>
              <AlertDialogDescription> {{ tm("saved.card.delete.description") }}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{{ tm("saved.card.delete.cancel") }}</AlertDialogCancel>
              <AlertDialogAction class="bg-destructive border border-destructive-foreground text-destructive-foreground hover:bg-destructive-foreground/20" @click="deleteModel">{{
                tm("saved.card.delete.delete")
              }}</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
    <Item>
      <ItemContent class="h-18">
        <ItemTitle class="font-semibold text-carbon text-xl h-12">{{ props.model.name }}</ItemTitle>
        <ItemDescription class="h-16 line-clamp-2"> {{ props.updatedAt }} </ItemDescription>
      </ItemContent>
    </Item>
    <div class="flex space-x-4 p-4 w-full">
      <div class="bg-mint-700/10 flex-1/2 p-2 rounded-lg">
        <p class="text-sm text-muted-foreground">{{ tm("saved.card.layers") }}</p>
        <p class="text-xl font-semibold text-muted-foreground">{{ props.model.layers.length }}</p>
      </div>
      <div class="bg-mint-700/10 flex-1/2 p-2 rounded-lg">
        <p class="text-sm text-muted-foreground">{{ tm("saved.card.accuracy") }}</p>
        <p class="text-xl font-semibold text-muted-foreground">{{ accuracy }}</p>
      </div>
    </div>
  </div>
</template>
