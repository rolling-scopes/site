import { courseDataMap } from '../required.data';
import type { CourseName } from '../required.types';
import { List } from '@/shared/ui/list/list';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';

import './required.scss';

interface RequiredProps {
  courseName: CourseName;
  marked1?: boolean;
  marked2?: boolean;
}

export const Required = ({ courseName }: RequiredProps) => {
  const requiredKnowledge = courseDataMap[courseName];

  const { knowBefore, willLearn, title } = requiredKnowledge;

  const isKnowBeforeExist =
    knowBefore && 'description' in knowBefore && knowBefore.description.length !== 0;

  const isWillLearnExist =
    willLearn
    && willLearn.length !== 0
    && willLearn[0].description.length !== 0
    && (willLearn.length === 2 ? willLearn[1].description.length !== 0 : true);

  return (
    <section className="required container">
      <div className="required content info-wrapper">
        <WidgetTitle mods="asterisk">
          {title}
        </WidgetTitle>

        <div className="column-2">
          {isKnowBeforeExist && (
            <article>
              <Subtitle text={knowBefore.title} />
              <List data={knowBefore.description} type="marked" />
            </article>
          )}
          <div className="will-learn">
            {isWillLearnExist
              ? willLearn.map((willLearn, index) => {
                return (
                  <article key={index}>
                    <Subtitle text={willLearn.title} />
                    <List data={willLearn.description} type="marked" />
                  </article>
                );
              })
              : ''}
          </div>
        </div>
      </div>
    </section>
  );
};
