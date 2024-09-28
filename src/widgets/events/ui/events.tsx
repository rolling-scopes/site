import cn from 'classnames';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import { EventCard } from '@/entities/event';
import photo3 from '@/shared/assets/photo-3.webp';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { actualEvents, nearestEvents, rsLifetime } from '@/widgets/events/constants.ts';

import styles from './events.module.scss';

const cx = classNames.bind(styles);

export const Events = () => {
  return (
    <article id="events" className={cn(cx('events'), 'container')}>
      <div className={cn(cx('events', 'content'), 'content')}>
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
            {rsLifetime}
            years we have organized 150+ events for developers in different
            cities and countries.
          </Paragraph>
        </section>

        <section className={cx('cards')}>
          {!actualEvents.length && (<Image src={photo3} alt="Speaker presenting at a event" className={cx('event-img')} />)}

          {(nearestEvents).map((event) => (
            <EventCard key={event.title} {...event} date={dayjs(event.date).format('DD MMM YYYY')} />
          ))}
        </section>
      </div>
    </article>
  );
};
