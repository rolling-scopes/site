import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import Image from 'next/image';
import { EventCard } from '@/entities/event';
import photo3 from '@/shared/assets/photo-3.webp';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { actualEvents, nearestEvents, rsLifetime } from '@/widgets/events/constants';

import styles from './events.module.scss';

const cx = classNames.bind(styles);

export const Events = () => {
  return (
    <article id="events" className={cx('container', 'events')}>
      <div
        className={cx('events-content', 'content', 'column-2', { 'column-with-events': actualEvents.length > 1 })}
      >
        <section className={cx('info')}>
          <SectionLabel>events & meetups</SectionLabel>
          <WidgetTitle mods="asterisk">Meet us at events</WidgetTitle>
          <Paragraph fontSize="large">
            For years we have been organizing meetups and conferences, where you can always learn
            something new, share your knowledge, discover new technologies, meet old and find new
            friends.
          </Paragraph>
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
          {!actualEvents.length && (
            <Image src={photo3} alt="Speaker presenting at an event" className={cx('event-img')} />
          )}

          {nearestEvents.map((event) => (
            <EventCard
              key={event.title}
              {...event}
              date={dayjs(event.date).format('DD MMM YYYY')}
            />
          ))}
        </section>
      </div>
    </article>
  );
};
