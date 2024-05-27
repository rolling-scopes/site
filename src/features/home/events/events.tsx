import cn from 'classnames';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import { events } from './events.data';
import {
  EventCard,
  EventCardProps,
  Paragraph,
  SectionLabel,
  Subtitle,
  Title,
} from '@/app/components';
import photo3 from '@/assets/photo-3.webp';
import Image from '@/features/image';
import { getActualDataList } from '@/utils';

import styles from './events.module.scss';

const cx = classNames.bind(styles);

const actualEvents = getActualDataList({
  dataList: events as EventCardProps[],
  actualDelayInDays: 3,
});

const stub = <Image src={photo3} />;

export const Events = () => (
  <div id="events" className={cn(cx('events'), 'container')}>
    <div className={cn(cx('events', 'content'), 'content')}>
      <div className={cx('info')}>
        <SectionLabel label="events & meetups" />
        <Title text="Meet us at events" hasAsterisk />
        <Subtitle text="For years we have been organizing meetups and conferences, where you can always learn something new, share your knowledge, discover new technologies, meet old and find new friends." />
        <Paragraph>
          During 9 years we have organized 150+ events for developers in different cities and
          countries.
        </Paragraph>
      </div>

      <div className={cx('cards')}>
        {!actualEvents.length && stub}
        {(actualEvents as EventCardProps[]).map((i) => (
          <EventCard key={i.title} {...i} date={dayjs(i.date).format('DD MMM YYYY')} />
        ))}
      </div>
    </div>
  </div>
);
