import { cloneElement } from 'react';
import { type CourseNames, contentMap } from './training-program.data';
import { LinkCustom, Title } from '@/app/components';
import { useCourseByTitle } from '@/app/hooks';
import type { Course } from '@/app/types';
import Image from '@/features/image';
import { ArrowIcon } from '@/icons';

import './training-program.scss';

interface TrainingProgramProps {
  courseName: CourseNames;
  lang?: 'ru' | 'en';
}

const localizedContent = {
  en: {
    linkLabel: 'Register',
  },
  ru: {
    linkLabel: 'Зарегистрироваться',
  },
};

export const TrainingProgram = ({ courseName, lang = 'en' }: TrainingProgramProps) => {
  const { course: data } = useCourseByTitle(
    courseName.includes('badge') ? 'aws fundamentals' : courseName,
  );

  const course = data as Course;
  const { title, content, image } = contentMap[courseName];

  return (
    <section className="training-program container">
      <div className="training-program content column-2">
        <div className="left">
          <Title text={title} hasAsterisk />

          {content.map((component, index) => cloneElement(component, { key: index }))}

          <LinkCustom href={course?.enroll} button target="_blank">
            {localizedContent[lang].linkLabel} <ArrowIcon />
          </LinkCustom>
        </div>
        <div className={`right ${courseName.includes('badge') ? 'badge' : ''}`}>
          <Image src={image} alt={course?.title} lazy="false" />
        </div>
      </div>
    </section>
  );
};
