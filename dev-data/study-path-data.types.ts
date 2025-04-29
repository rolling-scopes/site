import { StaticImageData } from 'next/image';

import type { LinkList } from '@/widgets/required/types';

export type StudyPathPage = {
  page: 'courses' | 'jsEn' | 'jsRu' | 'angular' | 'awsDev' | 'short-track';
};

export type StudyPathProps = {
  sectionTitle: string;
  sectionIntro: string;
  stages: StageCardProps[] | [] | null;
};

export type StageCardProps = {
  id: number;
  title: string;
  intro: string;
  modules: StageModuleProps[];
  image: {
    src: StaticImageData | null;
    alt: string;
    className: string | '';
  };
};

type StageModuleProps = {
  id: number;
  text: string;
  links: LinkList;
  marked: boolean;
};
