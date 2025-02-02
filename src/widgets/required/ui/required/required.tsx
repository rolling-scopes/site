import classNames from 'classnames/bind';

import { CourseModuleElement } from '../course-module/course-module';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { CoursesWithRequirementsNames, courseDataMap } from 'data';

import styles from './required.module.scss';

export const cx = classNames.bind(styles);

type RequiredProps = {
  courseName: CoursesWithRequirementsNames;
};

export const Required = ({ courseName }: RequiredProps) => {
  const requiredKnowledge = courseDataMap[courseName];
  const { knowBefore, willLearn, title } = requiredKnowledge;

  const isKnowBeforeExist = knowBefore && Boolean(knowBefore.description.length);
  const isWillLearnExist = willLearn && Boolean(willLearn.length);

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
          {isKnowBeforeExist && (
            <div className={cx('course-module-elements-column')}>
              <CourseModuleElement courseModule={knowBefore} />
            </div>
          )}
          {isWillLearnExist && (
            <div className={cx('course-module-elements-column')}>
              {willLearn.map((willLearn, index) => (
                <CourseModuleElement key={index} courseModule={willLearn} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
