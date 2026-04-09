<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

const runs = [
  {
    id: "ba55d1a4-a2c4-5a05-a587-8d21dbe4874e",
    date: "09.04.2026, 22:56",
    type: "train",
    epochs: 10,
    accuracy: 0.83,
    status: "inProgress",
  },
];

function getTypeBadgeClass(type: string) {
  switch (type) {
    case "train":
      return "bg-taupe-700/10 hover:bg-taupe-700/20 text-taupe-700";
    case "test":
      return "bg-mint-700/10 hover:bg-mint-700/20 text-mint-700";
  }
}

function getStatusBadgeClass(status: string) {
  switch (status) {
    case "inProgress":
      return "bg-warning/10 hover:bg-warning/20 text-warning";
    case "completed":
      return "bg-positive/10 hover:positive/20 text-positive";
  }
}
</script>
<template>
  <div class="p-4">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead class="w-64"> {{ $t("model.runs.head.id") }}</TableHead>
          <TableHead class="w-64">{{ $t("model.runs.head.date") }}</TableHead>
          <TableHead>{{ $t("model.runs.head.type") }}</TableHead>
          <TableHead>{{ $t("model.runs.head.epochs") }}</TableHead>
          <TableHead>{{ $t("model.runs.head.accuracy") }}</TableHead>
          <TableHead class="text-right"> {{ $t("model.runs.head.status") }} </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="run in runs" :key="run.id">
          <TableCell class="font-medium">
            {{ run.id }}
          </TableCell>
          <TableCell>{{ run.date }}</TableCell>
          <TableCell>
            <Badge :class="cn(getTypeBadgeClass(run.type))">{{ $t(`model.runs.type.${run.type}`) }}</Badge>
          </TableCell>
          <TableCell>{{ run.epochs }}</TableCell>
          <TableCell>
            {{ run.accuracy }}
          </TableCell>
          <TableCell class="text-right">
            <Badge :class="cn(getStatusBadgeClass(run.status))">{{ $t(`model.runs.status.${run.status}`) }}</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</template>
