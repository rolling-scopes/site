import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MediaGrid } from './media-grid';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

const media = Array.from({ length: 18 }, (_, i) => (
  <img src={MOCKED_IMAGE_PATH.src} alt="alt" key={`${MOCKED_IMAGE_PATH.src}-${i}`} />
));

describe('Media Grid', () => {
  beforeEach(() => {
    render(<MediaGrid>{media}</MediaGrid>);
  });

  it('renders all images for large screens', () => {
    const imageElements = screen.getAllByRole('img');

    expect(imageElements).toHaveLength(18);
  });
});
