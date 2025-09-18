import { CoursesResponse, CoursesScheduleResponse } from '@/entities/course/types';
import { API_CONTENT_TYPE_DICTIONARY, API_MAX_INCLUDE_DEPTH } from '@/shared/constants';
import { ApiServices } from '@/shared/types';

export class CourseApi {
  constructor(private readonly services: ApiServices) {}

  public queryCourses(params?: Record<string, unknown>) {
    return this.services.rest.get<CoursesResponse>('/entries', {
      params: {
        content_type: API_CONTENT_TYPE_DICTIONARY.COURSE,
        include: API_MAX_INCLUDE_DEPTH,
        order: 'fields.order',
        ...params,
      },
    });
  }

  public queryCourseById = (id: string) => {
    return this.queryCourses({ 'sys.id': id });
  };

  public queryMentorshipCourses = () => {
    return this.queryCourses({ 'fields.hasMentorship': true });
  };

  public queryCoursesSchedule() {
    return this.services.rest.get<CoursesScheduleResponse>('/app/courses.json');
  }
}
