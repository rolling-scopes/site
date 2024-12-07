import { List } from '@/shared/ui/list';
import { Subtitle } from '@/shared/ui/subtitle';
import classNames from 'classnames/bind';
import { CourseModuleElement } from './course-module';
import type { CourseName } from '../types';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CoursesWithRequirementsNames, courseDataMap } from 'data';

import styles from './required.module.scss';

export const cx = classNames.bind(styles);

type RequiredProps = {
  courseName: CoursesWithRequirementsNames;
  marked1?: boolean;
  marked2?: boolean;
};

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
    <section className={cx('container')}>
      <div className={cx('content', 'info-wrapper')}>
        <WidgetTitle
          // id is used on WeAreCommunity for direct link
          id="basic-knowledge"
          mods="asterisk"
        >
          {title}
        </WidgetTitle>

        <div className={cx('course-module-columns-layout')}>
          <div className={cx('course-module-elements-column')}>
            {isKnowBeforeExist && <CourseModuleElement courseModule={knowBefore} />}
          </div>
          <div className={cx('course-module-elements-column')}>
            {isWillLearnExist
            && willLearn.map((willLearn, index) => (
              <CourseModuleElement key={index} courseModule={willLearn} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
