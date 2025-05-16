import dayjs from 'dayjs';

import { CoursesScheduleResponse } from '../../src/entities/course/types';
import { api } from '../../src/shared/api/api';

export async function getCoursesSchedule(): Promise<
  {
    name: string;
    startDate: string;
    descriptionUrl: string;
  }[]
> {
  try {
    const response = await api.course.queryCoursesSchedule();
    const courses = response.result as CoursesScheduleResponse;

    return courses.map((course) => ({
      name: course.name || '',
      startDate: dayjs(course.startDate).format('MMM DD, YYYY') || '',
      descriptionUrl: course.descriptionUrl || '',
    }));
  } catch (error) {
    console.error('Error fetching courses schedule:', error);
    return [];
  }
}
