import { COURSE_DATE_FORMAT } from '@/entities/course/constants';
import { ApiCoursesResponse } from '@/entities/course/types';
import { dayJS } from '@/shared/helpers/dayJS';
import { courses as baseCourseData } from 'data';

export const syncWithApiData = (apiCourses: ApiCoursesResponse[]) => {
  return baseCourseData.map((course) => {
    const currApiCourse = apiCourses.find(
      (apiCourse) => course.descriptionUrl === apiCourse.descriptionUrl,
    );

    if (!currApiCourse) {
      return course;
    }

    const clonedCourse = structuredClone(course);

    clonedCourse.startDate = dayJS(currApiCourse.startDate).format(COURSE_DATE_FORMAT);
    clonedCourse.registrationEndDate = dayJS(currApiCourse.registrationEndDate).format(
      COURSE_DATE_FORMAT,
    );

    return clonedCourse;
  });
};
