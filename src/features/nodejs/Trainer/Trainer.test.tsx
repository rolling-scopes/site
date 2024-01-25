import { render, screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import { Trainer } from './Trainer';

describe('Trainer', () => {
  beforeEach(() => {
    render(<Trainer />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('Our trainer');
    expect(titleElement).toBeVisible();
  });

  it('renders the trainer info correctly', () => {
    const trainerNameElement = screen.getByText('Maksim Shylau');
    const trainerTitleElement = screen.getByText('Senior Software Engineer at Epam');
    const trainerDescriptionElement = screen.getByText(
      /Maksim Shylau is a professional with around 6 years/i
    );

    expect(trainerNameElement).toBeVisible();
    expect(trainerTitleElement).toBeVisible();
    expect(trainerDescriptionElement).toBeVisible();
  });

  it('renders the image with correct alt text', () => {
    const imageElement = screen.getByAltText('nodejsTrainer');
    expect(imageElement).toBeInTheDocument();
  });
});
