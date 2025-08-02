import { LandingPageResponse } from '@/entities/landing-page/types';
import { API_CONTENT_TYPE_DICTIONARY, API_MAX_INCLUDE_DEPTH } from '@/shared/constants';
import { ApiResourceLocale, ApiServices } from '@/shared/types';

export class LandingPageApi {
  constructor(private readonly services: ApiServices) {}

  public queryPage(slug: string, locale: ApiResourceLocale) {
    return this.services.rest.get<LandingPageResponse>('/entries', {
      params: {
        'content_type': API_CONTENT_TYPE_DICTIONARY.LANDING_PAGE,
        'include': API_MAX_INCLUDE_DEPTH,
        'fields.slug': slug,
        locale,
      },
    });
  }
}
