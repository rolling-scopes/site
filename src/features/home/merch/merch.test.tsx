import { render, screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';
import { Merch } from './merch';

describe('Merch', () => {
  beforeEach(() => {
    render(<Merch />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('RS merch');
    expect(titleElement).toBeVisible();
  });

  it('renders the subtitle correctly', () => {
    const subtitleElement = screen.getByText('Are you an RS sloth fan and looking for RS merch?');
    expect(subtitleElement).toBeVisible();
  });

  it('renders the paragraph correctly', () => {
    const paragraphText = screen.getByText(/The wait is almost over/i);
    expect(paragraphText).toBeVisible();
  });

  it('renders the merch "Discover merch assets" button with correct href', () => {
    const buttonElement = screen.getByRole('link', { name: /Discover merch assets/i });
    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute('href', 'https://sloths.rs.school/');
  });

  it('renders the image with alt text', () => {
    const imageElement = screen.getByAltText('speakers-wanted');
    expect(imageElement).toBeVisible();
  });
});
