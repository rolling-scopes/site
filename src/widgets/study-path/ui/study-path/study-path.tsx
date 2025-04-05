import cn from 'classnames';

import { Stages } from '../stages/stages';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { type StudyPathPage, type StudyPathProps, studyPath } from 'data';

export const StudyPath = ({ page }: StudyPathPage) => {
  const path: StudyPathProps = studyPath[page];
  const { sectionTitle, sectionIntro, stages } = path;

  if (!stages || !stages.length) {
    return null;
  }

  return (
    <section className={cn('container')} data-testid="study-path">
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
