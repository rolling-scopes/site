import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Paragraph } from '@/app/components';
import mentorImg from '@/assets/mentors-wanted-poster.webp';
import Image from '@/shared/image';
import { Title } from '@/shared/title';

import styles from './angular-for-mentors.module.scss';

const cx = classNamesBind.bind(styles);
export const AngularForMentors = () => {
  //todo use custom link
  return (
    <section className={cx('angular-for-mentors', 'container')}>
      <article className={classNames('content', cx('content'))}>
        <div className={cx('content-left')}>
          <Title text={'For Mentors:'} />
          <Paragraph>
            If you are interested in mentoring our students, please go through the{' '}
            <Link
              className={cx('link')}
              to="https://github.com/rolling-scopes-school/tasks/tree/master/angular/mentoring"
              target="blank">
              Mentoring Documentation
            </Link>{' '}
            for the Angular Course.
          </Paragraph>
        </div>
        <div className={cx('picture')}>
          <Image src={mentorImg} alt="Sloth - mascot dresses as a detective" />
        </div>
      </article>
    </section>
  );
};
