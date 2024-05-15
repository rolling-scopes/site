import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { EventCard } from './event-card';

describe('EventCard', () => {
  const mockProps = {
    eventType: 'Meetup',
    title: 'Autoscaling strategies for ECS Fargate',
    organizedBy: 'by AWS User Group',
    organization: '3CITY / Trójmiasto',
    date: '29 June 2023',
    time: '18:00',
    type: 'Offline',
    address: 'al. Grunwaldzka 472B',
    city: 'Gdańsk',
    href: 'http://test.com',
  };

  it('should render correctly', () => {
    render(<EventCard {...mockProps} />);

    expect(screen.getByText(mockProps.eventType)).toBeInTheDocument();
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.organizedBy)).toBeInTheDocument();
    expect(screen.getByText(mockProps.organization)).toBeInTheDocument();

    // verifying date/time/type individually
    expect(screen.getByText(mockProps.date, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(mockProps.time, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(mockProps.type, { exact: false })).toBeInTheDocument();

    // verifying address/city individually
    expect(screen.getByText(mockProps.address, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(mockProps.city, { exact: false })).toBeInTheDocument();

    const detailsLink = screen.getByRole('link', { name: /View details/i });
    expect(detailsLink).toHaveAttribute('href', mockProps.href);
  });
});
