import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Speakers } from './ui/speakers';

describe('Speakers', () => {
  beforeEach(() => {
    render(<Speakers />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('Speakers wanted');

    expect(titleElement).toBeVisible();
  });

  it('renders both subtitles correctly', () => {
    const subtitleElements = screen.getAllByRole('heading', { level: 3 });

    expect(subtitleElements).toHaveLength(4);
  });

  it('renders the name correctly', () => {
    const nameElement = screen.getByTestId('contact-name');

    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toBeVisible();
  });

  it('renders the email correctly', () => {
    const emailElement = screen.getByText('rolling.scopes@gmail.com');

    expect(emailElement).toBeVisible();
  });

  it('renders the image correctly', () => {
    const imageElement = screen.getByAltText('speakers-wanted');

    expect(imageElement).toBeInTheDocument();
  });
});
