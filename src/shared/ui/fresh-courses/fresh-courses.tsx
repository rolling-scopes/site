'use client';

import { ReactNode } from 'react';

import { Course } from '@/entities/course';
import { getActualData } from '@/shared/helpers/getActualData';

type FreshCoursesProps = {
  courses: Course[];
  renderCourse: (course: Course) => ReactNode;
  filterStale?: boolean;
  sort?: boolean;
};

export const FreshCourses = ({
  courses,
  renderCourse,
  filterStale = false,
  sort = false,
}: FreshCoursesProps) => {
  const actualCourses = getActualData({
    data: courses,
    filterStale,
    sort,
  });

  return actualCourses.map(renderCourse);
};
