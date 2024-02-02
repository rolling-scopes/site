import { useDataByName } from '../use-data-by-name';

export const useCourseByTitle = (titleStartsWith: string, type?: string) => {
  const { data: courses, error, loading } = useDataByName('courses');

  const course = type
    ? courses?.find(
        (course) =>
          course.altTitle?.toLowerCase().startsWith(titleStartsWith.toLowerCase()) &&
          course.type?.toLowerCase().includes(type.toLowerCase())
      )
    : courses?.find((course) =>
        course.title.toLowerCase().startsWith(titleStartsWith.toLowerCase())
      );

  if (!course) {
    return {
      course: null,
      loading,
      hasError: true,
      error: new Error(`Course with title starting ${titleStartsWith} not found!`)
    };
  }

  const hasError = !!error;
  return { course, loading, hasError };
};
