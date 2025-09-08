'use client';

import { Course, CourseCard } from '@/entities/course';
import { FreshCourses } from '@/shared/ui/fresh-courses';

type CourseItemsProps = {
  courses: Course[];
};

export const CourseItemsFresh = ({ courses }: CourseItemsProps) => {
  return (
    <FreshCourses
      sort
      courses={courses}
      renderCourse={(course) => <CourseCard size="sm" key={course.id} {...course} />}
    />
  );
};
