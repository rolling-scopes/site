import cn from 'classnames';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import { events } from './events.data';
import {
  EventCard,
  EventCardProps,
} from '@/app/components';
import photo3 from '@/assets/photo-3.webp';
import Image from '@/features/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { Subtitle } from '@/shared/ui/subtitle';
import { Title } from '@/shared/ui/title';
import { getActualDataList } from '@/utils';

import styles from './events.module.scss';

const cx = classNames.bind(styles);

const displayedCardsQuantity = 2;

const actualEvents = getActualDataList({
  dataList: events as EventCardProps[],
  actualDelayInDays: 3,
});

const nearestEvents = actualEvents.slice(0, displayedCardsQuantity);

const Stub = <Image src={photo3} />;

export const Events = () => {
  const rsLifetime = dayjs().diff('2013', 'year');

  return (
    <article id="events" className={cn(cx('events'), 'container')}>
      <div className={cn(cx('events', 'content'), 'content')}>
        <section className={cx('info')}>
          <SectionLabel label="events & meetups" />
          <Title text="Meet us at events" hasAsterisk />
          <Subtitle text="For years we have been organizing meetups and conferences, where you can always learn something new, share your knowledge, discover new technologies, meet old and find new friends." />
          <Paragraph>
            During
            {' '}
            {rsLifetime}
            {' '}
            years we have organized 150+ events for developers in different
            cities and countries.
          </Paragraph>
        </section>

        <section className={cx('cards')}>
          {!actualEvents.length && Stub}

          {(nearestEvents as EventCardProps[]).map((i) => (
            <EventCard key={i.title} {...i} date={dayjs(i.date).format('DD MMM YYYY')} />
          ))}
        </section>
      </div>
    </article>
  );
};
