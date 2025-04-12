import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, awsFundamentals } from 'data';

type AwsFundamentalsProps = {
  courseName: CourseNames['AWS_FUNDAMENTALS'];
};
export const AwsFundamentals = ({ courseName }: AwsFundamentalsProps) => {
  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      <TrainingProgram courseName={courseName} />
      <AboutCourse courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <Required courseName={courseName} />
      <TrainingProgram courseName={courseName} specify="badge" />
      <Trainers trainers={awsFundamentals} courseName={courseName} />
    </>
  );
};
