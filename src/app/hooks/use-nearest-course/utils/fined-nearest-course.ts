import { chooseNearestCourse } from './choose-nearest-course';
import { definePrevNext } from './define-prev-next';
import { BUFFER_PERIOD } from '../constants';
import { Day } from '../types';

export function finedNearestCourse(courses: object[], bufferPeriod: Day = BUFFER_PERIOD) {
  const { prevCourse, nextCourse } = definePrevNext(courses);
  const nearestCourse = chooseNearestCourse({
    prevCourse,
    nextCourse,
    bufferPeriod,
  });

  return nearestCourse;
}
