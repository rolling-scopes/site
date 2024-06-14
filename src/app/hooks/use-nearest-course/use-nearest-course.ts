import { BUFFER_PERIOD } from './constants';
import { finedNearestCourse } from './utils/fined-nearest-course';
import { useDataByName } from '../use-data-by-name';

type Day = number;

export const useNearestCourse = (bufferPeriod: Day = BUFFER_PERIOD) => {
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

  const course = finedNearestCourse(coursesData, bufferPeriod);
  const hasError = !!error || (!loading && !course);

  return {
    course,
    loading,
    error,
    hasError,
  };
};
