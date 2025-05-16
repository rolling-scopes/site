import {
  CoursePageResponse,
  CoursesResponse,
  CoursesScheduleResponse,
} from '@/entities/course/types';
import { API_CONTENT_TYPE_DICTIONARY, API_MAX_INCLUDE_DEPTH } from '@/shared/constants';
import { ApiServices } from '@/shared/types';

export class CourseApi {
  constructor(private readonly services: ApiServices) {}

  public queryCourses() {
    return this.services.rest.get<CoursesResponse>('/entries', {
      params: {
        content_type: API_CONTENT_TYPE_DICTIONARY.COURSE,
        include: API_MAX_INCLUDE_DEPTH,
        order: 'fields.order',
      },
    });
  }

  public queryCoursesSchedule() {
    return this.services.rest.get<CoursesScheduleResponse>('/app/courses.json');
  }

  public queryCoursePage() {
    return this.services.rest.get<CoursePageResponse>('/entries', {
      params: {
        content_type: API_CONTENT_TYPE_DICTIONARY.COURSE_PAGE,
        include: API_MAX_INCLUDE_DEPTH,
      },
    });
  }
}
