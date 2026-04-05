export enum AlertType {
  Error = "Validation error",
  Warning = "Architecture warning",
}

export interface ValidationError {
  layerLabelFrom: string;
  layerLabelTo: string;
  expected: string;
  actual: string;
}

export interface ValidationWarning {
  layerLabel: string;
  text: string;
}

export interface ValidationAlert {
  type: AlertType;
  body: ValidationError | ValidationWarning;
}
