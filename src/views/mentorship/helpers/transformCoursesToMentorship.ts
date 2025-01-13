import { MentorshipCourseTitles } from '../../../../dev-data/mentorship-data.types';
import { Course } from '@/entities/course';
import { mentorshipCourseTitles, mentorshipLinks } from '@/views/mentorship/constants';

export const transformCoursesToMentorship = (courses: Course[]) =>
  courses
    .filter((course) => mentorshipCourseTitles.includes(course.title as MentorshipCourseTitles))
    .map((course) => {
      course.detailsUrl = mentorshipLinks[course.title as MentorshipCourseTitles];
      return course;
    });
