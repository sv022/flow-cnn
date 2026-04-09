export default {
  header: {
    navbar: {
      model: "Model",
      datasets: "Datasets",
      tutorials: "Tutorials",
      saved: "Saved models",
    },
    actions: {
      train: "Train model",
      export: "Save model",
    },
    user: {
      saved: "Saved models",
      account: "Account",
      logout: "Sign out",
    },
  },
  sidebar: {
    general: {
      title: "Display settings",
      scale: "Feature scale",
      spacing: "Feature spacing",
      labels: "Show layer labels",
    },
    layout: {
      title: "Layout",
      layerLabel: "Label",
    },
  },
  flowchart: {
    context: {
      edit: "Edit parameters",
      delete: "Remove",
    },
    settings: {
      title: "Parameters",
      layer: "Layer",
      inputSize: "Input size",
      channels: "Channels",
      kernelSize: "Kernel size",
      numKernels: "Number of kernels",
      stride: "Stride",
      padding: "Padding",
      activation: "Activation",
      pool: "Pool size",
      inputNodes: "Input nodes",
      outputNodes: "Output nodes",
      learnableParams: "Learnable parameters",
      outputShape: "Output shape",
      remove: "Remove layer",
    },
    validation: {
      tooltip: "Click to validate model",
      title: "Model validation result",
      description: "Check for errors in the model",
      noErrors: "No errors found",
      alert: {
        error: {
          title: "Validation error",
          body: {
            dimensions: "Incompatible dimensions: LABELFROM ACTUAL -> LABELTO. Expected: EXPECTED",
          },
        },
        architectureWarning: {
          title: "Architecture warning",
          body: {
            warningKernelTooBig: "Kernel size > 7 is not recommended. Use Pooling layer instead or split into multiple layers",
            warningDenseTooSmall: "Layer nodes (ACTUAL) is too small for next input (EXPECTED)",
          },
        },
      },
      cancel: "Cancel",
      save: "Save changes",
    },
  },
  datasets: {
    title: "Datasets",
    description: "Explore curated data for testing your models",
    preview: "Dataset preview",
    trainSize: "Train size",
    testSize: "Test size",
    imageSize: "Image size",
    add: "Add to project",
    added: "Added to project",
  },
  train: {
    title: "Training configuration",
    back: "Back to canvas",
    breadcrumb: {
      model: "Model",
      train: "Training",
    },
    dataset: {
      title: "Dataset selection",
      viewAll: "View all datasets",
    },
    hyperparameters: {
      title: "Hyperparameters",
      epochs: "Epochs",
      learningRate: "Learning rate",
      lossFunction: "Loss function",
    },
    summary: {
      title: "Model summary",
      layers: "Layers",
      trainableParameters: "Trainable parameters",
      runtime: "Runtime estimate",
      precision: "Precision",
      validating: "Validating model...",
      invalid: "Invalid model",
      ready: "Ready to launch",
      start: "Train model",
    },
  },
  save: {
    title: "Save model",
    description: "Save your model in one of the available formats",
    labelFormat: "Save format",
    options: {
      save: "Save model",
      json: "Export to JSON",
    },
    labelName: "Model name",
    nameValidation: {
      tooShort: "Name must be at least 3 characters long",
      occupied: "Model with this name already exists",
    },
    actions: {
      cancel: "Cancel",
      save: "Save",
    },
  },
  saved: {
    title: "Saved models",
    description: "Load a previously trained model or explore pretrained models",
    prebuilt: "Prebuilt models",
    saved: "Saved models",
    card: {
      badge: {
        saved: "Saved",
        trained: "Trained",
      },
      delete: {
        title: "Delete model",
        description: "Are you sure you want to delete this model?",
        cancel: "Cancel",
        delete: "Delete",
      },
      layers: "Layers",
      accuracy: "Accuracy",
    },
    empty: "No saved models",
  },
};
