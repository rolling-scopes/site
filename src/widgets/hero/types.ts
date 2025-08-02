import { PAGE_NAMES } from '@/shared/constants';

export type PageName = { pageName: (typeof PAGE_NAMES)[keyof typeof PAGE_NAMES] };
