'use client';

import { Course } from '@/entities/course';
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

  return actualCourses.map((course) => (
    <SchoolMenu.Item
      key={course.id}
      icon={course.iconSmall}
      title={course.title}
      description={course.startDate}
      url={course.detailsUrl}
    />
  ));
};

export default AllCourses;
