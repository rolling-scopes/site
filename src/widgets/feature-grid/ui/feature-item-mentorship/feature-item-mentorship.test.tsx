import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { FeatureItemMentorship } from './feature-item-mentorship';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { Paragraph } from '@/shared/ui/paragraph';

describe('ActivityCard component', () => {
  const mockProps = {
    title: 'TestTitle',
    description: <Paragraph>Test description for the card.</Paragraph>,
    icon: MOCKED_IMAGE_PATH,
    links: [
      {
        href: 'https://test.com',
        linkTitle: 'Test link',
      },
    ],
  };

  beforeEach(() => {
    render(<FeatureItemMentorship {...mockProps} />);
  });

  it('renders correct icon', () => {
    const icon = screen.getByTestId('feature-item-mentorship-icon');

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
    expect(description).toHaveTextContent('Test description for the card.');
  });
});
