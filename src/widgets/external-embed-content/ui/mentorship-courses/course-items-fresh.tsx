'use client';

import { Course, CourseCard } from '@/entities/course';
import { FreshCourses } from '@/shared/ui/fresh-courses';

type CourseItems = {
  courses: Course[];
  className: string;
};

export const CourseItemsFresh = ({ courses, className }: CourseItems) => {
  return (
    <FreshCourses
      mentorship
      courses={courses}
      renderCourse={(course) => (
        <CourseCard
          key={course.id}
          className={className}
          showMentoringStartDate={true}
          {...course}
        />
      )}
    />
  );
};
