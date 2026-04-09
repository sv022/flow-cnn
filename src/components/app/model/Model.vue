<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { Model } from "@/types/model";
import ActiveTraining from "./ActiveTraining.vue";
import ModelActions from "./ModelActions.vue";
import ParamCard from "./ParamCard.vue";
import RunsTable from "./RunsTable.vue";
import { Spinner } from "@/components/ui/spinner";

const props = defineProps<{
  model: Model;
}>();
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="flex max-w-1/3 space-x-4">
      <ParamCard :value="6">
        {{ $t("model.params.layers") }}
      </ParamCard>
      <ParamCard :value="231512">
        {{ $t("model.params.trainableParameters") }}
      </ParamCard>
      <ParamCard :value="0.81">
        {{ $t("model.params.accuracy") }}
      </ParamCard>
    </div>
    <Suspense>
      <template #fallback>
        <div class="flex items-center justify-center h-32">
          <Spinner />
        </div>
      </template>
      <ActiveTraining :id="props.model.id" />
    </Suspense>
    <ModelActions />
    <RunsTable />
  </div>
</template>
