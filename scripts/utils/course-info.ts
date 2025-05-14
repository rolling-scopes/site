import dayjs from 'dayjs';

import type { ApiCourse } from '../types';

export const getCourseInfo = (coursesList: ApiCourse[], slug: string): string => {
  const courseInfo: ApiCourse | undefined = coursesList.find((c) => c.descriptionUrl.toLowerCase().endsWith(slug));

  let rawDate: string;

  if (!courseInfo) {
    rawDate = '';
  } else {
    rawDate = courseInfo.startDate;
  }

  const formattedDate: string = rawDate ? dayjs(rawDate).format('MMM DD, YYYY') : 'TBD';

  return formattedDate;
};
