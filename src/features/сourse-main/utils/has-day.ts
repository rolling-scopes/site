export function hasDayInDate(date: string) {
  const dateWithoutYear = date.split(',')[0];

  return /\d/.test(dateWithoutYear)
}
