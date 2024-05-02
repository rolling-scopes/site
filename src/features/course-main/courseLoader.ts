import { courses } from '@/app/services/data';

const courseLoader = async () => {
  return courses;
};

export default courseLoader;
