import classNames from 'classnames/bind';
import { List } from '@/shared/ui/list';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { generalMaterials } from 'data';

import styles from './general.module.scss';

const cx = classNames.bind(styles);

export const General = () => {
  return (
    <section className={cx('container')}>
      <div className={cx('general', 'content')}>
        <WidgetTitle className={cx('title')} size="small">
          General
        </WidgetTitle>
        <article className={cx('info-block')}>
          <Subtitle>Materials</Subtitle>
          <List data={generalMaterials} />
        </article>
        <article className={cx('info-block')}>
          <Subtitle>Certificate</Subtitle>
          <Paragraph>
            A certificate of successful completion of the course is issued to all who have passed
            the two stages of training.
          </Paragraph>
        </article>
        <article className={cx('info-block')}>
          <Subtitle>Chat</Subtitle>
          <Paragraph>
            Open chat for applicants and students on Discord, Telegram and more.
          </Paragraph>
        </article>
      </div>
    </section>
  );
};
