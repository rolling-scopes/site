import { ApiCoursesIds } from '@/entities/course/types';
import { TrainersResponse } from '@/entities/trainer/types';
import { API_CONTENT_TYPE_DICTIONARY } from '@/shared/constants';
import { ApiServices, Locale } from '@/shared/types';

export class TrainerApi {
  constructor(private readonly services: ApiServices) {}

  public queryTrainers(courseId: ApiCoursesIds, locale: Locale = 'en-US') {
    return this.services.rest.get<TrainersResponse>(`/entries`, {
      params: {
        content_type: API_CONTENT_TYPE_DICTIONARY.TRAINER,
        links_to_entry: courseId,
        include: 10,
        locale,
      },
    });
  }
}
