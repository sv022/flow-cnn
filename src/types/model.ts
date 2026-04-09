import type { Dataset } from "./dataset";
import type { Layer } from "./layers";

export interface TrainRun {
  id: string;
  dataset: Dataset;
  epochs: number;
  accuracy: number;
  accuracyHistory: number[];
  at: Date;
}

export interface TestRun {
  id: string;
  dataset: Dataset;
  accuracy: number;
  testTargets: number[];
  testGuesses: number[];
  at: Date;
}

export interface Model {
  id: string;
  name: string;
  description?: string;
  layers: Layer[];
  isTrained: boolean;
  trainRuns?: TrainRun[];
  testRuns?: TestRun[];
  updatedAt?: Date;
}
