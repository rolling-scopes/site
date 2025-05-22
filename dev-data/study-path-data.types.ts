import { StaticImageData } from 'next/image';

type ItemWithLink = {
  id: number;
  text: string;
  title: string;
  link: string;
  external?: boolean;
};

export type LinkList = ItemWithLink[];

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
