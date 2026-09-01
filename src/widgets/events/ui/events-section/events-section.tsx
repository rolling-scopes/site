'use client';

import { ReactNode } from 'react';
import useSWR from 'swr';

import { EventCard } from '@/entities/event';
import { eventStore } from '@/entities/event/model/store';

import styles from './events-section.module.scss';

type EventsSectionProps = {
  fallback?: ReactNode;
  eventsUrl?: string;
};

export const EventsSection = ({
  fallback,
  eventsUrl = process.env.NEXT_PUBLIC_EVENTS_JSON_URL,
}: EventsSectionProps) => {
  const { data: events } = useSWR(eventsUrl || null, eventStore.loadUpcomingEvents);
  const nearestEvents = events?.slice(0, 2) ?? [];

  if (nearestEvents.length === 0) {
    return fallback;
  }

  return (
    <div className={styles['event-cards']}>
      {nearestEvents.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};
