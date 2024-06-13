import { Course } from '@/app/types';

function isCourse(obj: object): obj is Course {
  return 'startDate' in obj && (obj as Course).startDate != null;
}

export function definePrevNext(coursesData: object[]): {
  prevCourse: Course | undefined;
  nextCourse: Course | undefined;
} {
  const dateNow = Date.now();
  let prevCourse: Course | undefined;
  let nextCourse: Course | undefined;

  coursesData.forEach((obj: object) => {
    if (isCourse(obj)) {
      const startDate = Date.parse(obj.startDate);
      const isPast = startDate <= dateNow;

      if (
        (!prevCourse && isPast)
        || (isPast && Date.parse((prevCourse as Course).startDate) < startDate)
      ) {
        prevCourse = obj;
      }
      if (
        (!nextCourse && !isPast)
        || (!isPast && Date.parse((nextCourse as Course).startDate) > startDate)
      ) {
        nextCourse = obj;
      }
    }
  });
  return { prevCourse, nextCourse };
}
