import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Support } from './ui/support';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('Support', () => {
  beforeEach(() => {
    renderWithRouter(<Support />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('Support Us');

    expect(titleElement).toBeVisible();
  });

  it('renders the subtitle correctly', () => {
    const subtitleElement1 = screen.getByText(
      'Your donations help us cover hosting, domains, licenses, and advertising for courses and events. Every donation, big or small, helps!',
    );
    const subtitleElement2 = screen.getByText('Thank you for your support!');

    expect(subtitleElement1).toBeVisible();
    expect(subtitleElement2).toBeVisible();
  });

  it('renders a button which has correct text and href', () => {
    const buttonElement = screen.getByRole('link', { name: /donate now/i });

    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute('href', 'https://opencollective.com/rsschool');
  });

  it('renders the image with correct alt text', () => {
    const imageElement = screen.getByAltText('support-us');

    expect(imageElement).toBeInTheDocument();
  });
});
