import { useDataByName } from './useDataByName';

export const useCourseBytTitle = (titleStartsWith: string) => {
  const { data: courses, error, loading } = useDataByName('courses');

  const course = courses?.find((course) =>
    course.title.toLowerCase().startsWith(titleStartsWith.toLowerCase())
  );

  return { course, loading, error };
};
