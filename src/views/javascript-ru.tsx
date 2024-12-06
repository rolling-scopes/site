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
import { CourseNames, javaScriptRu } from 'data';

type JavaScriptRuProps = {
  course: Course;
  courseName: CourseNames['JS_RU'];
};

export const JavaScriptRu = ({ course, courseName }: JavaScriptRuProps) => {
  const { language } = course;

  return (
    <>
      <HeroCourse course={course} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} />
      <AboutCourse course={course} courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication course={course} />
      <AboutVideo />
      <MemberActivity path="javascriptRu" lang={language} />
      <Required courseName={courseName} />
      <MentorsWanted route={`/${ROUTES.MENTORSHIP}/${ROUTES.JS_RU}`} lang={language} />
      <Trainers trainers={javaScriptRu} lang={language} />
    </>
  );
};
