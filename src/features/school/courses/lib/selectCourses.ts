import dayjs from 'dayjs';
import { Course } from '@/app/types';

const now = dayjs();
const courseExpirationDate = now.subtract(3, 'week');
const MAX_COURSE_COUNT = 5;

export const selectCourses = (courses: Course[]) => {
  return courses
    ?.filter((course) => {
      const startDate = dayjs(course.startDate);
      return startDate.isAfter(courseExpirationDate);
    })
    .sort((a, b) => {
      const aDate = dayjs(a.startDate);
      const bDate = dayjs(b.startDate);
      return aDate.isBefore(bDate) ? -1 : 1;
    })
    .slice(0, Math.min(courses.length, MAX_COURSE_COUNT));
};
