import { Course } from '@/app/types';

const threeWeeksInMs = 1814400000;
const expirationDate = new Date(new Date().getTime() - threeWeeksInMs).getTime();

export const formatCoursesData = (courses: Course[]) => {
  return courses
    ?.filter((course) => {
      const startDate = new Date(course.startDate).getTime();
      return startDate > expirationDate;
    })
    .sort((a, b) => {
      const aDate = new Date(a.startDate).getTime();
      const bDate = new Date(b.startDate).getTime();
      return aDate - bDate;
    })
    .filter((_, i) => i < 5);
};
