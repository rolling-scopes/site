import { COURSE_NAMES } from '@/shared/constants';
import { LinkList } from '@/widgets/required/required.types';

export type CourseName = (typeof COURSE_NAMES)[keyof typeof COURSE_NAMES];

export type ListData = (string | LinkList)[] | [];
export type ListType = 'marked' | 'unmarked';
