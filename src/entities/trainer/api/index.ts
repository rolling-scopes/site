import { ApiCoursesIds } from '@/entities/course/types';
import { TrainersResponse } from '@/entities/trainer/types';
import { ApiServices, Locale } from '@/shared/types';

export class TrainerApi {
  constructor(private readonly services: ApiServices) {}

  public queryTrainers(courseId: ApiCoursesIds, locale: Locale = 'en-US') {
    return this.services.rest.get<TrainersResponse>(`/entries`, {
      params: {
        content_type: 'contributor',
        links_to_entry: courseId,
        include: 10,
        locale,
      },
    });
  }
}
