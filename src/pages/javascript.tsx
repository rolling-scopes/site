import { About } from '@/features/about';
import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/features/сourse-main';

export const JavaScript = () => {
  return (
    <>
      <CourseMain courseName="javascript" type="Mentoring Program" />
      <TrainingProgram course="javascript" />
      <About courseName="javascript" />
    </>
  );
};
