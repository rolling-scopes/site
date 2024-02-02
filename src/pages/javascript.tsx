import { CourseType } from '@/app/types';
import { About } from '@/features/about';
import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/features/сourse-main';

interface JavaScriptProps {
  type: CourseType;
}

export const JavaScript = ({ type }: JavaScriptProps) => {
  return (
    <>
      <CourseMain courseName="javascript" type={type} />
      <TrainingProgram course="javascript" />
      <About courseName="javascript" />
    </>
  );
};
