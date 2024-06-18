import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { About } from './about';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('About', () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('Who we are');

    expect(titleElement).toBeVisible();
  });

  it('renders the subtitle correctly', () => {
    const subtitleElement = screen.getByText(/Our mission is to provide free education/i);

    expect(subtitleElement).toBeVisible();
  });

  it('renders the correct first paragraph', () => {
    const firstParagraphElement = screen.getByText(/The Rolling Scopes was founded in 2013/i);

    expect(firstParagraphElement).toBeVisible();
  });

  it('renders the correct second paragraph', () => {
    const secondParagraphElement = screen.getByText(
      /The Rolling Scopes brings together developers/i,
    );

    expect(secondParagraphElement).toBeVisible();
  });

  it('renders the image correctly', () => {
    const imageElement = screen.getByAltText('Logo');

    expect(imageElement).toBeVisible();
  });
});
