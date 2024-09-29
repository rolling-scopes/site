import { LinkList } from '@/widgets/required/required.types';

export type ListData = (string | LinkList)[] | [] | undefined;

export type ListType = 'marked' | 'unmarked';
