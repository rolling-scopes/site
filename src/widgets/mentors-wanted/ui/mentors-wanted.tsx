import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { Link } from 'react-router-dom';
import mentorImg from '@/shared/assets/mentors-wanted-poster.webp';
import Image from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './mentors-wanted.module.scss';

const cx = classNamesBind.bind(styles);

export const MentorsWanted = () => {
  // todo use custom link
  return (
    <section className={cx('mentors-wanted', 'container')}>
      <article className={classNames('content', cx('content'))}>
        <div className={cx('content-left')}>
          <WidgetTitle mods="lines">Mentors Wanted!</WidgetTitle>
          <Paragraph>
            If&nbsp;you are interested in mentoring our students, please go through the
            {' '}
            <Link
              className={cx('link')}
              to="https://github.com/rolling-scopes-school/tasks/tree/master/angular/mentoring"
              target="blank"
            >
              Mentoring Documentation
            </Link>
            {' '}
            for&nbsp;the Angular Course.
          </Paragraph>
        </div>
        <div className={cx('picture')}>
          <Image src={mentorImg} alt="Sloth - mascot dresses as a detective" />
        </div>
      </article>
    </section>
  );
};
