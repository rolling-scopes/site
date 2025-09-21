import { getCourseStatus } from './get-course-status';
import type { CourseStatus } from '@/entities/course';
import { dayJS } from '@/shared/helpers/day-js';

const now = dayJS();

const dates = {
  available: now.add(12, 'day').format('MMM DD, YYYY'),
  upcoming: now.add(50, 'day').format('MMM DD, YYYY'),
  planned: now.add(100, 'day').format('MMM DD, YYYY'),
};

const datesWithoutDay = {
  upcoming: now.add(50, 'day').format('MMM, YYYY'),
  planned: now.add(100, 'day').format('MMM, YYYY'),
};

describe('getCourseStatus function', () => {
  it.each([Object.entries(dates)])(
    'should return correct course status with different dates %o',
    (o) => {
      const status: CourseStatus = getCourseStatus(o[1]);

      expect(status).toBe(o[0]);
    },
  );

  it.each([Object.entries(datesWithoutDay)])(
    'should return correct course status if there is no day in dates %o',
    (o) => {
      const status: CourseStatus = getCourseStatus(o[1]);

      expect(status).toBe(o[0]);
    },
  );
});
