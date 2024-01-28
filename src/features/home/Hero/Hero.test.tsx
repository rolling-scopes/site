import { render, screen } from '@testing-library/react';
import { it, expect, describe } from 'vitest';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders the title correctly', () => {
    render(<Hero />);
    const titleElement = screen.getByText('The Rolling Scopes');
    expect(titleElement).toBeVisible();
  });

  it('renders the subtitle correctly', () => {
    render(<Hero />);
    const subtitleElement = screen.getByText('an international community of developers');
    expect(subtitleElement).toBeVisible();
  });

  it('renders description title correctly', () => {
    render(<Hero />);
    const descTitle = screen.getByText('Connecting people, growing together, having fun');
    expect(descTitle).toBeVisible();
  });

  it('renders three tags', () => {
    render(<Hero />);
    const tags = screen.getAllByRole('link');
    expect(tags.length).toBe(3);
  });

  it('renders the correct tag labels', () => {
    render(<Hero />);
    const tag1 = screen.getByRole('link', { name: /education/i });
    const tag2 = screen.getByRole('link', { name: /events & meetups/i });
    const tag3 = screen.getByRole('link', { name: /community building/i });

    expect(tag1).toBeInTheDocument();
    expect(tag2).toBeInTheDocument();
    expect(tag3).toBeInTheDocument();
  });
});
