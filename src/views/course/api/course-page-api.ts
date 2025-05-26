import { CoursePageResponse } from '@/entities/course/types';
import {
  API_CONTENT_TYPE_DICTIONARY,
  API_MAX_INCLUDE_DEPTH,
  API_OMIT_LINKED_ITEMS_INCLUDE_DEPTH,
} from '@/shared/constants';
import { ApiResourceLocale, ApiServices } from '@/shared/types';

export class CoursePageApi {
  constructor(private readonly services: ApiServices) {}

  public queryCoursePage(slug: string, locale: ApiResourceLocale = 'en-US') {
    return this.services.rest.get<CoursePageResponse>('/entries', {
      params: {
        'content_type': API_CONTENT_TYPE_DICTIONARY.COURSE_PAGE,
        'include': API_MAX_INCLUDE_DEPTH,
        'fields.slug': slug,
        locale,
      },
    });
  }

  public queryCoursePages() {
    return this.services.rest.get<CoursePageResponse>('/entries', {
      params: {
        content_type: API_CONTENT_TYPE_DICTIONARY.COURSE_PAGE,
        include: API_OMIT_LINKED_ITEMS_INCLUDE_DEPTH,
      },
    });
  }
}
