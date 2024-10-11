import type { CourseName } from '../required.types';
import { List } from '@/shared/ui/list';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { courseDataMap } from 'data';

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
        <WidgetTitle
          // id is used on WeAreCommunity for direct link
          id="basic-knowledge"
          mods="asterisk"
        >
          {title}
        </WidgetTitle>

        <div className="column-2">
          {isKnowBeforeExist && (
            <article>
              <Subtitle fontSize="extra-small">{knowBefore.title}</Subtitle>
              <List data={knowBefore.description} />
            </article>
          )}
          <div className="will-learn">
            {isWillLearnExist
              ? willLearn.map((willLearn, index) => {
                return (
                  <article key={index}>
                    <Subtitle fontSize="extra-small">{willLearn.title}</Subtitle>
                    <List data={willLearn.description} />
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
