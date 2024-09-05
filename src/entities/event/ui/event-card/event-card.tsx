import classNames from 'classnames/bind';
import { Event } from '@/entities/event';
import { LinkCustom } from '@/shared/ui/link-custom';

import styles from './event-card.module.scss';

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
}: Event) => {
  const dateInfo: string =
    organizedBy.toLowerCase() === 'online'
      ? `• ${date} • ${time}`
      : `• ${date} • ${time} • ${type}`;

  return (
    <article className={cx('event-card')} data-testid="event-card">
      <div className={cx('event-card__header')} data-testid="card-header">
        <p className={cx('event-tag')}>{eventType}</p>
        <section className={cx('about-organization')} data-testid="organization-section">
          <h4 className={cx('organized-by')}>{organizedBy}</h4>
          <h3 className={cx('event-organization')}>{organization}</h3>
        </section>
        <section className={cx('about-event')} data-testid="about-section">
          <h2 className={cx('event-title')}>{title}</h2>
          <p className={cx('event-additional-info')}>{additionalInfo}</p>
        </section>
      </div>

      <div className={cx('event-card__info')} data-testid="event-info">
        <time dateTime={date} className={cx('event-date')}>
          {dateInfo}
        </time>
        <address className={cx('event-address')}>
          {address}
          <br />
          {city}
        </address>
        <LinkCustom href={href} variant="rounded" target="_blank">
          View details
        </LinkCustom>
      </div>
    </article>
  );
};
