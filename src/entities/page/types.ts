import { PAGE_TYPE } from '@/entities/page/constants';
import { ApiResourceLocale, TypeHomePageSkeleton } from '@/shared/types';
import type { EntryCollection } from 'contentful';

export type PageResponse = EntryCollection<
  TypeHomePageSkeleton,
  'WITHOUT_UNRESOLVABLE_LINKS',
  ApiResourceLocale
>;

export type PageType = (typeof PAGE_TYPE)[keyof typeof PAGE_TYPE];
