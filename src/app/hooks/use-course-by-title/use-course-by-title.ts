import { useDataByName } from '../use-data-by-name';

export const useCourseByTitle = (titleStartsWith: string) => {
  const { data: courses, error, loading } = useDataByName('courses');

  if (!courses) {
    throw new Error('No courses data available.');
  }

  const course = courses?.find((course) =>
    course.title.toLowerCase().startsWith(titleStartsWith.toLowerCase())
  );
  const hasError = !course || error;
  return { course, loading, hasError };
};
