import { ROUTES } from '@/core/const';
import { Course } from '@/entities/course';
import { AboutCourse } from '@/widgets/about-course';
import { AngularTopics } from '@/widgets/angular-topics';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { MemberActivity } from '@/widgets/member-activity';
import { MentorsWantedCourse } from '@/widgets/mentors-wanted-course';
import { Required } from '@/widgets/required';
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
      <Communication course={course} />
      <MemberActivity path="angular" />
      <Required courseName={courseName} marked1 />
      <MentorsWantedCourse link={`/${ROUTES.MENTORSHIP}/${ROUTES.ANGULAR}`} />
      <Trainers trainers={angular} />
    </>
  );
};
