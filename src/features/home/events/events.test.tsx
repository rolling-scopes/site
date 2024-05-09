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
    const paragraphText = getByText(/During 9 years/i);
    expect(paragraphText).toBeVisible();
  });

  it('renders two event cards', () => {
    const { getAllByRole } = renderWithRouter(<Events />);
    const eventCards = getAllByRole('link', { name: /View details/i });
    expect(eventCards.length).toBe(2);
  });

  it('opens event details in a new tab', () => {
    const { getAllByRole } = renderWithRouter(<Events />);
    const eventLinks = getAllByRole('link', { name: /View details/i });

    eventLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });
});
