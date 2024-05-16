import { Course } from '@/app/types';

const isCourse = (obj: object) => {
  return 'title' in obj && (obj as Course).title != null;
};

export default isCourse;
