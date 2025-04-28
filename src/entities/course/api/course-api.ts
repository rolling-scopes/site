import { ApiCoursesResponse } from '@/entities/course/types';
import { ApiServices } from '@/shared/types';

export class CourseApi {
  constructor(private readonly services: ApiServices) {}

  public queryCourses() {
    return this.services.rest.get<ApiCoursesResponse[]>('/app/courses.json');
  }
}
