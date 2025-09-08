import { syncApiCoursesSchedule } from '@/entities/course/helpers/sync-api-courses-schedule';
import { transformCourses } from '@/entities/course/helpers/transform-courses';
import { ApiCoursesIds } from '@/entities/course/types';
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
}

export const courseStore = new CourseStore();
