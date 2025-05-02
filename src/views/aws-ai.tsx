import { trainerStore } from '@/entities/trainer';
import { AboutCourse } from '@/widgets/about-course';
import { AwsBadge } from '@/widgets/aws-badge';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames } from 'data';

type AwsAIProps = {
  courseName: CourseNames['AWS_AI'];
};

export const AwsAI = async ({ courseName }: AwsAIProps) => {
  const trainers = await trainerStore.loadTrainers(courseName);

  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      <TrainingProgram courseName={courseName} />
      <AboutCourse courseName={courseName} />
      <Certification courseName={courseName} />
      <AwsBadge courseName={courseName} />
      <Communication courseName={courseName} />
      <Required courseName={courseName} />
      {trainers && <Trainers trainers={trainers} courseName={courseName} />}
    </>
  );
};
