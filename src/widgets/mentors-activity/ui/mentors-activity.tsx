import classNames from 'classnames/bind';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
// TODO move Stages to shared?
import { Stages } from '@/widgets/study-path/ui/stages';
import { MentorActivities, mentorsActivityData } from 'data';

import styles from './mentors-activity.module.scss';

const cx = classNames.bind(styles);

type MentorsPathProps = {
  activities: MentorActivities[];
  lang?: 'en' | 'ru';
};

export const MentorsActivity = ({ activities, lang = 'en' }: MentorsPathProps) => {
  return (
    <section className={cx('container')}>
      <article className={cx('content', 'mentoring-path')}>
        <WidgetTitle mods="lines">
          {mentorsActivityData[lang].header}
        </WidgetTitle>
        <Stages stages={activities} />
        <Paragraph className={cx('mentoring-path-note')}>{mentorsActivityData[lang].info}</Paragraph>
      </article>
    </section>
  );
};
