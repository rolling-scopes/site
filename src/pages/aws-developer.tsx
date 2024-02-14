import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/features/сourse-main';
import { StudyPath } from '@/features/study-path';
import { Trainers } from '@/features/trainers';
import { About } from '@/features/about';

export const AwsDeveloper = () => {
  return (
    <>
      <CourseMain courseName="aws cloud developer" />
      <TrainingProgram courseName="awsDev" />
      <About courseName="aws cloud dev" />
      <StudyPath path="awsDevPath" />
      <Trainers courseName="awsDev" />
    </>
  );
};
