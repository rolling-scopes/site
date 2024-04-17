import { courseDataMap } from './required.data';
import type { CourseName } from './required.types';
import { Actions, Subtitle, Title } from '@/app/components';

import './required.scss';

interface RequiredProps {
  courseName: CourseName;
  marked1?: boolean;
  marked2?: boolean;
}

export const Required = ({ courseName, marked1, marked2 }: RequiredProps) => {
  const requiredKnowledge = courseDataMap[courseName];

  const { knowBefore, willLearn } = requiredKnowledge;

  return (
    <section className="required container">
      <div className="required content info-wrapper">
        <Title text="What you should know before starting" hasAsterisk />

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
