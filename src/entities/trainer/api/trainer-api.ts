import { ApiCoursesIds } from '@/entities/course/@x/trainer';
import { TrainersResponse } from '@/entities/trainer/types';
import { API_CONTENT_TYPE_DICTIONARY, API_MAX_INCLUDE_DEPTH } from '@/shared/constants';
import { ApiResourceLocale, ApiServices } from '@/shared/types/';

export class TrainerApi {
  constructor(private readonly services: ApiServices) {}

  public queryTrainers(courseId: ApiCoursesIds, locale: ApiResourceLocale = 'en-US') {
    return this.services.rest.get<TrainersResponse>(`/entries`, {
      params: {
        content_type: API_CONTENT_TYPE_DICTIONARY.TRAINER,
        links_to_entry: courseId,
        include: API_MAX_INCLUDE_DEPTH,
        locale,
      },
    });
  }
}
