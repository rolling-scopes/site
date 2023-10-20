import React from 'react';

import './EventCard.scss';

export interface EventCardProps {
  eventType: string; // Meetup
  title: string;
  organizedBy: string;
  organization: string;
  date: string;
  time: string;
  type: string; // Offline | Online
  address: string;
  href: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  eventType,
  organizedBy,
  organization,
  title,
  date,
  time,
  type,
  address,
  href
}) => (
  <div className="card">
    <div className="card-top">
      <div className="card-tag">{eventType}</div>
      <div className="organizedBy">{organizedBy}</div>
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
      <a href={href} target="_blank" rel="noreferrer" className="details-button">
        View details
      </a>
    </div>
  </div>
);
