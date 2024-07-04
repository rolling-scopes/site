export const getCourseDate = (startDate: string) => {
  const fourteenDays = 14 * 24 * 60 * 60 * 1000;
  const isStale = Date.parse(startDate) < Date.now() - fourteenDays;

  return isStale ? 'TBD' : startDate;
};
