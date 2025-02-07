import classNames from 'classnames/bind';

import { Stages } from '../stages/stages';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
import type { StagePathPage } from '@/widgets/study-path/types';
import { studyPath } from 'data';

import styles from './study-path.module.scss';

const cx = classNames.bind(styles);

export const StudyPath = ({ page = 'courses' }: StagePathPage) => {
  const { sectionTitle, sectionIntro, stages } = studyPath[page];

  return (
    <section className={cx('study-path', 'container')} id="study-path">
      <article className={cx('content')}>
        <WidgetTitle size="small" mods="asterisk">
          {sectionTitle}
        </WidgetTitle>
        <Paragraph>{sectionIntro}</Paragraph>
        <Stages stages={stages} />
      </article>
    </section>
  );
};
