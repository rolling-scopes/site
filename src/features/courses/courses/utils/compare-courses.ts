import { Course } from "@/app/types";

const dateNow = Date.now();

export function compareNumbers(courseA: Course, courseB: Course) {
  const dateA = Date.parse(courseA.startDate);
  const dateB = Date.parse(courseB.startDate);
  if (dateA < dateNow && dateB > dateNow) {
    return 1
  }
  if (dateB < dateNow && dateA > dateNow) {
    return -1
  }
  return dateA - dateB;
}
