import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/features/сourse-main';

export const JavaScript = () => {
  return (
    <>
      <CourseMain courseType="JS / Front-end course" />
      <TrainingProgram course="javascript" />
    </>
  );
};
