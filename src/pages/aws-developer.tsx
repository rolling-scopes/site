import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/features/сourse-main';
import { StudyPath } from '@/features/study-path';
import { Trainers } from '@/features/trainers';
import { About } from '@/features/about';
import { Required } from '@/features/required';

export const AwsDeveloper = () => {
  return (
    <>
      <CourseMain courseName="aws cloud dev" />
      <TrainingProgram courseName="aws cloud dev" />
      <About courseName="aws cloud dev" />
      <Required courseName="awsDev" marked1 />
      <StudyPath path="awsDev" />
      <Trainers courseName="awsDev" />
    </>
  );
};
