import { cloneElement } from 'react';
import Image from 'next/image';
import type { Course } from '@/entities/course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { TrainingProgramType, contentMap } from 'data';

import './training-program.scss';

type TrainingProgramProps = {
  courseName: TrainingProgramType;
  lang?: 'ru' | 'en';
  course: Course;
};

const localizedContent = {
  en: { linkLabel: 'Register' },
  ru: { linkLabel: 'Зарегистрироваться' },
};

export const TrainingProgram = ({ courseName, lang = 'en', course }: TrainingProgramProps) => {
  const { title, content, image } = contentMap[courseName];

  // TODO remove 'cloneElement' on 37 line due 'Using cloneElement is uncommon and can lead to fragile code' https://react.dev/reference/react/cloneElement

  return (
    <section className="training-program container">
      <div className="training-program content column-2">
        <div className="left">
          <WidgetTitle mods="asterisk">{title}</WidgetTitle>

          {content.map((component, index) => cloneElement(component, { key: index }))}

          {course && (
            <LinkCustom href={course?.enroll} variant="primary" external>
              {localizedContent[lang].linkLabel}
            </LinkCustom>
          )}
        </div>
        <div className={`right ${courseName.includes('badge') ? 'badge' : ''}`}>
          <Image src={image} alt={course?.title} />
        </div>
      </div>
    </section>
  );
};
