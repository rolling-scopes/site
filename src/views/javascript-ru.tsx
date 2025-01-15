import { ROUTES } from '@/core/const';
import { getCourseLanguage } from '@/shared/helpers/get-course-language';
import { AboutCourse } from '@/widgets/about-course';
import { AboutVideo } from '@/widgets/about-video';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { MemberActivity } from '@/widgets/member-activity';
import { MentorsWanted } from '@/widgets/mentors-wanted';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, javaScriptRu } from 'data';

type JavaScriptRuProps = {
  courseName: CourseNames['JS_RU'];
};

export const JavaScriptRu = async ({ courseName }: JavaScriptRuProps) => {
  const language = await getCourseLanguage(courseName);

  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      <TrainingProgram courseName={courseName} />
      <AboutCourse courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <AboutVideo lang={language} />
      <MemberActivity path="javascriptRu" lang={language} />
      <Required courseName={courseName} />
      <MentorsWanted route={`/${ROUTES.MENTORSHIP}/${ROUTES.JS_RU}`} courseName={courseName} />
      <Trainers trainers={javaScriptRu} courseName={courseName} />
    </>
  );
};
