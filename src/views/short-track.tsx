import { faqDataShortTrack } from '../../dev-data/faq.data';
import { shortTrackTrainers } from '../../dev-data/short-track.data';
import { getCourseLanguage } from '@/shared/helpers/get-course-language';
import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Faq } from '@/widgets/faq';
import { HeroCourse } from '@/widgets/hero-course';
import { MemberActivity } from '@/widgets/member-activity';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames } from 'data';

type JavaScriptEnProps = {
  courseName: CourseNames['SHORT_TRACK'];
};
export const ShortTrack = async ({ courseName }: JavaScriptEnProps) => {
  const language = await getCourseLanguage(courseName);

  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      <TrainingProgram courseName={courseName} />
      <AboutCourse courseName={courseName} />
      <MemberActivity path="shortTrack" type="marked" lang={language} />
      <Required courseName={courseName} />
      <Certification courseName={courseName} />
      <Faq questions={faqDataShortTrack} />
      <Trainers trainers={shortTrackTrainers} courseName={courseName} />
    </>
  );
};
