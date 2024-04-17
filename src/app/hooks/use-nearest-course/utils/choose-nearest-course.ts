import { Course } from "@/app/types";
import { Day } from "../types";

type chooseNearestCourseProps = {
  prevCourse?: Course,
  nextCourse?: Course,
  bufferPeriod: Day,
}

export function chooseNearestCourse({prevCourse, nextCourse, bufferPeriod}: chooseNearestCourseProps): Course | undefined {
  const dateNow = Date.now();
  const bufferPeriodMs = bufferPeriod * 24 * 60 * 60 * 1000;
  let course = !nextCourse ? prevCourse : nextCourse;
  let deltaNext: number;
  let deltaPrev: number;

  if (nextCourse && prevCourse) {
    deltaNext = Date.parse(nextCourse.startDate) - dateNow;
    deltaPrev = dateNow - Date.parse(prevCourse.startDate);
    if (deltaPrev < deltaNext && deltaPrev < bufferPeriodMs) {
      course = prevCourse;
    }
  }

  return course
}
