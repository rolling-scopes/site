import { PAGE_TYPE } from '@/entities/page/constants';
import { ApiResourceLocale } from '@/shared/types';
import { TypePageSkeleton } from '@/shared/types/contentful';
import { Section } from '@/shared/types/types';
import type { EntryCollection } from 'contentful';

export type PageResponse = EntryCollection<
  TypePageSkeleton,
  'WITHOUT_UNRESOLVABLE_LINKS',
  ApiResourceLocale
>;

export type PageType = (typeof PAGE_TYPE)[keyof typeof PAGE_TYPE];

export type NonCoursePageData = {
  title: string;
  sections: Section[];
  seoDescription: string;
  seoKeywords: string;
  seoOgImageTitle: string;
  seoOgImageDescription: string;
};

export type CoursePageData = NonCoursePageData & {
  courseId: string;
  courseUrl: string;
};

export type PageData = CoursePageData | NonCoursePageData;

export type PageProps = {
  params: Promise<{
    slug: string;
    lang: string;
  }>;
};

export type PagePropsOg = {
  params: Promise<Pick<Awaited<PageProps['params']>, 'lang'>>;
};

export type PagePropsDocs = {
  params: Promise<Pick<Awaited<PageProps['params']>, 'lang'> & {
    slug: string[];
  }>;
};
