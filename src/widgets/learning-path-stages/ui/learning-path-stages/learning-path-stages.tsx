import { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';

import { LearningPathStagesSectionData } from '@/entities/course/types';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './learning-path-stages.module.scss';

const cx = classNames.bind(styles);

type LearningPathStagesProps = Omit<LearningPathStagesSectionData, 'stages'> & PropsWithChildren;

export const LearningPathStages = ({ title, description, children }: LearningPathStagesProps) => {
  return (
    <section className={cx('container', 'learning-path-stages')} data-testid="study-path">
      <article className={cx('content')}>
        <WidgetTitle size="small" mods="asterisk">
          {title}
        </WidgetTitle>
        {description}
        <div className={cx('stages')}>{children}</div>
      </article>
    </section>
  );
};
