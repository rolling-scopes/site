import { selectCourse } from './utils/select-course';
import { useDataByName } from '../use-data-by-name';

import type { Course } from '@/entities/course';

export const useCourseByTitle = (titleStartsWith: string) => {
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

  const course = selectCourse(coursesData as Course[], titleStartsWith);

  const hasError = !!error || (!loading && !course);

  return {
    course,
    loading,
    error,
    hasError,
  };
};
