import { Required } from '@/features/required';
import { StudyPath } from '@/features/study-path';
import { TrainingProgram } from '@/features/training-program';
import { About } from '@/widgets/about';
import { AboutVideo } from '@/widgets/about-video';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';

const COURSE_NAME = 'js / front-end en';

export const JavaScriptEn = () => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} type="Mentoring Program EN" />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <About courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <AboutVideo />
      <StudyPath path="javascript" />
      <Required courseName={COURSE_NAME} />
    </>
  );
};
