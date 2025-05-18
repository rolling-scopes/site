import { CoursePageResponse } from '@/entities/course/types';

type CoursePage = {
  title: string;
};

export function transformCoursePages(coursesResponse: CoursePageResponse): CoursePage[] {
  return coursesResponse.items.map((coursePage) => ({ title: coursePage.fields.title }));
}
