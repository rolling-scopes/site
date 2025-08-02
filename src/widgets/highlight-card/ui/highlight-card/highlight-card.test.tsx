import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HighlightCard } from './highlight-card';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

describe('HighlightCard component', () => {
  beforeEach(() => {
    render(
      <HighlightCard
        heading="TestTitle"
        content="Test description for the card."
        icon={MOCKED_IMAGE_PATH}
      />,
    );
  });

  it('renders the content correctly', () => {
    const icon = screen.getByTestId('highlight-icon');
    const description = screen.getByText('Test description for the card.');
    const title = screen.getByText('TestTitle');

    expect(icon).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
