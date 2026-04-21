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
      export: "Сохранить",
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
    empty: {
      title: "Нет слоев",
      description: "Добавьте слои, чтобы построить модель",
      action: "Добавить слой",
    },
    dropdown: {
      title: "Выберите слой",
      conv: "Сверточный",
      pool: "Пуллинг",
      dense: "Полносвязный",
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
  save: {
    title: "Сохранить модель",
    description: "Сохраните текущую модель с помощью одного из доступных форматов",
    labelFormat: "Формат сохранения",
    options: {
      save: "Сохранить модель",
      json: "Экспорт в JSON",
    },
    labelName: "Название модели",
    nameValidation: {
      tooShort: "Название должно сождержать не менее 3 символов",
      occupied: "Модель с таким названием уже существует",
    },
    actions: {
      cancel: "Отмена",
      save: "Сохранить",
    },
  },
  saved: {
    title: "Сохраненные модели",
    description: "Загрузите ранее обученную модель или изучите предварительно обученные модели",
    prebuilt: "Готовые модели",
    saved: "Сохраненные модели",
    card: {
      badge: {
        saved: "Сохранено",
        trained: "Обучено",
      },
      delete: {
        title: "Удалить модель",
        description: "Вы уверены, что хотите удалить эту модель?",
        cancel: "Отмена",
        delete: "Удалить",
      },
      layers: "Слои",
      accuracy: "Точность",
    },
    empty: "Нет сохраненных моделей",
  },
  model: {
    breadcrumb: {
      saved: "Сохраненные модели",
    },
    title: "Информация о модели",
    back: "Вернуться к сохраненным моделям",
    params: {
      layers: "Слои",
      trainableParameters: "Обучаемые параметры",
      accuracy: "Точность",
    },
    activeTraining: {
      title: "Обучение модели",
      inProgress: "В процессе",
      epoch: "Эпоха",
      finished: "Завершено",
      accuracy: "Точность",
      epochs: "Эпохи",
    },
    actions: {
      title: "Действия",
      inference: "Тестирование",
      export: "Экспорт",
    },
    runs: {
      head: {
        id: "ID запуска",
        date: "Дата",
        type: "Тип запуска",
        epochs: "Эпохи",
        accuracy: "Точность",
        status: "Статус",
      },
      type: {
        train: "Обучение",
        test: "Тестирование",
      },
      status: {
        inProgress: "В процессе",
        finished: "Завершено",
      },
    },
  },
};
