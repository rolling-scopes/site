import { courseDataMap } from './required.data';
import type { CourseName } from './required.types';
import { Actions, Subtitle, Title } from '@/app/components';

import './required.scss';

interface RequiredProps {
  courseName: CourseName;
  marked1?: boolean;
  marked2?: boolean;
  lang?: 'ru' | 'en';
}

const LocalizedContent = {
  en: {
    title: 'What you should know before starting',
  },
  ru: {
    title: 'Что нужно знать до начала',
  },
};
export const Required = ({ courseName, marked1, marked2, lang = 'en' }: RequiredProps) => {
  //todo all links to recommended resources are in English
  const requiredKnowledge = courseDataMap[courseName];

  const { knowBefore, willLearn } = requiredKnowledge;

  return (
    <section className="required container">
      <div className="required content info-wrapper">
        <Title text={LocalizedContent[lang].title} hasAsterisk />

        <div className="column-2">
          <div>
            <Subtitle text={knowBefore.title} />
            <Actions actions={knowBefore.description} marked={marked1} />
          </div>
          {willLearn && 'description' in willLearn && willLearn.description.length !== 0 && (
            <div>
              <Subtitle text={willLearn.title} />
              <Actions actions={willLearn.description} marked={marked2} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
