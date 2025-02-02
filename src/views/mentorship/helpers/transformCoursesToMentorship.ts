import { Course } from '@/entities/course';
import { mentorshipCourseTitles, mentorshipLinks } from '@/views/mentorship/constants';
import { MentorshipCourseTitles } from 'data';

export const transformCoursesToMentorship = (courses: Course[]) => {
  const clonedCourses = structuredClone(courses);

  return clonedCourses
    .filter((course) => mentorshipCourseTitles.includes(course.title as MentorshipCourseTitles))
    .map((course) => {
      course.detailsUrl = mentorshipLinks[course.title as MentorshipCourseTitles];
      return course;
    });
};
