import { COURSE_DATE_FORMAT, MENTORING_DATE_FORMAT } from '@/entities/course/constants';
import { Course, CoursesScheduleResponse } from '@/entities/course/types';
import { dayJS } from '@/shared/helpers/day-js';

export const syncApiCoursesSchedule = (
  apiCourses: CoursesScheduleResponse,
  baseCourseData: Course[],
) => {
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
    clonedCourse.enroll = currApiCourse.wearecommunityUrl;
    if (currApiCourse.personalMentoringStartDate) {
      clonedCourse.personalMentoringStartDate = dayJS(
        currApiCourse.personalMentoringStartDate,
      ).format(MENTORING_DATE_FORMAT);
    }

    if (currApiCourse.personalMentoringEndDate) {
      clonedCourse.personalMentoringEndDate = dayJS(currApiCourse.personalMentoringEndDate).format(
        MENTORING_DATE_FORMAT,
      );
    }
    return clonedCourse;
  });
};
