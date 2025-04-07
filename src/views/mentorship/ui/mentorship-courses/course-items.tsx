'use client';

import React from 'react';

import { Course, CourseCard } from '@/entities/course';
import { getActualData } from '@/shared/helpers/getActualData';
import {
  transformCoursesToMentorship,
} from '@/views/mentorship/helpers/transformCoursesToMentorship';

type CourseItems = {
  courses: Course[];
  className: string;
};

const CourseItems = ({ courses, className }: CourseItems) => {
  const actualCourses = getActualData({
    data: courses,
    filterStale: false,
    isMentorship: true,
    sort: false,
  });
  const coursesWithMentorship = transformCoursesToMentorship(actualCourses);

  return coursesWithMentorship.map((course) => (
    <CourseCard key={course.id} className={className} {...course} showMentoringStartDate={true} />
  ));
};

export default CourseItems;
