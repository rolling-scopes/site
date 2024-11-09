import { syncWithApiData } from '@/entities/course/helpers/sync-with-api-data.ts';
import { ApiCoursesResponse, Course } from '@/entities/course/types.ts';

let cache: Course[] | null = null;

export const getCourses = async () => {
  if (cache) {
    return cache;
  }

  const data = await fetch(process.env.API_URL, { cache: 'force-cache' });
  const courses = (await data.json()) as ApiCoursesResponse[];

  cache = syncWithApiData(courses);

  return cache;
};
