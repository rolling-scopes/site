import React from 'react';
import { Title } from '../Title/Title';

import { Paragraph } from '../Paragraph/Paragraph';
import { Subtitle } from '../Subtitle/Subtitle';
import { Tag } from '../Tag/Tag';
import { EventCard, EventCardProps } from '../EventCard/EventCard';

import './Events.scss';

const events: EventCardProps[] = [
  {
    eventType: 'Meetup',
    title: 'Autoscaling strategies for ECS Fargate',
    organizedBy: 'by AWS User Group',
    organization: '3CITY / Trójmiasto',
    date: '29 June 2023',
    time: '18:00',
    type: 'Offline',
    address: 'al. Grunwaldzka 472BGdańsk',
    href: 'https://www.meetup.com/aws-user-group-3city/events/293689995/'
  },
  {
    eventType: 'Meetup',
    title: 'How Does the Ideal CI/CD Pipeline Look?',
    organizedBy: 'Vilnius, Lithuania',
    organization: 'Rolling Scopes Meetup',
    date: '13 July 2023 2023',
    time: '19:00',
    type: 'Offline',
    address: 'Vytenio Str., 18Vilnius',
    href: 'https://www.meetup.com/the-rolling-scopes-lithuania/events/293907703/'
  }
];

export const Events: React.FC = () => (
  <div className="events container">
    <div className="events content">
      <div className="info">
        <Tag text="events & meetups" />
        <Title text="Meet us at events" asterix />
        <Subtitle text="For years we have been organizing meetups and conferences, where you can always learn something new, share your knowledge, discover new technologies, meet old and find new friends." />
        <Paragraph>
          During 9 years we have organized 150+ events for developers in different cities and
          countries.
        </Paragraph>
      </div>
      <div className="cards">
        {events.map((i) => (
          <EventCard key={i.title} {...i} />
        ))}
      </div>
    </div>
  </div>
);
