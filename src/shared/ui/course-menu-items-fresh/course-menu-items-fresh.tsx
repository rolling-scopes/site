'use client';

import { Course } from '@/entities/course';
import { FreshCourses } from '@/shared/ui/fresh-courses';
import { SchoolMenu } from '@/widgets/school-menu';
import { Color } from '@/widgets/school-menu/types';

type AllCoursesProps = {
  courses: Course[];
  icon?: 'iconSmall' | 'iconFooter';
  color?: Color;
  onClose?: () => void;
};

export const CourseMenuItemsFresh = ({
  courses,
  icon = 'iconSmall',
  color,
  onClose,
}: AllCoursesProps) => {
  return (
    <FreshCourses
      courses={courses}
      renderCourse={(course) => (
        <SchoolMenu.Item
          key={course.id}
          icon={course[icon]}
          title={course.title}
          description={course.startDate}
          url={course.detailsUrl}
          color={color}
          onClick={onClose}
        />
      )}
    />
  );
};
