import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ActivityCard } from './activity-card';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

describe('ActivityCard component', () => {
  const mockProps = {
    title: 'TestTitle',
    description: 'Test description for the card.',
    icon: MOCKED_IMAGE_PATH,
    links: [
      {
        href: 'https://test.com',
        linkTitle: 'Test link',
      },
    ],
  };

  beforeEach(() => {
    render(<ActivityCard {...mockProps} />);
  });

  it('renders correct icon', () => {
    const icon = screen.getByTestId('activity-card-icon');

    expect(icon).toBeVisible();
    expect(icon).toHaveAttribute('src', mockProps.icon.src);
  });

  it('displays correct title', () => {
    const title = screen.getByTestId('subtitle');

    expect(title).toBeVisible();
    expect(title.innerHTML).toBe(mockProps.title);
  });

  it('displays correct description', () => {
    const description = screen.getByTestId('paragraph');

    expect(description).toBeVisible();
    expect(description.innerHTML).toBe(mockProps.description);
  });

  it('displays correct link', () => {
    const links = screen.getAllByTestId('activity-card-link');

    links.forEach((link, i) => {
      expect(link).toBeVisible();
      expect(link).toHaveAttribute('href', mockProps.links[i].href);
      expect(link.innerHTML).toBe(mockProps.links[i].linkTitle);
    });
  });
});
