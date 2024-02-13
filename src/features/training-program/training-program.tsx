import { Breadcrumbs, Button, Title } from '@/app/components';
import { useCourseByTitle } from '@/app/hooks';
import type { Course, CourseType } from '@/app/types';
import { CourseNames, contentMap } from './training-program.data';
import { cloneElement } from 'react';
import './training-program.scss';

const crumbs = [
  { label: 'Home', path: '/' },
  { label: 'RS School', path: '/rs-courses' },
  { label: 'JavaScript course', path: '/javascript-course' }
];

interface TrainingProgramProps {
  courseName: CourseNames;
  type?: CourseType;
}

export const TrainingProgram = ({ courseName, type }: TrainingProgramProps) => {
  const { course: data } = useCourseByTitle(courseName, type);

  const course = data as Course;

  const { title, content, image } = contentMap[courseName];

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <section className="training-program container">
        <div className="training-program content column-2">
          <div className="left">
            <Title text={title} hasAsterisk />

            {content.map((component, index) => cloneElement(component, { key: index }))}

            <Button label="Register" href={course?.detailsUrl} />
          </div>
          <div className="right">
            <img src={image} alt={course?.title} />
          </div>
        </div>
      </section>
    </>
  );
};
