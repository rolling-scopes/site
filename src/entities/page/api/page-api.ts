import { PageResponse, PageType } from '@/entities/page/types';
import { API_CONTENT_TYPE_DICTIONARY, API_MAX_INCLUDE_DEPTH } from '@/shared/constants';
import { ApiResourceLocale, ApiServices } from '@/shared/types';

type QueryPageParams = {
  type: PageType;
  slug?: string;
  locale?: ApiResourceLocale;
};

export class PageApi {
  constructor(private readonly services: ApiServices) {}

  public queryPage({ type, slug, locale }: QueryPageParams) {
    return this.services.contentful.get<PageResponse>('/entries', {
      params: {
        'content_type': API_CONTENT_TYPE_DICTIONARY.PAGE,
        'include': API_MAX_INCLUDE_DEPTH,
        'fields.type': type,
        ...(slug && { 'fields.slug': slug }),
        ...(locale && { locale }),
      },
    });
  }
}
