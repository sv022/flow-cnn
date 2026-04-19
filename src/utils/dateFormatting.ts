export function formatUpdatedDate(date: Date): string {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec < 5) {
    return "обновлено только что";
  } else if (diffSec < 60) {
    return `обновлено ${diffSec} ${pluralize(diffSec, "секунду", "секунды", "секунд")} назад`;
  }

  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) {
    return `обновлено ${diffMin} ${pluralize(diffMin, "минуту", "минуты", "минут")} назад`;
  }

  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) {
    return `обновлено ${diffHour} ${pluralize(diffHour, "час", "часа", "часов")} назад`;
  }

  const diffDay = Math.floor(diffHour / 24);
  return `обновлено ${diffDay} ${pluralize(diffDay, "день", "дня", "дней")} назад`;
}

export function formatUpdatedDateEn(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime(); // разница в миллисекундах
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec < 5) {
    return "updated just now";
  } else if (diffSec < 60) {
    return `updated ${diffSec} ${diffSec === 1 ? "second" : "seconds"} ago`;
  }

  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) {
    return `updated ${diffMin} ${diffMin === 1 ? "minute" : "minutes"} ago`;
  }

  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) {
    return `updated ${diffHour} ${diffHour === 1 ? "hour" : "hours"} ago`;
  }

  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 30) {
    return `updated ${diffDay} ${diffDay === 1 ? "day" : "days"} ago`;
  }

  const diffMonth = Math.floor(diffDay / 30);
  if (diffMonth < 12) {
    return `updated ${diffMonth} ${diffMonth === 1 ? "month" : "months"} ago`;
  }

  const diffYear = Math.floor(diffMonth / 12);
  return `updated ${diffYear} ${diffYear === 1 ? "year" : "years"} ago`;
}

// Функция для правильного склонения слов в зависимости от числа
function pluralize(number: number, one: string, few: string, many: string): string {
  const n = Math.abs(number) % 100;
  const n1 = n % 10;
  if (n > 10 && n < 20) return many;
  if (n1 > 1 && n1 < 5) return few;
  if (n1 === 1) return one;
  return many;
}
