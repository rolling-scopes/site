import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Communication } from '@/widgets/communication';
import { Faq } from '@/widgets/faq';
import { HeroCourse } from '@/widgets/hero-course';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, preSchoolRu, preschoolFaqData } from 'data';

type JavaScriptPreSchoolRuProps = {
  courseName: CourseNames['JS_PRESCHOOL_RU'];
};

export const JavaScriptPreSchoolRu = ({ courseName }: JavaScriptPreSchoolRuProps) => {
  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      <AboutCourse courseName={courseName} />
      <TrainingProgram courseName={courseName} />
      <Required courseName={courseName} />
      <Communication courseName={courseName} />
      <Faq faqData={preschoolFaqData} />
      <Trainers trainers={preSchoolRu} courseName={courseName} />
    </>
  );
};
