import classNames from 'classnames/bind';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';
// TODO move Stages to shared?
import { Stages } from '@/widgets/study-path/ui/stages';
import { MentorActions } from 'data';

import styles from './mentors-activity.module.scss';

const cx = classNames.bind(styles);

type MentorsPathProps = {
  activities: MentorActions[];
  lang?: 'en' | 'ru';
};

const textContent = {
  en: {
    header: 'Mentor activities',
    info: 'The main tasks of a mentor for the duration of the course, but if you are willing to give students more - the list is not limited to anything',
  },
  ru: {
    header: 'Деятельность наставника',
    info: 'Основные задачи ментора на период курса, но если вы готовы дать студентам больше - список не ограничен ни чем',
  },
};

export const MentorsActivity = ({ activities, lang = 'en' }: MentorsPathProps) => {
  return (
    <section className={cx('container')}>
      <article className={cx('content', 'mentoring-path')}>
        <WidgetTitle mods="lines" className={cx('title')}>
          {textContent[lang].header}
        </WidgetTitle>
        <Stages stages={activities} />
        <Paragraph className={cx('mentoring-path-note')}>{textContent[lang].info}</Paragraph>
      </article>
    </section>
  );
};
