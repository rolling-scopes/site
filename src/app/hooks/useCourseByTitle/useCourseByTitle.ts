import { useDataByName } from '../useDataByName/useDataByName';

export const useCourseByTitle = (titleStartsWith: string) => {
  const { data: courses, error, loading } = useDataByName('courses');

  const course = courses?.find((course) =>
    course.title.toLowerCase().startsWith(titleStartsWith.toLowerCase())
  );

  return { course, loading, error };
};
