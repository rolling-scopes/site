import { useDataByName } from '../use-data-by-name';

export const useCourseByTitle = (titleStartsWith: string) => {
  const { data: courses, error, loading } = useDataByName('courses');

  const course = courses?.find((course) =>
    course.title.toLowerCase().startsWith(titleStartsWith.toLowerCase())
  );

  return { course, loading, error };
};
