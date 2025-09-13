import { LandingPageResponse } from '@/entities/landing-page/types';
import { preparePageMetadata } from '@/entities/page/helpers/transform-page';
import { PageType } from '@/entities/page/types';
import { api } from '@/shared/api/api';
import { prepareContentfulResponse } from '@/shared/helpers/prepare-contentful-response';
import { transformPageSections } from '@/shared/helpers/transform-page-sections';
import { ApiResourceLocale } from '@/shared/types';

class PageStore {
  public loadPages = async (type: PageType, locale: ApiResourceLocale = 'en-US') => {
    const res = await api.page.queryPage({
      type,
      locale,
    });

    if (res.isSuccess) {
      return preparePageMetadata(res.result);
    }

    throw new Error('Something went wrong fetching pages!');
  };

  public loadPage = async (type: PageType, slug?: string, locale: ApiResourceLocale = 'en-US') => {
    const res = await api.page.queryPage({
      type,
      slug,
      locale,
    });

    if (res.isSuccess) {
      const preparedData = prepareContentfulResponse<LandingPageResponse['items']>(res.result);

      const {
        title = '',
        seoDescription = '',
        seoKeywords = '',
        sections: pageSections,
      } = preparedData.at(0)?.fields ?? {};
      const sections = transformPageSections(pageSections);

      return {
        title,
        sections,
        seoDescription,
        seoKeywords,
      };
    }

    throw new Error('Something went wrong fetching page!');
  };
}

export const pageStore = new PageStore();
