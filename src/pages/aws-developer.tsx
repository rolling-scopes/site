import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/features/сourse-main';
import { StudyPath } from '@/features/study-path';
import { Required } from '@/features/required';
import { Trainers } from '@/features/trainers';
import { About } from '@/features/about';

export const AwsDeveloper = () => {
  return (
    <>
      <CourseMain courseName="aws cloud developer" />
      <TrainingProgram courseName="nodejs" />
      <About courseName="angular" />
      <StudyPath path="angularPath" />
      <Required courseName="angular" marked1 />
      <Trainers courseName="angular" />
    </>
  );
};
