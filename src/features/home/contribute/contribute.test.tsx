import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Contribute } from './contribute';
import { renderWithRouter } from '@/__tests__/utils';

describe('Contribute', () => {
  beforeEach(() => {
    renderWithRouter(<Contribute />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('How to Contribute');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the subtitle correctly', () => {
    const subtitleElement = screen.getByText(
      /Contributing to The Rolling Scopes is not only a great way/i,
    );
    expect(subtitleElement).toBeInTheDocument();
  });

  it('renders the options correctly', () => {
    const mentorOption = screen.getByText('Mentorship');
    const contributorOption = screen.getByText('Developer / Coordinator / Trainer');
    expect(mentorOption).toBeInTheDocument();
    expect(contributorOption).toBeInTheDocument();
  });

  it('renders the contribute image correctly', () => {
    const imageElement = screen.getByAltText('contribute');
    expect(imageElement).toBeInTheDocument();
  });

  it('renders additional paragraph correctly', () => {
    const paragraphElement = screen.getByText(/Additionally, we provide feedback on LinkedIn/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
