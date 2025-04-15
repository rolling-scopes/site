import { StaticImageData } from 'next/image';

import { Locale } from '@/shared/types';

export interface Trainer {
  name: string;
  role: string;
  bio: string;
  photo: StaticImageData;
}

export type TrainerResponseItem = {
  metadata: {
    tags: string[];
    concepts: string[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    publishedVersion: number;
    revision: number;
    contentType: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    locale: Locale;
  };
  fields: {
    name: string;
    githubId: string;
    avatar: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    jobTitle: string;
    description: string;
    courses: [
      {
        sys: {
          type: string;
          linkType: string;
          id: string;
        };
      },
      {
        sys: {
          type: string;
          linkType: string;
          id: string;
        };
      },
    ];
  };
};

export type TrainersResponseAsset = {
  metadata: {
    tags: string[];
    concepts: string[];
  };
  sys: {
    space: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
    publishedVersion: number;
    revision: number;
    locale: Locale;
  };
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
};

export type TrainersResponse = {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: TrainerResponseItem[];
  includes: {
    Asset: TrainersResponseAsset[];
  };
};
