import { LINKS } from '@/core/const';
import { Course } from '@/entities/course';
import { AboutCourse } from '@/widgets/about-course';
import { AngularTopics } from '@/widgets/angular-topics';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { MentorsWantedCourse } from '@/widgets/mentors-wanted-course';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, angular } from 'data';

type AngularProps = {
  course: Course;
  courseName: CourseNames['ANGULAR'];
};

export const Angular = ({ course, courseName }: AngularProps) => {
  return (
    <>
      <HeroCourse course={course} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} />
      <AngularTopics />
      <AboutCourse course={course} courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <StudyPath path="angular" />
      <Required courseName={courseName} marked1 />
      <MentorsWantedCourse link={LINKS.ANGULAR_MENTORING} />
      <Trainers trainers={angular} />
    </>
  );
};
