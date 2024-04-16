import { useDataByName } from '@/app/hooks';
import { Course } from '@/app/types';

type Day = number;

export const useNearestCourse = (bufferPeriod: Day = 14) => {
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

  const { prevCourse, nextCourse } = definePrevNext(coursesData);
  const course = chooseNearestCourse({ prevCourse, nextCourse, bufferPeriod });
  const hasError = !!error || (!loading && !course);

  return {
    course,
    loading,
    error,
    hasError,
  };
};

function isCourse(obj: object): obj is Course {
  return 'startDate' in obj && (obj as Course).startDate != null;
}

function definePrevNext(coursesData: object[]): {
  prevCourse: Course | undefined;
  nextCourse: Course | undefined;
} {
  const dateNow = Date.now();
  let prevCourse: Course | undefined;
  let nextCourse: Course | undefined;

  coursesData.forEach((obj: object) => {
    if (isCourse(obj)) {
      const startDate = Date.parse(obj.startDate);
      const isPast = startDate <= dateNow;
      if (
        (!prevCourse && isPast) ||
        (isPast && Date.parse((prevCourse as Course).startDate) < startDate)
      ) {
        prevCourse = obj;
      }
      if (
        (!nextCourse && !isPast) ||
        (!isPast && Date.parse((nextCourse as Course).startDate) > startDate)
      ) {
        nextCourse = obj;
      }
    }
  });
  return { prevCourse, nextCourse };
}

type chooseNearestCourseProps = {
  prevCourse?: Course;
  nextCourse?: Course;
  bufferPeriod: Day;
};

function chooseNearestCourse({
  prevCourse,
  nextCourse,
  bufferPeriod,
}: chooseNearestCourseProps): Course | undefined {
  const dateNow = Date.now();
  let course = !nextCourse ? prevCourse : nextCourse;
  if (nextCourse && prevCourse) {
    const bufferPeriodMs = bufferPeriod * 24 * 60 * 60 * 1000;
    const deltaNext = Date.parse(nextCourse.startDate) - dateNow;
    const deltaPrev = dateNow - Date.parse(prevCourse.startDate);
    if (deltaPrev < deltaNext && deltaPrev < bufferPeriodMs) {
      course = prevCourse;
    }
  }
  return course;
}
