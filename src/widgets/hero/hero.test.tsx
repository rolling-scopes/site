import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Hero } from './ui/hero';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('Hero', () => {
  it('renders the title correctly', () => {
    renderWithRouter(<Hero />);
    const titleElement = screen.getByText('The Rolling Scopes');

    expect(titleElement).toBeVisible();
  });

  it('renders the subtitle correctly', () => {
    renderWithRouter(<Hero />);
    const subtitleElement = screen.getByText('an international community of developers');

    expect(subtitleElement).toBeVisible();
  });

  it('renders description title correctly', () => {
    renderWithRouter(<Hero />);
    const descTitle = screen.getByText('Connecting people, growing together, having fun');

    expect(descTitle).toBeVisible();
  });
});
