import { syncApiCoursesSchedule } from '@/entities/course/helpers/sync-api-courses-schedule';
import { transformCourses } from '@/entities/course/helpers/transform-courses';
import { api } from '@/shared/api/api';

class CourseStore {
  public async loadCourses() {
    const res = await api.course.queryCourses();

    if (res.isSuccess) {
      const transformedCoursesData = transformCourses(res.result);
      const courseSchedule = await this.loadCoursesSchedule();

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
}

export const courseStore = new CourseStore();
