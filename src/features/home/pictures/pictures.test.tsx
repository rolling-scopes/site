import { render, screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';
import { Pictures } from './pictures';

describe('Pictures', () => {
  beforeEach(() => {
    render(<Pictures />);
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
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(9);
  });

  it('renders the social media links correctly', () => {
    const socialMediaLinks = screen.getAllByRole('link');
    expect(socialMediaLinks.length).toBe(4);
    socialMediaLinks.forEach((link) => {
      expect(link).toHaveAttribute('href');
    });
  });
});
