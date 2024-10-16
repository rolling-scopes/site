import { cloneElement } from 'react';
import type { Course } from '@/entities/course';
import { Image } from '@/shared/ui/image';
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
  // const { course: data } = useCourseByTitle(
  //   courseName.includes('badge') ? 'aws fundamentals' : courseName,
  // );

  // const course = data as Course;

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
          <Image img={image} alt={course?.title} lazy={false} />
        </div>
      </div>
    </section>
  );
};
