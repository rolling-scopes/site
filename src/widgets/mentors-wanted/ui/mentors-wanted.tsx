import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import mentorImg from '@/shared/assets/mentors-wanted-poster.webp';
import { Image } from '@/shared/ui/image';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentors-wanted.module.scss';

const cx = classNamesBind.bind(styles);

export const MentorsWanted = () => {
  return (
    <section className={cx('mentors-wanted', 'container')}>
      <article className={classNames('content', cx('content'))}>
        <div className={cx('content-left')}>
          <WidgetTitle id="mentors-wanted" mods="lines">
            Mentors Wanted!
          </WidgetTitle>
          <Paragraph>
            If&nbsp;you are interested in mentoring our students, please go through the
            {' '}
            <LinkCustom
              href="https://github.com/rolling-scopes-school/tasks/tree/master/angular/mentoring"
              external
            >
              Mentoring Documentation
            </LinkCustom>
            {' '}
            for&nbsp;the Angular Course.
          </Paragraph>
        </div>
        <div className={cx('picture')}>
          <Image img={mentorImg} alt="Sloth - mascot dresses as a detective" />
        </div>
      </article>
    </section>
  );
};
