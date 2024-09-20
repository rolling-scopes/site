import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HeroPage } from './hero-page';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('HeroPage component', () => {
  it('renders the title correctly', () => {
    renderWithRouter(<HeroPage />);
    const titleElement = screen.getByText('The Rolling Scopes');

    expect(titleElement).toBeVisible();
  });

  it('renders the subtitle correctly', () => {
    renderWithRouter(<HeroPage />);
    const subtitleElement = screen.getByText('an international community of developers');

    expect(subtitleElement).toBeVisible();
  });

  it('renders description title correctly', () => {
    renderWithRouter(<HeroPage />);
    const descTitle = screen.getByText('Connecting people, growing together, having fun');

    expect(descTitle).toBeVisible();
  });
});
