'use client';

import type { Course } from '@/entities/course';
import { getActualData } from '@/shared/helpers/getActualData';
import { SchoolMenu } from '@/widgets/school-menu';
import { Color } from '@/widgets/school-menu/types';

type AllCoursesProps = {
  courses: Course[];
  courseIcon: 'iconSmall' | 'iconFooter';
  color: Color;
  onClose?: () => void;

};

const AllCourses = ({ courses, courseIcon, color, onClose }: AllCoursesProps) => {
  const actualCourses = getActualData({
    data: courses,
    filterStale: false,
  });

  return (
    <SchoolMenu>
      {actualCourses.map((course) => (
        <SchoolMenu.Item
          key={course.id}
          icon={course[courseIcon]}
          title={course.title}
          description={course.startDate}
          url={course.detailsUrl}
          color={color}
          onClick={onClose}
        />
      ))}
    </SchoolMenu>
  );
};

export default AllCourses;
