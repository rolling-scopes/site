import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Paragraph, Title } from '@/app/components';
import mentorImg from '@/assets/mentors-wanted-poster.webp';
import Image from '@/features/image';

import styles from './mentors-wanted.module.scss';

const cx = classNamesBind.bind(styles);

export const MentorsWanted = () => {
  // todo use custom link
  return (
    <section className={cx('mentors-wanted', 'container')}>
      <article className={classNames('content', cx('content'))}>
        <div className={cx('content-left')}>
          <Title text="Mentors Wanted!" hasLines />
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
