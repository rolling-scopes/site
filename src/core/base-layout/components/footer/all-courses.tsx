'use client';

import type { Course } from '@/entities/course';
import { getActualData } from '@/shared/helpers/getActualData';
import { SchoolMenu } from '@/widgets/school-menu';

type AllCoursesProps = {
  courses: Course[];
};

const AllCourses = ({ courses }: AllCoursesProps) => {
  const actualCourses = getActualData({
    data: courses,
    filterStale: false,
    sort: false,
  });

  return (
    <SchoolMenu heading="all courses" color="light">
      {actualCourses.map((course) => (
        <SchoolMenu.Item
          key={course.id}
          icon={course.iconFooter}
          title={course.title}
          description={course.startDate}
          url={course.detailsUrl}
          color="light"
        />
      ))}
    </SchoolMenu>
  );
};

export default AllCourses;
