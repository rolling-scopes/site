import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

import { Merch } from './merch';
import { MOCKED_MERCH_DATA } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('Merch', () => {
  beforeEach(() => {
    renderWithRouter(<Merch />);
  });

  it('renders the content correctly', () => {
    const titleElement = screen.getByText(MOCKED_MERCH_DATA.title);
    const subtitleElement = screen.getByText(MOCKED_MERCH_DATA.subtitle);
    const paragraphText = screen.getByText(new RegExp(MOCKED_MERCH_DATA.paragraph, 'i'));

    expect(titleElement).toBeVisible();
    expect(subtitleElement).toBeVisible();
    expect(paragraphText).toBeVisible();
  });

  it('renders the merch "Discover merch assets" button with correct href', () => {
    const buttonElement = screen.getByRole('link', { name: new RegExp(MOCKED_MERCH_DATA.buttonText, 'i') });

    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute('href', MOCKED_MERCH_DATA.buttonLink);
  });

  it('renders the image with alt text', () => {
    const imageElement = screen.getByTestId('collage-with-merch');

    expect(imageElement).toBeVisible();
    expect(imageElement).toHaveAttribute('alt', MOCKED_MERCH_DATA.imageAltText);
  });
});
