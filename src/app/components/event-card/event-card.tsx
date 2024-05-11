import { LinkBtn } from '../button';

import './event-card.scss';

export type EventCardProps = {
  eventType: string;
  title: string;
  organizedBy: string;
  organization: string;
  date: string;
  time: string;
  type: string;
  address: string;
  city: string;
  href: string;
};

export const EventCard = ({
  eventType,
  organizedBy,
  organization,
  title,
  date,
  time,
  type,
  address,
  city,
  href,
}: EventCardProps) => (
  <div className="card">
    <div className="card-top">
      <div className="card-tag">{eventType}</div>
      <div className="organized-by">{organizedBy}</div>
      <div className="organization">{organization}</div>
      <div className="card-title">{title}</div>
      <div className="and-more">and more</div>
      <div className="card-accent" />
    </div>
    <div className="card-bottom">
      <div className="date-and-time">
        • {date} • {time} • {type}
      </div>
      <div className="address">{address}</div>
      <div className="city">{city}</div>
      <LinkBtn label="View details" href={href} arrow={false} size="small" target="_blank" />
    </div>
  </div>
);
