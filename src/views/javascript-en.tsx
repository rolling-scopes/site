import { trainerStore } from '@/entities/trainer';
import { ROUTES } from '@/shared/constants';
import { getCourseLanguage } from '@/shared/helpers/get-course-language';
import { AboutCourse } from '@/widgets/about-course';
import { AboutVideo } from '@/widgets/about-video';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { MentorsWanted } from '@/widgets/mentors-wanted';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames } from 'data';

type JavaScriptEnProps = {
  courseName: CourseNames['JS_EN'];
};
export const JavaScriptEn = async ({ courseName }: JavaScriptEnProps) => {
  const language = await getCourseLanguage(courseName);
  const trainers = await trainerStore.loadTrainers(courseName, language);

  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      <TrainingProgram courseName={courseName} />
      <AboutCourse courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <AboutVideo lang={language} />
      <StudyPath page="jsEn" />
      <Required courseName={courseName} />
      <MentorsWanted route={`/${ROUTES.MENTORSHIP}/${ROUTES.JS}`} courseName={courseName} />
      {trainers && <Trainers trainers={trainers} courseName={courseName} />}
    </>
  );
};
