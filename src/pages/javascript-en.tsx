import { AboutCourse } from '@/widgets/about-course';
import { AboutVideo } from '@/widgets/about-video';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { TrainingProgram } from '@/widgets/training-program';

const COURSE_NAME = 'js / front-end en';

export const JavaScriptEn = () => {
  return (
    <>
      <CourseMain courseName={COURSE_NAME} />
      <Breadcrumbs />
      <TrainingProgram courseName={COURSE_NAME} />
      <AboutCourse courseName={COURSE_NAME} />
      <Certification courseName={COURSE_NAME} />
      <Communication courseName={COURSE_NAME} />
      <AboutVideo />
      <StudyPath path="javascript" marked />
      <Required courseName={COURSE_NAME} />
    </>
  );
};
