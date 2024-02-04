import { CourseType } from '@/app/types';
import { AboutVideo } from '@/features/about-video';
import { About } from '@/features/about';
import { StudyPath } from '@/features/study-path';
import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/features/сourse-main';

interface JavaScriptProps {
  type: CourseType;
}

export const JavaScript = ({ type }: JavaScriptProps) => {
  return (
    <>
      <CourseMain courseName="javascript" type={type} />
      <TrainingProgram courseName="javascript" type={type} />
      <About courseName="javascript" />
      <AboutVideo />
      <StudyPath path="javascriptPath" />
    </>
  );
};
