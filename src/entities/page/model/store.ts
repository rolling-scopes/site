import { courseStore } from '@/entities/course';
import { PAGE_TYPE } from '@/entities/page/constants';
import { preparePageMetadata } from '@/entities/page/helpers/prepare-page-metadata';
import {
  CoursePageData,
  NonCoursePageData,
  PageData,
  PageResponse,
  PageType,
} from '@/entities/page/types';
import { api } from '@/shared/api/api';
import { prepareContentfulResponse } from '@/shared/helpers/prepare-contentful-response';
import { transformPageSections } from '@/shared/helpers/transform-page-sections';
import { ApiResourceLocale, PageResponseSections } from '@/shared/types/types';

class PageStore {
  public loadPagesMetadata = async (type: PageType, locale: ApiResourceLocale = 'en-US') => {
    const res = await api.page.queryPage({
      type,
      locale,
    });

    if (res.isSuccess) {
      return preparePageMetadata(res.result);
    }

    throw new Error('Something went wrong fetching pages!');
  };

  public async loadPage(
    type: Extract<PageType, 'course'>,
    locale?: ApiResourceLocale,
    slug?: string,
  ): Promise<CoursePageData>;
  public async loadPage(
    type: Exclude<PageType, 'course'>,
    locale?: ApiResourceLocale,
    slug?: string,
  ): Promise<NonCoursePageData>;
  public async loadPage(
    type: PageType,
    locale: ApiResourceLocale = 'en-US',
    slug?: string,
  ): Promise<PageData> {
    const res = await api.page.queryPage({
      type,
      slug,
      locale,
    });

    if (!res.isSuccess) {
      throw new Error('Something went wrong fetching page!');
    }

    const preparedData = prepareContentfulResponse<PageResponse['items']>(res.result);

    const {
      title = '',
      seoDescription = '',
      seoKeywords = '',
      seoOgImageTitle = '',
      seoOgImageDescription = '',
      sections: pageSections = [],
      course,
    } = preparedData.at(0)?.fields ?? {};

    const courseId = course?.sys?.id;
    const courseUrl = course?.fields.url || '';
    const currentCourse = courseId ? await courseStore.loadCourse(courseId) : undefined;

    const sections = transformPageSections(pageSections as PageResponseSections, currentCourse?.enroll);
    const pageData = {
      title,
      sections,
      seoDescription,
      seoKeywords,
      seoOgImageTitle,
      seoOgImageDescription,
    };

    if (type !== PAGE_TYPE.COURSE) {
      return pageData;
    }

    if (!courseId) {
      throw new Error('Course id is not defined.');
    }

    return {
      ...pageData,
      courseId,
      courseUrl,
    };
  }
}

export const pageStore = new PageStore();
