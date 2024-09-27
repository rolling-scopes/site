import type { Course } from '@/entities/course';

export const isCourse = (obj: object) => {
  return 'title' in obj && (obj as Course).title != null;
};
