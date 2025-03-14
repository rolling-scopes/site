import cn from 'classnames';

import { Stages } from '../stages/stages';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { studyPath } from 'data';

export type StagePathPage = {
  page: 'courses' | 'jsEn' | 'jsRu' | 'angular' | 'awsDev';
};

export const StudyPath = ({ page = 'courses' }: StagePathPage) => {
  const { sectionTitle, sectionIntro, stages } = studyPath[page];

  return (
    <section className={cn('study-path', 'container')} data-testid="study-path">
      <article className={cn('content')}>
        <WidgetTitle size="small" mods="asterisk">
          {sectionTitle}
        </WidgetTitle>
        <Paragraph dataTestId="section-intro">{sectionIntro}</Paragraph>
        <Stages stages={stages} />
      </article>
    </section>
  );
};
