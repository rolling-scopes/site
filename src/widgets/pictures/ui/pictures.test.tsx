import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { Pictures } from '@/widgets/pictures';

describe('Pictures', () => {
  beforeEach(() => {
    renderWithRouter(<Pictures />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('The Rolling Scopes in pictures');

    expect(titleElement).toBeVisible();
  });

  it('renders the paragraph correctly', () => {
    const paragraphText = screen.getByText(/Want to see photos/i);

    expect(paragraphText).toBeVisible();
  });

  it('renders the carousel with images', () => {
    const images = screen.getAllByTestId('carousel-image');

    expect(images.length).toBe(11);
  });

  it('renders the social media links correctly', () => {
    const socialMediaLinks = screen.getAllByRole('link');

    expect(socialMediaLinks.length).toBe(4);
    socialMediaLinks.forEach((link) => {
      expect(link).toHaveAttribute('href');
    });
  });
});
