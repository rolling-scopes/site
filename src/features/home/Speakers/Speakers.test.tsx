import { render, screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';
import { Speakers } from './Speakers';

describe('Speakers', () => {
  beforeEach(() => {
    render(<Speakers />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('Speakers wanted');
    expect(titleElement).toBeVisible();
  });

  it('renders both subtitles correctly', () => {
    const subtitleElements = document.getElementsByClassName('subtitle');
    expect(subtitleElements.length).toBe(2);
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
