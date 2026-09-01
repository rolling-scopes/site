import { render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { EventsSection } from './events-section';

const event = {
  id: 1,
  eventType: 'Meetup',
  title: 'RS School Meetup',
  organizedBy: 'Online',
  organization: 'The Rolling Scopes',
  date: '2026-09-05',
  time: '11:00 UTC',
  type: 'Online',
  address: 'Online',
  city: '',
  href: 'https://example.com/event',
};

const fallback = <div data-testid="events-fallback">Event photo</div>;

function mockResponse(body: unknown, ok = true) {
  vi.stubGlobal(
    'fetch',
    vi.fn().mockResolvedValue({
      ok,
      json: vi.fn().mockResolvedValue(body),
    }),
  );
}

describe('EventsSection', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('shows the Contentful fallback without a configured URL', () => {
    const fetchMock = vi.fn();

    vi.stubGlobal('fetch', fetchMock);

    render(<EventsSection eventsUrl="" fallback={fallback} />);

    expect(screen.getByTestId('events-fallback')).toBeVisible();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('replaces the fallback with up to two valid upcoming events', async () => {
    mockResponse({
      upcomingEvents: [
        event,
        {
          ...event,
          id: 2,
        },
        {
          ...event,
          id: 3,
        },
      ],
    });

    render(<EventsSection eventsUrl="https://cdn.example.com/events.json" fallback={fallback} />);

    expect(screen.getByTestId('events-fallback')).toBeVisible();
    await waitFor(() => expect(screen.getAllByTestId('event-card')).toHaveLength(2));
    expect(screen.queryByTestId('events-fallback')).not.toBeInTheDocument();
  });

  it('keeps the fallback when there are no upcoming events', async () => {
    mockResponse({ upcomingEvents: [] });

    render(
      <EventsSection eventsUrl="https://cdn.example.com/no-events.json" fallback={fallback} />,
    );

    await waitFor(() => expect(fetch).toHaveBeenCalledOnce());
    expect(screen.getByTestId('events-fallback')).toBeVisible();
  });

  it('keeps the fallback when the response is invalid', async () => {
    mockResponse({ upcomingEvents: [{ id: 1 }] });

    render(<EventsSection eventsUrl="https://cdn.example.com/invalid.json" fallback={fallback} />);

    await waitFor(() => expect(fetch).toHaveBeenCalledOnce());
    expect(screen.getByTestId('events-fallback')).toBeVisible();
  });
});
