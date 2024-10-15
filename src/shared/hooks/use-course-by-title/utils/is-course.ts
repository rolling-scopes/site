import type { Course } from '@/entities/course';

const isCourse = (obj: object) => {
  return 'title' in obj && (obj as Course).title != null;
};

// eslint-disable-next-line import/no-default-export
export default isCourse;
