import { CoursePageResponse } from '../types';
import { transformCoursePages } from '@/entities/course-page/helpers/transform-course-pages';
import { api } from '@/shared/api/api';
import { prepareContentfulResponse } from '@/shared/helpers/prepare-contentful-response';
import { transformPageSections } from '@/shared/helpers/transform-page-sections';
import { ApiResourceLocale } from '@/shared/types';

class CoursePageStore {
  public loadCoursePage = async (slug: string, locale: ApiResourceLocale = 'en-US') => {
    const res = await api.coursePage.queryCoursePage(slug, locale);

    if (res.isSuccess) {
      const preparedData = prepareContentfulResponse<CoursePageResponse['items']>(res.result);

      const {
        title = '',
        seoDescription = '',
        seoKeywords = '',
        sections: coursePageSections,
        course,
      } = preparedData.at(0)?.fields ?? {};
      const courseId = course?.sys?.id;
      const courseUrl = course?.fields.url || '';
      const sections = transformPageSections(coursePageSections);

      if (!courseId) {
        throw new Error('Course id is not defined.');
      }

      return {
        courseId,
        courseUrl,
        courseName: title,
        description: seoDescription,
        keywords: seoKeywords,
        sections,
      };
    }

    throw new Error('Something went wrong fetching course page!');
  };

  public loadCoursePages = async () => {
    const res = await api.coursePage.queryCoursePages();

    if (res.isSuccess) {
      return transformCoursePages(res.result);
    }

    throw new Error('Something went wrong fetching all course pages!');
  };

  public loadCoursePageTitle = async (slug: string, locale: ApiResourceLocale = 'en-US') => {
    const res = await api.coursePage.queryCoursePageTitle(slug, locale);

    if (res.isSuccess) {
      const preparedData = prepareContentfulResponse<CoursePageResponse['items']>(res.result);
      const title = preparedData.at(0)?.fields?.title;

      if (!title) {
        throw new Error('Course page title is not defined.');
      }

      return title;
    }

    throw new Error('Something went wrong fetching course page title!');
  };
}

export const coursePageStore = new CoursePageStore();
