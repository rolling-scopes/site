import { LinkList } from '@/widgets/required/required.types';

export type ListData = (string | LinkList)[] | [];
export type ListType = 'marked' | 'unmarked';

export type Language = 'en' | 'ru';

export type Video = {
  id: string;
  title: string;
  thumbnail: string;
};
