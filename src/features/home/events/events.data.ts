import { EventCardProps } from '@/app/components';

export const events: EventCardProps[] = [
  {
    eventType: 'Meetup',
    title: 'Autoscaling strategies for ECS Fargate',
    organizedBy: 'by AWS User Group',
    organization: '3CITY / Trójmiasto', // or country and city
    date: '2023-06-13',
    time: '18:00',
    type: 'Offline',
    address: 'al. Grunwaldzka 472B',
    city: 'Gdańsk',
    href: 'https://www.meetup.com/aws-user-group-3city/events/293689995/',
  },
  {
    eventType: 'Meetup',
    title: 'How Does the Ideal CI/CD Pipeline Look?',
    organizedBy: 'Vilnius, Lithuania',
    organization: 'Rolling Scopes Meetup',
    date: '2024-07-13',
    time: '19:00',
    type: 'Offline',
    address: 'Vytenio Str., 18',
    city: 'Vilnius',
    href: 'https://www.meetup.com/the-rolling-scopes-lithuania/events/293907703/',
  },
  {
    eventType: 'Lecture',
    title: 'Unit tests',
    organizedBy: 'Online',
    organization: 'Rolling Scopes School',
    date: '2024-08-22',
    time: '18:30 UTC+2',
    type: 'Online',
    address: 'Online',
    city: '',
    href: 'https://www.youtube.com/watch?v=LZ7kQ7fTwfA',
  },
  {
    eventType: 'Test Event',
    title: 'Test event',
    organizedBy: 'Online',
    organization: 'Rolling Scopes School',
    date: '2024-03-22',
    // date: '2024-07-22',
    time: '18:30 UTC+2',
    type: 'Online',
    address: 'Online',
    city: '',
    href: 'https://www.test.com',
  },
];
