import dayjs from 'dayjs';

import type { ApiCourse } from '../types';

export const getCourseInfo = (coursesList: ApiCourse[], slug: string): string => {
  const courseInfo: ApiCourse | undefined = coursesList.find((c) =>
    c.descriptionUrl.toLowerCase().endsWith(slug),
  );

  const rawDate: string = courseInfo ? courseInfo.startDate : '';

  const formattedDate: string = rawDate ? dayjs(rawDate).format('MMM DD, YYYY') : 'TBD';

  return formattedDate;
};
