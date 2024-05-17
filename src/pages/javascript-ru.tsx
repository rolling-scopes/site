import { Breadcrumbs } from '@/app/components';
import { About } from '@/features/about';
import { AboutVideo } from '@/features/about-video';
import { CourseMain } from '@/features/course-main';
import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { TrainingProgram } from '@/features/training-program';

const COURSE_NAME = 'js / front-end ru';

export const JavaScriptRu = () => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} type="Менторская программа" />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <AboutVideo />
      <StudyPath path={'javascript'} />
      <Required courseName={COURSE_NAME} />
    </>
  );
};
