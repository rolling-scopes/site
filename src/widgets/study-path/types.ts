import { StaticImageData } from 'next/image';

import { LinkList } from '@/widgets/required';

export type StagePathPage = {
  page: 'courses' | 'jsEn' | 'jsRu' | 'angular' | 'awsDev';
};

export type StageCardProps = {
  id: number;
  title: string;
  intro: string;
  modules: Module[];
  image: {
    src: StaticImageData | null;
    alt: string;
    className: string | '';
  };
};

export type Module = {
  id: number;
  text: string;
  links: LinkList;
  marked: boolean;
};
