'use client';

import { ReactNode } from 'react';

import { Course } from '@/entities/course';
import { getActualData } from '@/shared/helpers/get-actual-data';
import {
  transformCoursesToMentorship,
} from '@/views/mentorship/helpers/transform-courses-to-mentorship';

type FreshCoursesProps = {
  courses: Course[];
  renderCourse: (course: Course) => ReactNode;
  filterStale?: boolean;
  sort?: boolean;
  mentorship?: boolean;
};

export const FreshCourses = ({
  courses,
  renderCourse,
  filterStale = false,
  sort = false,
  mentorship,
}: FreshCoursesProps) => {
  const actualCourses = getActualData({
    data: courses,
    filterStale,
    sort,
    isMentorship: mentorship,
  });

  if (mentorship) {
    return transformCoursesToMentorship(actualCourses).map(renderCourse);
  }

  return actualCourses.map(renderCourse);
};
