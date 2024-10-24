import type { Course } from '@/entities/course';

const isCourse = (obj: object) => {
  return 'title' in obj && (obj as Course).title != null;
};

export default isCourse;
