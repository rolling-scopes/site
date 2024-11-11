import type { Course } from '@/entities/course';
import { GenericItemProps } from '@/widgets/school-menu/ui/school-list/school-list';
import { SchoolMenuProps } from '@/widgets/school-menu/ui/school-menu/school-menu';
import { MentorshipCourse, communityMenuStaticLinks, schoolMenuStaticLinks } from 'data';

export const getMenuItems = (
  heading: SchoolMenuProps['heading'],
  courses: Course[],
  mentorshipCourses: MentorshipCourse[],
): GenericItemProps[] | Course[] | MentorshipCourse[] => {
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
