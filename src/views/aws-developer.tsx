import { getCourseLanguage } from '@/shared/helpers/get-course-language';
import { AboutCourse } from '@/widgets/about-course';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { MemberActivity } from '@/widgets/member-activity';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, awsDev } from 'data';

type AwsDeveloperProps = {
  courseName: CourseNames['AWS_CLOUD_DEVELOPER'];
};

export const AwsDeveloper = async ({ courseName }: AwsDeveloperProps) => {
  const language = await getCourseLanguage(courseName);

  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      <TrainingProgram courseName={courseName} />
      <AboutCourse courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <Required courseName={courseName} />
      <MemberActivity path="awsDev" lang={language} />
      <Trainers trainers={awsDev} courseName={courseName} />
    </>
  );
};
