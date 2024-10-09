import classNames from 'classnames/bind';
import { LINKS } from '@/app/const';
import { LinkCustom } from '@/shared/ui/link-custom';
import { List } from '@/shared/ui/list';

import styles from './requirements.module.scss';

const cx = classNames.bind(styles);

const mentorRequirements = [
  "Desire to help students. If you've been working with JS/TS in production for more than 6 months, then that's great",
  'Desire to mentor 2 to 6 students online or in person',
  'Ability to spend 3 to 5 hours per week',
];

const mentorResponsibilities = [
  'Conducting an interview',
  'Code review tasks',
  "Answers to students' questions",
];

export const Requirements = () => {
  return (
    <section className={cx('container')}>
      <article className={cx('content')}>
        <div className={cx('requirements-info')}>
          <div className={cx('requirements-list')}>
            <h3 className={cx('title')}>Requirements for mentors</h3>
            <List data={mentorRequirements} />
          </div>
          <div className={cx('responsibilities')}>
            <h3 className={cx('title')}>Mentor responsibilities</h3>
            <List data={mentorResponsibilities} />
          </div>
        </div>
        <LinkCustom
          href={LINKS.BECOME_MENTOR}
          variant="primary"
          external
        >
          Register as a mentor
        </LinkCustom>
      </article>
    </section>
  );
};
