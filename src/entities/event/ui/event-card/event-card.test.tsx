import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { EventCard } from './event-card';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('EventCard', () => {
  const mockProps = {
    eventType: 'Meetup',
    title: 'Test Event',
    organizedBy: 'John Doe',
    organization: 'Tech Talks',
    additionalInfo: 'and more',
    date: 'Dec 25, 2023',
    time: '13:00',
    type: 'Offline',
    address: '123 Main St',
    city: 'Metropolis City',
    href: 'http://test.com',
  };

  it('renders without crashing', () => {
    renderWithRouter(<EventCard {...mockProps} />);
    const card = screen.getByTestId('event-card');

    expect(card).toBeVisible();
  });

  it('displays card header', () => {
    renderWithRouter(<EventCard {...mockProps} />);
    const header = screen.getByTestId('card-header');

    expect(header).toBeVisible();
  });

  it('displays correct event type', () => {
    renderWithRouter(<EventCard {...mockProps} />);
    const eventType = screen.getByText(mockProps.eventType);

    expect(eventType).toBeVisible();
  });

  it('displays correct organization section', () => {
    renderWithRouter(<EventCard {...mockProps} />);
    const organizationSection = screen.getByTestId('organization-section');
    const organizedBy = screen.getByText(mockProps.organizedBy);
    const organization = screen.getByText(mockProps.organization);

    expect(organizationSection).toBeVisible();
    expect(organizedBy).toBeVisible();
    expect(organization).toBeVisible();
  });

  it('displays correct about section', () => {
    renderWithRouter(<EventCard {...mockProps} />);
    const aboutSection = screen.getByTestId('about-section');
    const title = screen.getByText(mockProps.title);
    const additionalInfo = screen.getByText(mockProps.additionalInfo);

    expect(aboutSection).toBeVisible();
    expect(title).toBeVisible();
    expect(additionalInfo).toBeVisible();
  });

  it('displays event info container', () => {
    renderWithRouter(<EventCard {...mockProps} />);
    const info = screen.getByTestId('event-info');

    expect(info).toBeVisible();
  });

  it('displays correct event date', () => {
    renderWithRouter(<EventCard {...mockProps} />);
    const date = screen.getByText(mockProps.date, { exact: false });
    const time = screen.getByText(mockProps.time, { exact: false });
    const type = screen.getByText(mockProps.type, { exact: false });

    expect(date).toBeVisible();
    expect(time).toBeVisible();
    expect(type).toBeVisible();
  });

  it('displays correct event location', () => {
    renderWithRouter(<EventCard {...mockProps} />);
    const address = screen.getByText(mockProps.address, { exact: false });
    const city = screen.getByText(mockProps.city, { exact: false });

    expect(address).toBeVisible();
    expect(city).toBeVisible();
  });

  it('displays correct link', () => {
    renderWithRouter(<EventCard {...mockProps} />);
    const detailsLink = screen.getByRole('link', { name: /View details/i });

    expect(detailsLink).toHaveAttribute('href', mockProps.href);
  });
});
