import type { EventRecord } from '../types';

type EventsOutput = {
  upcomingEvents: EventRecord[];
};

const eventStringFields = [
  'eventType',
  'title',
  'organizedBy',
  'organization',
  'date',
  'time',
  'type',
  'address',
  'city',
  'href',
] as const;

function isEventRecord(value: unknown): value is EventRecord {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const event = value as Record<string, unknown>;

  return (
    typeof event.id === 'number'
    && eventStringFields.every((field) => typeof event[field] === 'string')
    && (event.additionalInfo === undefined || typeof event.additionalInfo === 'string')
  );
}

function isEventsOutput(value: unknown): value is EventsOutput {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const output = value as Record<string, unknown>;

  return Array.isArray(output.upcomingEvents) && output.upcomingEvents.every(isEventRecord);
}

class EventStore {
  public loadUpcomingEvents = async (url: string) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Error while loading events.');
    }

    const output: unknown = await response.json();

    if (!isEventsOutput(output)) {
      throw new Error('Invalid events response.');
    }

    return output.upcomingEvents;
  };
}

export const eventStore = new EventStore();
