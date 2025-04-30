import { faqDataShortTrack } from '../../dev-data/faq.data';
import { trainerStore } from '@/entities/trainer';
import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Faq } from '@/widgets/faq';
import { HeroCourse } from '@/widgets/hero-course';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames } from 'data';

type JavaScriptEnProps = {
  courseName: CourseNames['SHORT_TRACK'];
};
export const ShortTrack = async ({ courseName }: JavaScriptEnProps) => {
  const trainers = await trainerStore.loadTrainers(courseName);

  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      <TrainingProgram courseName={courseName} />
      <AboutCourse courseName={courseName} />
      <Certification courseName={courseName} />
      <StudyPath page="short-track" />
      <Required courseName={courseName} />
      <Faq faqData={faqDataShortTrack} />
      {trainers && <Trainers trainers={trainers} courseName={courseName} />}
    </>
  );
};
