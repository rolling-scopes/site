'use client';

import { Course } from '@/entities/course';
import { COURSE_DATE_FORMAT } from '@/entities/course/constants';
import { TO_BE_DETERMINED } from '@/shared/constants';
import dayjs from '@/shared/helpers/day-js';
import { ApiResourceLocale } from '@/shared/types';
import { FreshCourses } from '@/shared/ui/fresh-courses';
import { SchoolMenu } from '@/widgets/school-menu';
import { Color } from '@/widgets/school-menu/types';

type AllCoursesProps = {
  courses: Course[];
  icon?: 'iconSmall' | 'iconFooter';
  color?: Color;
  lang: ApiResourceLocale;
  onClose?: () => void;
};

export const CourseMenuItemsFresh = ({
  courses,
  icon = 'iconSmall',
  color,
  lang = 'en-US',
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
          description={dayjs(course.startDate).isValid()
            ? dayjs(course.startDate).locale(lang).format(COURSE_DATE_FORMAT)
            : TO_BE_DETERMINED}
          url={course.detailsUrl}
          color={color}
          onClick={onClose}
        />
      )}
    />
  );
};
