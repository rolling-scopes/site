import { cloneElement } from 'react';
import { type CourseNames, contentMap } from './training-program.data';
import { Button, Title } from '@/app/components';
import { useCourseByTitle } from '@/app/hooks';
import type { Course, CourseType } from '@/app/types';
import Image from '@/features/Image';

import './training-program.scss';

interface TrainingProgramProps {
  courseName: CourseNames;
  type?: CourseType;
}

export const TrainingProgram = ({ courseName, type }: TrainingProgramProps) => {
  const { course: data } = useCourseByTitle(
    courseName.includes('badge') ? 'aws fundamentals' : courseName,
    type,
  );

  const course = data as Course;

  const { title, content, image } = contentMap[courseName];

  const buttonLabel = courseName === 'react ru' ? 'Записаться' : 'Register';

  return (
    <section className="training-program container">
      <div className="training-program content column-2">
        <div className="left">
          <Title text={title} hasAsterisk />

          {content.map((component, index) => cloneElement(component, { key: index }))}

          <Button label={buttonLabel} href={course?.enroll} />
        </div>
        <div className={`right ${courseName.includes('badge') ? 'badge' : ''}`}>
          <Image src={image} alt={course?.title} lazy="false" />
        </div>
      </div>
    </section>
  );
};
