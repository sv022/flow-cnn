<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { LucideSeparatorVertical } from "lucide-vue-next";
import { ref } from "vue";
import { Line } from "vue-chartjs";

const props = defineProps<{
  id: string;
}>();

const resp = await fetch(`https://raw.githubusercontent.com/sv022/MockDB/refs/heads/main/FlowCNN/status/${props.id}.json`);

const trainData = await resp.json();

const isFinished = ref<boolean>(trainData.status === "finished" ? true : false);

const chartOptions = {
  responsive: true,
};

const plotLabels = [];
for (let i = 1; i <= trainData.epoch; i++) {
  plotLabels.push(`Epoch ${i}`);
}

const data = {
  labels: plotLabels,
  datasets: [
    {
      label: "Loss",
      backgroundColor: "#f87979",
      data: trainData.lossHistory,
    },
    {
      label: "Accuracy",
      backgroundColor: "#6ff432",
      data: trainData.accuracyHistory,
    },
  ],
};

const loss = ref(trainData.loss);
const accuracy = ref(trainData.accuracy);
const progress = ref(Math.floor((trainData.epochProgress / trainData.epochTotal) * 100));
console.log(progress.value);

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
</script>

<template>
  <div class="shadow p-4 w-fit">
    <span class="flex w-full justify-between">
      <h2 class="font-semibold text-carbon">{{ $t("model.activeTraining.title") }}</h2>
      <span>
        <Badge class="bg-taupe-700/50 hover:bg-taupe-700"> {{ isFinished ? $t("model.activeTraining.finished") : $t("model.activeTraining.inProgress") }} </Badge>
      </span>
    </span>
    <div class="grow">
      <Line class="graph md:h-112.5 lg:h-128" id="active-training" :options="chartOptions" :data="data" />
    </div>
    <div class="flex items-center w-full bg-muted/50 rounded-xl p-2">
      <p class="mr-2">{{ ">>>" }}</p>
      <p class="text-sm text-muted-foreground">{{ $t("model.activeTraining.epoch") }} {{ trainData.epoch }} / {{ trainData.epochs }}</p>
      <LucideSeparatorVertical class="mx-2 text-muted-foreground" />
      <Progress class="w-1/4" :model-value="progress" />
      <p class="mx-2 text-muted-foreground">[{{ trainData.epochProgress }} / {{ trainData.epochTotal }}]</p>
      <span class="flex space-x-2 mx-2 text-muted-foreground">
        <p>loss: {{ loss }}</p>
        <p>accuracy: {{ accuracy }}</p>
      </span>
    </div>
  </div>
</template>
