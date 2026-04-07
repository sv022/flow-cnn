export enum AlertType {
  Error = "error",
  Warning = "architectureWarning",
}

export enum ErrorType {
  dimensions = "dimensions",
}
export enum WarningType {
  KernelTooBig = "warningKernelTooBig",
  DenseTooSmall = "warningDenseTooSmall",
}

export interface ValidationError {
  type: ErrorType;
  layerLabelFrom: string;
  layerLabelTo: string;
  expected: string;
  actual: string;
}

export interface ValidationWarning {
  layerLabel: string;
  type: WarningType;
  actual?: string;
  expected?: string;
}

export interface ValidationAlert {
  type: AlertType;
  body: ValidationError | ValidationWarning;
}
