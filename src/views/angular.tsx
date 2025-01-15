import { ROUTES } from '@/core/const';
import { getCourseLanguage } from '@/shared/helpers/get-course-language';
import { AboutCourse } from '@/widgets/about-course';
import { AngularTopics } from '@/widgets/angular-topics';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { HeroCourse } from '@/widgets/hero-course';
import { MemberActivity } from '@/widgets/member-activity';
import { MentorsWantedCourse } from '@/widgets/mentors-wanted-course';
import { Required } from '@/widgets/required';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, angular } from 'data';

type AngularProps = {
  courseName: CourseNames['ANGULAR'];
};

export const Angular = async ({ courseName }: AngularProps) => {
  return (
    <>
      <HeroCourse courseName={courseName} />
      <Breadcrumbs />
      <TrainingProgram courseName={courseName} />
      <AngularTopics />
      <AboutCourse courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <MemberActivity path="angular" lang={await getCourseLanguage(courseName)} />
      <Required courseName={courseName} marked1 />
      <MentorsWantedCourse link={`/${ROUTES.MENTORSHIP}/${ROUTES.ANGULAR}`} />
      <Trainers trainers={angular} courseName={courseName} />
    </>
  );
};
