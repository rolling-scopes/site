export function hasDayInDate(date: string) {
  const dateWithoutDay = date.split(',')[0];

  return /\d/.test(dateWithoutDay);
}
