import { CourseApi } from '@/entities/course/api/course-api';
import { TrainerApi } from '@/entities/trainer/api/trainer-api';
import { ApiBaseClass } from '@/shared/api/api-base-class';
import { ApiServices } from '@/shared/types';

export class Api {
  public readonly services: ApiServices;

  public readonly trainer: TrainerApi;
  public readonly course: CourseApi;

  constructor(private readonly baseURI: string) {
    this.services = { rest: new ApiBaseClass(this.baseURI) };

    this.trainer = new TrainerApi(this.services);
    this.course = new CourseApi(this.services);
  }
}
