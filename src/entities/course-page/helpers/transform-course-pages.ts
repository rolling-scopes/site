import { ApiCoursesIds } from '@/entities/course/types';
import { CoursePageResponse } from '@/entities/course-page/types';

type CoursePage = {
  slug: string;
  courseId: ApiCoursesIds;
};

export function transformCoursePages(coursesResponse: CoursePageResponse): CoursePage[] {
  return coursesResponse.items.map((courses) => {
    const {
      fields: { slug, course },
    } = courses;

    const courseId = course?.sys?.id;

    if (!courseId) {
      throw new Error('Course id is not defined.');
    }

    return {
      slug,
      courseId,
    };
  });
}
