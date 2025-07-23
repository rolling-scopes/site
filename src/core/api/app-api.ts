import { CourseApi } from '@/entities/course/api/course-api';
import { LandingPageApi } from '@/entities/landing-page/api/landing-page-api';
import { MentorApi } from '@/entities/mentor/api/mentor-api';
import { TrainerApi } from '@/entities/trainer/api/trainer-api';
import { ApiBaseClass } from '@/shared/api/api-base-class';
import { ApiServices } from '@/shared/types';
import { CoursePageApi } from '@/views/course/api/course-page-api';

export class Api {
  public readonly services: ApiServices;

  public readonly trainer: TrainerApi;
  public readonly course: CourseApi;
  public readonly mentor: MentorApi;
  public readonly coursePage: CoursePageApi;
  public readonly landingPage: LandingPageApi;

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
    this.coursePage = new CoursePageApi(this.services);
    this.landingPage = new LandingPageApi(this.services);
  }
}
