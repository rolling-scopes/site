import { Course } from '@/entities/course';
import { About } from '@/widgets/about';
import { AboutVideo } from '@/widgets/about-video';
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import { Certification } from '@/widgets/certification';
import { Communication } from '@/widgets/communication';
import { CourseMain } from '@/widgets/course-main';
import { Required } from '@/widgets/required';
import { StudyPath } from '@/widgets/study-path';
import { Trainers } from '@/widgets/trainers';
import { TrainingProgram } from '@/widgets/training-program';
import { CourseNames, javaScriptEn } from 'data';

interface JavaScriptEnProps {
  courseName: CourseNames['JS_EN'];
  course: Course;
}
export const JavaScriptEn = ({ course, courseName }: JavaScriptEnProps) => {
  return (
    <>
      <CourseMain course={course} />
      <Breadcrumbs />
      <TrainingProgram course={course} courseName={courseName} />
      <About course={course} courseName={courseName} />
      <Certification courseName={courseName} />
      <Communication courseName={courseName} />
      <AboutVideo />
      <StudyPath path="javascript" marked />
      <Required courseName={courseName} />
      <Trainers trainers={javaScriptEn} />
    </>
  );
};
