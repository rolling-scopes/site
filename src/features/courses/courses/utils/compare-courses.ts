import { Course } from "@/app/types";

export function compareNumbers(courseA: Course, courseB: Course, nearestCourseStartDate: number) {
  const dateA = Date.parse(courseA.startDate);
  const dateB = Date.parse(courseB.startDate);

  if (dateA < nearestCourseStartDate && dateB >= nearestCourseStartDate) {
    return 1
  }
  if (dateB < nearestCourseStartDate && dateA >= nearestCourseStartDate) {
    return -1
  }
  return dateA - dateB;
}
