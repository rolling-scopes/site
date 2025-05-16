import { syncApiCoursesSchedule } from '@/entities/course/helpers/sync-api-courses-schedule';
import { transformCourseSections } from '@/entities/course/helpers/transform-course-sections';
import { transformCourses } from '@/entities/course/helpers/transform-courses';
import { api } from '@/shared/api/api';

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

  public loadCoursePage = async () => {
    const res = await api.course.queryCoursePage();

    if (res.isSuccess) {
      return transformCourseSections(res.result);
    }

    throw new Error('Something went wrong fetching course page!');
  };
}

export const courseStore = new CourseStore();
