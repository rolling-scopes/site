import { syncApiCoursesSchedule } from '@/entities/course/helpers/sync-api-courses-schedule';
import { transformCoursePages } from '@/entities/course/helpers/transform-course-pages';
import { transformCourseSections } from '@/entities/course/helpers/transform-course-sections';
import { transformCourses } from '@/entities/course/helpers/transform-courses';
import { CoursePageResponse } from '@/entities/course/types';
import { api } from '@/shared/api/api';
import { prepareContentfulResponse } from '@/shared/helpers/prepare-contentful-response';

class CourseStore {
  public async loadCourses() {
    const [courses, courseSchedule] = await Promise.all([
      api.course.queryCourses(),
      this.loadCoursesSchedule(),
    ]);

    if (courses.isSuccess) {
      const transformedCoursesData = transformCourses(courses.result);

      return syncApiCoursesSchedule(courseSchedule, transformedCoursesData);
    }

    throw new Error('Something went wrong fetching courses!');
  }

  public loadCoursesSchedule = async () => {
    const res = await api.course.queryCoursesSchedule();

    if (res.isSuccess) {
      return res.result;
    }

    throw new Error('Something went wrong fetching courses schedule!');
  };

  public loadCoursePage = async (courseName: string) => {
    const res = await api.course.queryCoursePage(courseName);

    if (res.isSuccess) {
      const preparedData = prepareContentfulResponse<CoursePageResponse['items']>(res.result);

      return transformCourseSections(preparedData);
    }

    throw new Error('Something went wrong fetching course page!');
  };

  public loadCoursePages = async () => {
    const res = await api.course.queryCoursePages();

    if (res.isSuccess) {
      return transformCoursePages(res.result);
    }

    throw new Error('Something went wrong fetching all course pages!');
  };
}

export const courseStore = new CourseStore();
