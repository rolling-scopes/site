import classNames from 'classnames/bind';

import { Event } from '@/entities/event';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Subtitle } from '@/shared/ui/subtitle';

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
      <div className={cx('card-header')} data-testid="card-header">
        <p className={cx('event-tag')}>{eventType}</p>
        <section className={cx('about-organization')} data-testid="organization-section">
          <Subtitle as="h4" weight="regular" className={cx('organized-by')}>
            {organizedBy}
          </Subtitle>
          <Subtitle as="h3" weight="normal" className={cx('event-organization')}>
            {organization}
          </Subtitle>
        </section>
        <section className={cx('about-event')} data-testid="about-section">
          <Subtitle as="h2" weight="normal" className={cx('event-title')}>
            {title}
          </Subtitle>
          <p title={additionalInfo} className={cx('event-additional-info')}>
            {additionalInfo}
          </p>
        </section>
      </div>

      <div className={cx('card-info')} data-testid="event-info">
        <time dateTime={date} className={cx('event-date')}>
          {dateInfo}
        </time>
        <address className={cx('event-address')}>
          {address}
          <br />
          {city}
        </address>
        <LinkCustom href={href} variant="rounded" external>
          View details
        </LinkCustom>
      </div>
    </article>
  );
};
