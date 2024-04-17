import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Events } from './events';

describe('Events', () => {
  it('renders the title "Meet us at events"', () => {
    render(<Events />);
    const titleElement = screen.getByText('Meet us at events');
    expect(titleElement).toBeVisible();
  });

  it('renders the subtitle correctly', () => {
    const { getByText } = render(<Events />);
    const subtitleElement = getByText(/For years we have been organizing meetups/i);
    expect(subtitleElement).toBeVisible();
  });

  it('renders the section label correctly', () => {
    const { getByText } = render(<Events />);
    const sectionLabel = getByText('events & meetups');
    expect(sectionLabel).toBeVisible();
  });

  it('renders the paragraph text correctly', () => {
    const { getByText } = render(<Events />);
    const paragraphText = getByText(/During 9 years/i);
    expect(paragraphText).toBeVisible();
  });

  it('renders two event cards', () => {
    const { getAllByRole } = render(<Events />);
    const eventCards = getAllByRole('link', { name: /View details/i });
    expect(eventCards.length).toBe(2);
  });

  it('opens event details in a new tab', () => {
    const { getAllByRole } = render(<Events />);
    const eventLinks = getAllByRole('link', { name: /View details/i });

    eventLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });
});
