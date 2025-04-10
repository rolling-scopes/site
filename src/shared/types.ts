import { type ROUTES } from '@/shared/constants';
import { LinkList } from '@/widgets/required/types';

export type Route = typeof ROUTES;

export type RouteValues = Exclude<Route[keyof Route], '*' | '/' | 'docs/en' | 'docs/ru'>;

export type ListData = (string | LinkList)[] | [];
export type ListType = 'marked' | 'unmarked';

export type Language = 'en' | 'ru';

export type Video = {
  id: string;
  title: string;
  thumbnail: string;
};
