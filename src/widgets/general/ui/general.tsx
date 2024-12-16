import classNames from 'classnames/bind';
import { List } from '@/shared/ui/list';
import { WidgetTitle } from '@/shared/ui/widget-title';

import styles from './general.module.scss';

const cx = classNames.bind(styles);

const materials = [
  [
    {
      id: 0,
      text: '',
      title: 'School documentation',
      link: 'https://docs.rs.school',
    },
  ],
  'All materials are publicly available on YouTube and GitHub',
  'We also suggest that you familiarize yourself with the summary of the first stage of training.',
];

export const General = () => {
  return (
    <section className={cx('general', 'container')}>
      <div className={cx('general', 'content')}>
        <WidgetTitle size="small">General</WidgetTitle>
        <div className={cx('general-info')}>
          <div className={cx('materials')}>
            <h2 className={cx('title')}>Materials</h2>
            <List data={materials} />
          </div>
          <div className={cx('certificate')}>
            <h2 className={cx('title')}>Certificate</h2>
            <p className={cx('description')}>
              A certificate of successful completion of the course is issued to all who have passed
              the two stages of training.
            </p>
          </div>
          <div className={cx('chat')}>
            <h2 className={cx('title')}>Chat</h2>
            <p className={cx('description')}>
              Open chat for applicants and students on Discord, Telegram and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
