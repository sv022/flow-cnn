export default {
  header: {
    navbar: {
      model: "Модель",
      datasets: "Датасеты",
      tutorials: "Информация",
      saved: "Сохраненные модели",
    },
    actions: {
      train: "Начать обучение",
      export: "Экспорт",
    },
    user: {
      saved: "Сохраненные модели",
      account: "Аккаунт",
      logout: "Выйти",
    },
  },
  sidebar: {
    general: {
      title: "Настройки отображения",
      scale: "Масштаб слоев",
      spacing: "Расстояние между слоями",
      labels: "Показывать названия слоев",
    },
    layout: {
      title: "Структура модели",
      layerLabel: "Название",
    },
  },
  flowchart: {
    context: {
      edit: "Редактировать",
      delete: "Удалить",
    },
    settings: {
      title: "Параметры",
      layer: "Слой",
      inputSize: "Размер входа",
      channels: "Число каналов",
      kernelSize: "Размер фильтра",
      numKernels: "Число фильтров",
      stride: "Смещение фильтра",
      padding: "Размер отступа",
      activation: "Функция активации",
      pool: "Размер окна",
      inputNodes: "Входные узлы",
      outputNodes: "Выходные узлы",
      learnableParams: "Обучаемые параметры",
      outputShape: "Выходная размерность",
      remove: "Удалить слой",
    },
    validation: {
      tooltip: "Нажмите, чтобы проверить модель",
      title: "Результат проверки модели",
      description: "Проверьте модель на наличие ошибок",
      noErrors: "Нет ошибок",
      alert: {
        error: {
          title: "Ошибка в модели",
          body: {
            dimensions: "Несоответствие размерностей: LABELFROM ACTUAL -> LABELTO. Ожидалось: EXPECTED",
          },
        },
        architectureWarning: {
          title: "Архитектурное предупреждение",
          body: {
            warningKernelTooBig: "Использование фильтров размером > 7 не рекомендуется. Используйте pooling слой или разделите на несколько слоев",
            warningDenseTooSmall: "Полносвязный слой (ACTUAL) слишком маленький. Полносвязный слой должен иметь больше узлов, чем следующий слой (EXPECTED)",
          },
        },
      },
      cancel: "Отмена",
      save: "Сохранить",
    },
  },
  datasets: {
    title: "Датасеты",
    description: "Изучайте подготовленные данные для тестирования ваших моделей",
    preview: "Просмотр датасета",
    trainSize: "Тренировочная выборка",
    testSize: "Тестовая выборка",
    imageSize: "Размер изображения",
    add: "Добавить в проект",
    added: "Добавлен в проект",
  },
  train: {
    title: "Запуск обучения",
    back: "Вернуться к модели",
    breadcrumb: {
      model: "Модель",
      train: "Обучение",
    },
    dataset: {
      title: "Выбор датасета",
      viewAll: "Показать все датасеты",
    },
    hyperparameters: {
      title: "Параметры обучения",
      epochs: "Число эпох",
      learningRate: "Скорость обучения",
      lossFunction: "Функция потерь",
    },
    summary: {
      title: "Сводка по модели",
      layers: "Число слоев",
      trainableParameters: "Обучаемые параметры",
      runtime: "Примерное время обучения",
      precision: "Точность",
      validating: "Проверка модели...",
      invalid: "Неправильная структура модели",
      ready: "Готово к запуску",
      start: "Начать обучение",
    },
  },
};
