import { PropsWithChildren } from 'react';
import cn from 'classnames';

import { LearningPathStagesSectionData } from '@/entities/course/types';
import { WidgetTitle } from '@/shared/ui/widget-title';

type LearningPathStagesProps = Omit<LearningPathStagesSectionData, 'stages'> & PropsWithChildren;

export const LearningPathStages = ({ title, description, children }: LearningPathStagesProps) => {
  return (
    <section className={cn('container')} data-testid="study-path">
      <article className={cn('content')}>
        <WidgetTitle size="small" mods="asterisk">
          {title}
        </WidgetTitle>
        {description}
        {children}
      </article>
    </section>
  );
};
