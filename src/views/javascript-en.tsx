import { ROUTES } from '@/core/const';
import { Course } from '@/entities/course';
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
import { CourseNames, javaScriptEn } from 'data';

type JavaScriptEnProps = {
  courseName: CourseNames['JS_EN'];
  course: Course;
};
export const JavaScriptEn = ({ course, courseName }: JavaScriptEnProps) => {
  return (
    <>
      <HeroCourse course={course} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} />
      <AboutCourse course={course} courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <AboutVideo />
      <MemberActivity path="javascript" type="marked" />
      <Required courseName={courseName} />
      <MentorsWanted route={`/${ROUTES.MENTORSHIP}/${ROUTES.JS}`} />
      <Trainers trainers={javaScriptEn} />
    </>
  );
};
