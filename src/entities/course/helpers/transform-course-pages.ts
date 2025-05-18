import { CoursePageResponse } from '@/entities/course/types';

type CoursePage = {
  slug: string;
};

export function transformCoursePages(coursesResponse: CoursePageResponse): CoursePage[] {
  return coursesResponse.items.map(({ fields: { slug } }) => ({ slug }));
}
