import { CourseType } from '@/app/types';
import { AboutVideo } from '@/features/about-video';
import { About } from '@/features/about';
import { StudyPath } from '@/features/study-path';
import { TrainingProgram } from '@/features/training-program';
import { CourseMain } from '@/features/сourse-main';
import { Required } from '@/features/required';
import { Breadcrumbs } from '@/app/components';

interface JavaScriptProps {
  type: CourseType;
}

const COURSE_NAME = 'javascript';

export const JavaScript = ({ type }: JavaScriptProps) => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} type={type} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} type={type} />
      <About courseName={COURSE_NAME} type={type} />
      <AboutVideo />
      <StudyPath path={COURSE_NAME} />
      <Required courseName={COURSE_NAME} />
    </>
  );
};
