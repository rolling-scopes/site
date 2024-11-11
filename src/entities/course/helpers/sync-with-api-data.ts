import { ALIAS_QUARTER_REGEXP, COURSE_DATE_FORMAT } from '@/entities/course/constants';
import { ApiCoursesResponse } from '@/entities/course/types';
import { dayJS } from '@/shared/helpers/dayJS';
import { courses as baseCourseData } from 'data';

export const syncWithApiData = (apiCourses: ApiCoursesResponse[]) => {
  return baseCourseData.map((course) => {
    const currApiCourse = apiCourses.find((apiCourse) => {
      const aliasWithoutQuarter = apiCourse.alias.replace(ALIAS_QUARTER_REGEXP, '');

      return course.alias === aliasWithoutQuarter;
    });

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
