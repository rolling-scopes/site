import { LinkList } from '@/widgets/required/types';

export type FaqDataItem = {
  question: string;
  answer: string;
};

export type FaqDataItemWithLink = {
  question: string;
  answer: LinkList;
};

export type FaqData = (FaqDataItem | FaqDataItemWithLink)[];
