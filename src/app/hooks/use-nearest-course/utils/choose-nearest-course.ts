import { Course } from "@/app/types";
import { Day } from "../types";

type chooseNearestCourseProps = {
  prevCourse?: Course,
  nextCourse?: Course,
  bufferPeriod: Day,
}

export function chooseNearestCourse({prevCourse, nextCourse, bufferPeriod}: chooseNearestCourseProps): Course | undefined {
  const dateNow = Date.now();
  let course = !nextCourse ? prevCourse : nextCourse;
  if (nextCourse && prevCourse) {
    const bufferPeriodMs = bufferPeriod * 24 * 60 * 60 * 1000;
    const deltaNext = Date.parse(nextCourse.startDate) - dateNow;
    const deltaPrev = dateNow - Date.parse(prevCourse.startDate);
    if (deltaPrev < deltaNext && deltaPrev < bufferPeriodMs) {
      course = prevCourse;
    }
  }
  return course
}
