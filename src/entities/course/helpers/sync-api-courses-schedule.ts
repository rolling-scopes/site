import { Course, CoursesScheduleResponse } from '@/entities/course/types';

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

    clonedCourse.startDate = currApiCourse.startDate;
    clonedCourse.registrationEndDate = currApiCourse.registrationEndDate;
    clonedCourse.enroll = currApiCourse.wearecommunityUrl;

    if (currApiCourse.personalMentoringStartDate) {
      clonedCourse.personalMentoringStartDate = currApiCourse.personalMentoringStartDate;
    }

    if (currApiCourse.personalMentoringEndDate) {
      clonedCourse.personalMentoringEndDate = currApiCourse.personalMentoringEndDate;
    }

    return clonedCourse;
  });
};
