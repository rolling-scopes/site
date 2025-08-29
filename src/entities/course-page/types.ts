import { ApiResourceLocale, TypeHomePageSkeleton } from '@/shared/types';
import type { EntryCollection } from 'contentful';

export type CoursePageResponse = EntryCollection<
  TypeHomePageSkeleton,
  'WITHOUT_UNRESOLVABLE_LINKS',
  ApiResourceLocale
>;
