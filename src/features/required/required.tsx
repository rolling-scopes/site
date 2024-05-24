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

  const { knowBefore, willLearn, title } = requiredKnowledge;

  const isKnowBeforeExist =
    knowBefore && 'description' in knowBefore && knowBefore.description.length !== 0;

  const isWillLearnExist =
    willLearn &&
    willLearn.length !== 0 &&
    willLearn[0].description.length !== 0 &&
    (willLearn.length === 2 ? willLearn[1].description.length !== 0 : true);

  return (
    <section className="required container">
      <div className="required content info-wrapper">
        <Title text={title} hasAsterisk />

        <div className="column-2">
          {isKnowBeforeExist && (
            <article>
              <Subtitle text={knowBefore.title} />
              <Actions actions={knowBefore.description} marked={marked1} />
            </article>
          )}
          <div className="will-learn">
            {isWillLearnExist
              ? willLearn.map((willLearn) => {
                  return (
                    <article>
                      <Subtitle text={willLearn.title} />
                      <Actions actions={willLearn.description} marked={marked2} />
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

// (
// willLearn.map((willLearn) => {
// // <div>
// //   <Subtitle text={willLearn.title} />
// //   <Actions actions={willLearn.description} marked={marked2} />
// // </div>
// })
// )
