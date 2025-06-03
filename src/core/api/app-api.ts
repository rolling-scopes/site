import { CourseApi } from '@/entities/course/api/course-api';
import { MentorApi } from '@/entities/mentor/api/mentor-api';
import { TrainerApi } from '@/entities/trainer/api/trainer-api';
import { ApiBaseClass } from '@/shared/api/api-base-class';
import { ApiServices } from '@/shared/types';

export class Api {
  public readonly services: ApiServices;

  public readonly trainer: TrainerApi;
  public readonly course: CourseApi;
  public readonly mentor: MentorApi;

  constructor(
    private readonly baseURI: string,
    private readonly youtubeBaseURI: string,
  ) {
    this.services = {
      rest: new ApiBaseClass(this.baseURI),
      youtube: new ApiBaseClass(this.youtubeBaseURI),
    };

    this.trainer = new TrainerApi(this.services);
    this.course = new CourseApi(this.services);
    this.mentor = new MentorApi(this.services);
  }
}
