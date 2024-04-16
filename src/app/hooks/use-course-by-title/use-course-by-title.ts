import { useDataByName } from '@/app/hooks';
import { Course, CourseType } from '@/app/types';

function isCourse(obj: object): obj is Course {
  return 'title' in obj && (obj as Course).title != null;
}

export const useCourseByTitle = (titleStartsWith: string, type?: CourseType) => {
  const { data: coursesData, error, loading } = useDataByName('courses');

  if (loading) {
    return {
      course: null,
      loading,
      hasError: false,
      error: null,
    };
  }

  if (!coursesData || coursesData.length === 0) {
    return {
      course: null,
      loading: false,
      hasError: true,
      error: new Error('No courses data available.'),
    };
  }

  const courses = coursesData.filter(isCourse);

  const titleLower = titleStartsWith.toLowerCase();
  const typeLower = type?.toLowerCase();

  const course = courses.find((course) => {
    const titleMatches =
      course.title.toLowerCase().startsWith(titleLower) ||
      course.altTitle?.toLowerCase().startsWith(titleLower);

    const typeMatches = typeLower ? course.type?.toLowerCase() === typeLower : true;

    return titleMatches && typeMatches;
  });

  const hasError = !!error || (!loading && !course);

  return { course, loading, error, hasError };
};
