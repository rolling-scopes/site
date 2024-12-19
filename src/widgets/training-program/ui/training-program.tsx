import { cloneElement } from 'react';
import Image from 'next/image';
import { isTrainingProgramType } from '@/shared/helpers/is-training-program';
import { selectCourse } from '@/shared/hooks/use-course-by-title/utils/select-course';
import { LinkCustom } from '@/shared/ui/link-custom';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CourseNamesKeys, contentMap } from 'data';

import './training-program.scss';

type TrainingProgramProps = {
  courseName: CourseNamesKeys;
  specify?: string;
};

const localizedContent = {
  en: { linkLabel: 'Register' },
  ru: { linkLabel: 'Зарегистрироваться' },
};

export const TrainingProgram = async ({ courseName, specify = '' }: TrainingProgramProps) => {
  const course = await selectCourse(courseName);
  const { language } = course;
  const programName = `${courseName} ${specify}`;
  let contentName = isTrainingProgramType(programName) ? programName : courseName;

  const { title, content, image } = contentMap[contentName];

  // TODO remove 'cloneElement' on 37 line due 'Using cloneElement is uncommon and can lead to fragile code' https://react.dev/reference/react/cloneElement

  return (
    <section className="training-program container">
      <div className="training-program content column-2">
        <div className="left">
          <WidgetTitle mods="asterisk">{title}</WidgetTitle>

          {content.map((component, index) => cloneElement(component, { key: index }))}

          {course && (
            <LinkCustom href={course?.enroll} variant="primary" external>
              {localizedContent[language].linkLabel}
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
