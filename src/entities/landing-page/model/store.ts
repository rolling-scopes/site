import { LandingPageResponse } from '@/entities/landing-page/types';
import { api } from '@/shared/api/api';
import { prepareContentfulResponse } from '@/shared/helpers/prepare-contentful-response';
import { transformPageSections } from '@/shared/helpers/transform-page-sections';
import { ApiResourceLocale } from '@/shared/types';

class LandingPageStore {
  public loadLandingPage = async (slug: string, locale: ApiResourceLocale = 'en-US') => {
    const res = await api.landingPage.queryPage(slug, locale);

    if (res.isSuccess) {
      const preparedData = prepareContentfulResponse<LandingPageResponse['items']>(res.result);

      const { title = '', sections: pageSections } = preparedData.at(0)?.fields ?? {};
      const sections = transformPageSections(pageSections);

      return {
        title,
        sections,
      };
    }

    throw new Error('Something went wrong fetching landing page!');
  };
}

export const landingPageStore = new LandingPageStore();
