import { Course } from '@/entities/course';
import { About } from '@/widgets/about';
import { AngularTopics } from '@/widgets/angular-topics';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { MentorsWanted } from '@/widgets/mentors-wanted';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, angular } from 'data';

interface AngularProps {
  course: Course;
  courseName: CourseNames['ANGULAR'];
}

export const Angular = ({ course, courseName }: AngularProps) => {
  return (
    <>
      <CourseMain course={course} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} />
      <AngularTopics />
      <About course={course} courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <StudyPath path="angular" />
      <Required courseName={courseName} marked1 />
      <MentorsWanted />
      <Trainers trainers={angular} />
    </>
  );
};
