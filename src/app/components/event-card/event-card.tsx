import classNames from 'classnames/bind';
import { LinkCustom } from '../link-custom';

import styles from './event-card.module.scss';

export type EventCardProps = {
  eventType: string;
  title: string;
  organizedBy: string; // organizer name or place (e.g. 'Vilnius, Lithuania' or 'online')
  organization: string;
  additionalInfo?: string;
  date: string;
  time: string;
  type: string;
  address: string;
  city: string;
  href: string;
};

const cx = classNames.bind(styles);

export const EventCard = ({
  eventType,
  organizedBy,
  organization,
  title,
  additionalInfo = 'and more',
  date,
  time,
  type,
  address,
  city,
  href,
}: EventCardProps) => {
  const dateInfo: string =
    organizedBy.toLowerCase() === 'online'
      ? `• ${date} • ${time}`
      : `• ${date} • ${time} • ${type}`;

  return (
    <article className={cx('event-card')}>
      <div className={cx('event-card__header')}>
        <p className={cx('event-tag')}>{eventType}</p>
        <section className={cx('about-organization')}>
          <h4 className={cx('organized-by')}>{organizedBy}</h4>
          <h3 className={cx('event-organization')}>{organization}</h3>
        </section>
        <section className={cx('about-event')}>
          <h2 className={cx('event-title')}>{title}</h2>
          <p className={cx('event-additional-info')}>{additionalInfo}</p>
        </section>
      </div>

      <div className={cx('event-card__info')}>
        <time dateTime={date} className={cx('event-date')}>
          {dateInfo}
        </time>
        <address className={cx('event-address')}>
          {address}
          <br />
          {city}
        </address>
        <LinkCustom href={href} button={true} size="small" target="_blank">
          View details
        </LinkCustom>
      </div>
    </article>
  );
};
