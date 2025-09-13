import { Course } from '@/entities/course';
import { MentorshipCourseTitles } from '@/entities/mentor/types';
import { mentorshipCourseTitles, mentorshipLinks } from '@/views/mentorship/constants';

export const transformCoursesToMentorship = (courses: Course[]) => {
  const clonedCourses = structuredClone(courses);

  return clonedCourses
    .filter((course) => mentorshipCourseTitles.includes(course.title as MentorshipCourseTitles))
    .map((course) => {
      course.detailsUrl = mentorshipLinks[course.title as MentorshipCourseTitles];
      return course;
    });
};
