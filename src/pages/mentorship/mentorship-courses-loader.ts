import {
  MentorshipCourseRouteKeys,
  MentorshipDefaultRouteKeys,
  mentorshipCourses,
  mentorshipCoursesDefault,
} from 'data';

export const mentorshipCoursesLoader =
  async (pageUrl: MentorshipDefaultRouteKeys | MentorshipCourseRouteKeys) => {
    return mentorshipCourses.find((item) =>
      item.detailsUrl.endsWith(pageUrl)) || mentorshipCoursesDefault;
  };
