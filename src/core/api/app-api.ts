import { CourseApi } from '@/entities/course';
import { MentorApi } from '@/entities/mentor';
import { MerchApi } from '@/entities/merch';
import { PageApi } from '@/entities/page';
import { TrainerApi } from '@/entities/trainer';
import { ApiBaseClass } from '@/shared/api/api-base-class';
import { ApiServices } from '@/shared/types';

export class Api {
  public readonly services: ApiServices;

  public readonly trainer: TrainerApi;
  public readonly course: CourseApi;
  public readonly mentor: MentorApi;
  public readonly merch: MerchApi;
  public readonly page: PageApi;

  constructor(
    private readonly rsAppBaseURI: string,
    private readonly contentfulBaseURI: string,
    private readonly youtubeBaseURI: string,
  ) {
    this.services = {
      rsApp: new ApiBaseClass(this.rsAppBaseURI),
      contentful: new ApiBaseClass(this.contentfulBaseURI),
      youtube: new ApiBaseClass(this.youtubeBaseURI),
    };

    this.trainer = new TrainerApi(this.services);
    this.course = new CourseApi(this.services);
    this.mentor = new MentorApi(this.services);
    this.merch = new MerchApi(this.services);
    this.page = new PageApi(this.services);
  }
}
