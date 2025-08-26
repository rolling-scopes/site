import { trainerStore } from '@/entities/trainer';
import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames } from 'data';

type AwsDeveloperProps = {
  courseName: CourseNames['AWS_CLOUD_DEVELOPER'];
};

export const AwsDeveloper = async ({ courseName }: AwsDeveloperProps) => {
  const trainers = await trainerStore.loadTrainers(courseName);

  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      <TrainingProgram courseName={courseName} />
      <AboutCourse courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <Required courseName={courseName} />
      <StudyPath page="awsDev" />
      {trainers && <Trainers trainers={trainers} courseName={courseName} />}
    </>
  );
};
