import { PAGE_NAMES } from '@/shared/constants';

export type PageName = {
  pageName: Extract<
    (typeof PAGE_NAMES)[keyof typeof PAGE_NAMES],
    'mentorship' | 'community' | 'courses'
  >;
};
