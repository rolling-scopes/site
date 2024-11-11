import type { Course } from '@/entities/course';
import { StaticLink } from '@/widgets/school-menu/types';
import { SchoolMenuProps } from '@/widgets/school-menu/ui/school-menu/school-menu';
import { MentorshipCourse, communityMenuStaticLinks, schoolMenuStaticLinks } from 'data';

export const getMenuItems = (
  heading: SchoolMenuProps['heading'],
  courses: Course[],
  mentorshipCourses: MentorshipCourse[],
): StaticLink[] | Course[] | MentorshipCourse[] => {
  switch (heading) {
    case 'all courses':
      return courses;
    case 'rs school':
      return schoolMenuStaticLinks;
    case 'community':
      return communityMenuStaticLinks;
    case 'mentorship':
      return mentorshipCourses;
    default:
      return [];
  }
};
