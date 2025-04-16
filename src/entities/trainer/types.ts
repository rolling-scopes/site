import { StaticImageData } from 'next/image';

import {
  ApiAsset,
  ApiMetadata,
  ApiResourceAsset,
  ApiResourceEntry,
  ApiResourceLinkAttribute,
  ApiResponse,
} from '@/shared/types';

export interface Trainer {
  name: string;
  role: string;
  bio: string;
  photo: StaticImageData;
}

type TrainerResponseItem = {
  metadata: ApiMetadata;
  sys: ApiResourceEntry;
  fields: {
    name: string;
    githubId: string;
    avatar: ApiResourceLinkAttribute<'Asset'>;
    jobTitle: string;
    description: string;
    courses: ApiResourceLinkAttribute<'Entry'>[];
  };
};

type TrainersResponseAsset = {
  metadata: ApiMetadata;
  sys: ApiResourceAsset;
  fields: ApiAsset;
};

type TrainersResponseIncludes = {
  Asset: TrainersResponseAsset[];
};

export type TrainersResponse = ApiResponse<TrainerResponseItem[], TrainersResponseIncludes>;
