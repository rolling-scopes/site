import { CoursesScheduleResponse } from '../../src/entities/course/types';
import { api } from '../../src/shared/api/api';

export async function getCoursesSchedule() {
  try {
    const response = await api.course.queryCoursesSchedule();
    const courses = response.result as CoursesScheduleResponse;

    return courses.map((course) => ({
      startDate: course.startDate || '',
      descriptionUrl: course.descriptionUrl || '',
    }));
  } catch (error) {
    console.error('Error fetching courses schedule:', error);
    return [];
  }
}
