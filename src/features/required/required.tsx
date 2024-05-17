import { courseDataMap } from './required.data';
import type { CourseName } from './required.types';
import { Actions, Subtitle, Title } from '@/app/components';
import { useCourseByTitle } from '@/app/hooks';
import { type Course } from '@/app/types';

import './required.scss';

interface RequiredProps {
  courseName: CourseName;
  marked1?: boolean;
  marked2?: boolean;
}

export const Required = ({ courseName, marked1, marked2 }: RequiredProps) => {
  const { course: data } = useCourseByTitle(courseName);

  const course = data as Course;
  let language = 'en';

  if (course) {
    language = course.language[0];
  }

  const requiredKnowledge = courseDataMap[courseName];

  const { knowBefore, willLearn } = requiredKnowledge;

  return (
    <section className="required container">
      <div className="required content info-wrapper">
        <Title
          text={
            language === 'en' ? 'What you should know before starting' : 'Что нужно знать до начала'
          }
          hasAsterisk
        />

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
