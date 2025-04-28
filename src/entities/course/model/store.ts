import { syncWithApiData } from '@/entities/course/helpers/sync-with-api-data';
import { api } from '@/shared/api/api';

class CourseStore {
  public loadCourses = async () => {
    const res = await api.course.queryCourses();

    if (res.isSuccess) {
      return syncWithApiData(res.result);
    }

    throw new Error('Something went wrong fetching courses!');
  };
}

export const courseStore = new CourseStore();
