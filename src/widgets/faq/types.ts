export type FaqDataItem = {
  question: string;
  answer: string;
};

export type FaqDataItemWithLink = {
  question: string;
  answer: {
    id: number;
    title: string;
    text: string;
    link: string;
  }[];
};

export type FaqData = (FaqDataItem | FaqDataItemWithLink)[];
