import cn from 'classnames';
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import { Event, EventCard } from '@/entities/event';
import photo3 from '@/shared/assets/photo-3.webp';
import { getActualData } from '@/shared/helpers/getActualData';
import { Image } from '@/shared/ui/image';
import { Paragraph } from '@/shared/ui/paragraph';
import { SectionLabel } from '@/shared/ui/section-label';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import { events } from 'data';

import styles from './events.module.scss';

const cx = classNames.bind(styles);

const displayedCardsQuantity = 2;

const actualEvents: Event[] = getActualData({
  data: events,
  staleAfter: 3,
});

const nearestEvents = actualEvents.slice(0, displayedCardsQuantity);

const Stub = <Image src={photo3} />;

export const Events = () => {
  const rsLifetime = dayjs().diff('2013', 'year');

  return (
    <article id="events" className={cn(cx('events'), 'container')}>
      <div className={cn(cx('events', 'content'), 'content')}>
        <section className={cx('info')}>
          <SectionLabel>events & meetups</SectionLabel>
          <WidgetTitle mods="asterisk">Meet us at events</WidgetTitle>
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

          {(nearestEvents as Event[]).map((i) => (
            <EventCard key={i.title} {...i} date={dayjs(i.date).format('DD MMM YYYY')} />
          ))}
        </section>
      </div>
    </article>
  );
};
