import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Events } from './events';
import { renderWithRouter } from '@/__tests__/utils';

describe('Events', () => {
  it('renders the title "Meet us at events"', () => {
    renderWithRouter(<Events />);
    const titleElement = screen.getByText('Meet us at events');
    expect(titleElement).toBeVisible();
  });

  it('renders the subtitle correctly', () => {
    const { getByText } = renderWithRouter(<Events />);
    const subtitleElement = getByText(/For years we have been organizing meetups/i);
    expect(subtitleElement).toBeVisible();
  });

  it('renders the section label correctly', () => {
    const { getByText } = renderWithRouter(<Events />);
    const sectionLabel = getByText('events & meetups');
    expect(sectionLabel).toBeVisible();
  });

  it('renders the paragraph text correctly', () => {
    const { getByText } = renderWithRouter(<Events />);
    const paragraphText = getByText(/we have organized 150\+ events/i);
    expect(paragraphText).toBeVisible();
  });

  it('renders one or two event cards or event image', () => {
    const { getByRole } = renderWithRouter(<Events />);
    const eventCards = screen.queryAllByText(/View details/i);
    expect(eventCards.length).toBeLessThanOrEqual(2);

    if (!eventCards.length) {
      const eventImage = getByRole('img');
      expect(eventImage).toBeInTheDocument();
    }
  });

  it('opens event details in a new tab', () => {
    renderWithRouter(<Events />);
    const eventLinks = screen.queryAllByText(/View details/i);

    if (eventLinks.length) {
      eventLinks.forEach((link) => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noreferrer');
      });
    }
  });
});
