import { LANDING_PAGE_SLUG } from '@/entities/landing-page/constants';
import { ApiResourceLocale, TypeHomePageSkeleton } from '@/shared/types';
import type { EntryCollection } from 'contentful';

export type LandingPageResponse = EntryCollection<
  TypeHomePageSkeleton,
  'WITHOUT_UNRESOLVABLE_LINKS',
  ApiResourceLocale
>;

export type LandingPageSlug = (typeof LANDING_PAGE_SLUG)[keyof typeof LANDING_PAGE_SLUG];
