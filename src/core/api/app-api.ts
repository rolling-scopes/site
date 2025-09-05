import { CourseApi } from '@/entities/course';
import { CoursePageApi } from '@/entities/course-page';
import { LandingPageApi } from '@/entities/landing-page';
import { MentorApi } from '@/entities/mentor';
import { MerchApi } from '@/entities/merch/api/merch-api';
import { TrainerApi } from '@/entities/trainer';
import { ApiBaseClass } from '@/shared/api/api-base-class';
import { ApiServices } from '@/shared/types';

export class Api {
  public readonly services: ApiServices;

  public readonly trainer: TrainerApi;
  public readonly course: CourseApi;
  public readonly mentor: MentorApi;
  public readonly merch: MerchApi;
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
    this.merch = new MerchApi(this.services);
    this.coursePage = new CoursePageApi(this.services);
    this.landingPage = new LandingPageApi(this.services);
  }
}
