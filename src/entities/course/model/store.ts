import { syncApiCoursesSchedule } from '@/entities/course/helpers/sync-api-courses-schedule';
import { transformCoursePages } from '@/entities/course/helpers/transform-course-pages';
import { transformCourseSections } from '@/entities/course/helpers/transform-course-sections';
import { transformCourses } from '@/entities/course/helpers/transform-courses';
import { ApiCoursesIds, CoursePageResponse } from '@/entities/course/types';
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

  public async loadCourse(id: ApiCoursesIds) {
    // TODO: seems to be not efficient to fetch schedule every time. Maybe cache?

    const [courseRes, courseSchedule] = await Promise.all([
      api.course.queryCourse(id),
      this.loadCoursesSchedule(),
    ]);

    if (courseRes.isSuccess) {
      const transformedCourseData = transformCourses(courseRes.result);
      const course = syncApiCoursesSchedule(courseSchedule, transformedCourseData).at(0);

      if (!course) {
        throw new Error('Course not found!');
      }

      return course;
    }

    throw new Error('Something went wrong fetching course!');
  }

  public loadCoursesSchedule = async () => {
    const res = await api.course.queryCoursesSchedule();

    if (res.isSuccess) {
      return res.result;
    }

    throw new Error('Something went wrong fetching courses schedule!');
  };

  public loadCoursePage = async (slug: string) => {
    const res = await api.course.queryCoursePage(slug);

    if (res.isSuccess) {
      const preparedData = prepareContentfulResponse<CoursePageResponse['items']>(res.result);

      const { title = '', sections: coursePageSections, course } = preparedData.at(0)?.fields ?? {};
      const courseId = course?.sys?.id;
      const sections = transformCourseSections(coursePageSections);

      if (!courseId) {
        throw new Error('Course id is not defined.');
      }

      return {
        courseId,
        courseName: title,
        sections,
      };
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
