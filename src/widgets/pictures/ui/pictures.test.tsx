import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { renderWithRouter } from '@/shared/__tests__/utils';
import { Pictures } from '@/widgets/pictures';

describe('Pictures', () => {
  beforeEach(() => {
    renderWithRouter(<Pictures />);
  });

  it('renders all the component pieces as expected', () => {
    const title = screen.getByTestId('widget-title');
    const images = screen.getAllByTestId('carousel-image');
    const paragraph = screen.getByTestId('paragraph');
    const socialMediaLinks = screen.getAllByTestId('social-media');

    expect(title).toBeVisible();
    expect(paragraph).toBeVisible();
    expect(images.length).toBe(11);
    expect(socialMediaLinks.length).toBe(4);
  });
});
