import { COURSE_NAMES } from '@/shared/constants';

export type CourseName = (typeof COURSE_NAMES)[keyof typeof COURSE_NAMES];
