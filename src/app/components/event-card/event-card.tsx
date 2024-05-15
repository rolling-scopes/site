import classNames from 'classnames/bind';

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
    <div className={cx('event-card')}>
      <section className={cx('event-card__header')}>
        <div className={cx('event-tag')}>{eventType}</div>
        <div className={cx('about-organization')}>
          <h4 className={cx('organized-by')}>{organizedBy}</h4>
          <h3 className={cx('event-organization')}>{organization}</h3>
        </div>
        <div className={cx('about-event')}>
          <h2 className={cx('event-title')}>{title}</h2>
          <p className={cx('event-additional-info')}>{additionalInfo}</p>
        </div>
      </section>

      <section className={cx('event-card__info')}>
        <div className={cx('event-date')}>{dateInfo}</div>
        <p className={cx('event-address')}>
          {address}
          <br />
          {city}
        </p>
        <a href={href} target="_blank" rel="noreferrer" className={cx('details-button')}>
          View details
        </a>
      </section>
    </div>
  );
};
