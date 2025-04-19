import { StaticImageData } from 'next/image';

import { ApiResourceLocale, TypeContributorSkeleton } from '@/shared/types';
import type { EntryCollection } from 'contentful';

export interface Trainer {
  name: string;
  role: string;
  bio: string;
  photo: StaticImageData;
}

export type TrainersResponse = EntryCollection<
  TypeContributorSkeleton,
  'WITHOUT_UNRESOLVABLE_LINKS',
  ApiResourceLocale
>;
