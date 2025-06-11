import { Section } from '../types';
import { CoursePageResponse } from '@/entities/course/types';
import { api } from '@/shared/api/api';
import { prepareContentfulResponse } from '@/shared/helpers/prepare-contentful-response';
import { ApiResourceLocale } from '@/shared/types';
import { transformCoursePages } from '@/views/course/helpers/transform-course-pages';
import { transformCourseSections } from '@/views/course/helpers/transform-course-sections';

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

      if (!courseId) {
        throw new Error('Course id is not defined.');
      }

      let sections: Section[] = [];

      if (coursePageSections && coursePageSections.length > 0) {
        sections = transformCourseSections(coursePageSections);
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
