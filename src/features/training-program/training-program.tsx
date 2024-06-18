import { cloneElement } from 'react';
import { type CourseNames, contentMap } from './training-program.data';

import type { Course } from '@/app/types';
import Image from '@/features/image';
import { useCourseByTitle } from '@/shared/hooks/use-course-by-title';
import { ArrowIcon } from '@/shared/icons';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Title } from '@/shared/ui/title';

import './training-program.scss';

interface TrainingProgramProps {
  courseName: CourseNames;
  lang?: 'ru' | 'en';
}

const localizedContent = {
  en: { linkLabel: 'Register' },
  ru: { linkLabel: 'Зарегистрироваться' },
};

export const TrainingProgram = ({ courseName, lang = 'en' }: TrainingProgramProps) => {
  const { course: data } = useCourseByTitle(
    courseName.includes('badge') ? 'aws fundamentals' : courseName,
  );

  const course = data as Course;
  const { title, content, image } = contentMap[courseName];

  // TODO remove 'cloneElement' on 37 line due 'Using cloneElement is uncommon and can lead to fragile code' https://react.dev/reference/react/cloneElement

  return (
    <section className="training-program container">
      <div className="training-program content column-2">
        <div className="left">
          <Title text={title} hasAsterisk />

          {content.map((component, index) => cloneElement(component, { key: index }))}

          <LinkCustom
            href={course?.enroll}
            icon={<ArrowIcon />}
            variant="colored"
            button
            target="_blank"
          >
            {localizedContent[lang].linkLabel}
          </LinkCustom>
        </div>
        <div className={`right ${courseName.includes('badge') ? 'badge' : ''}`}>
          <Image src={image} alt={course?.title} lazy="false" />
        </div>
      </div>
    </section>
  );
};
