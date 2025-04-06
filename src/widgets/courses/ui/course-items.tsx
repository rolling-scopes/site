'use client';

import { Course, CourseCard } from '@/entities/course';
import { getActualData } from '@/shared/helpers/getActualData';

type CourseItemsProps = {
  courses: Course[];
};

const CourseItems = ({ courses }: CourseItemsProps) => {
  const actualCourses = getActualData({
    data: courses,
    filterStale: false,
  });

  return (
    actualCourses.map((course) =>
      <CourseCard size="sm" key={course.id} {...course} />,
    )
  );
};

export default CourseItems;
