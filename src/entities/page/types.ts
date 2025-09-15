import { PAGE_TYPE } from '@/entities/page/constants';
import { ApiResourceLocale } from '@/shared/types';
import { TypePageSkeleton } from '@/shared/types/contentful';
import type { EntryCollection } from 'contentful';

export type PageResponse = EntryCollection<
  TypePageSkeleton,
  'WITHOUT_UNRESOLVABLE_LINKS',
  ApiResourceLocale
>;

export type PageType = (typeof PAGE_TYPE)[keyof typeof PAGE_TYPE];
