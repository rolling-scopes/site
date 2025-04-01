import { LinkList } from '@/widgets/required/types';

type FaqDataItemQuestion = string;

export type FaqDataItem = {
  question: FaqDataItemQuestion;
  answer: string;
};

export type FaqDataItemWithLink = {
  question: FaqDataItemQuestion;
  answer: LinkList;
};

export type FaqData = (FaqDataItem | FaqDataItemWithLink)[];
