import { render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { StudyWithUs } from './study-with-us';
import { studyOptions } from '../constants';

describe('School Component', () => {
  beforeEach(() => {
    render(<StudyWithUs />);
  });

  it('renders the component title correctly', () => {
    const titleElement = screen.getByText('Study with RS School');

    expect(titleElement).toBeVisible();
  });

  it('renders the component subtitle correctly', () => {
    const subtitleElement = screen.getByText(/RS School is a free/i);

    expect(subtitleElement).toBeVisible();
  });

  it('renders the study options correctly', () => {
    const options = screen.getAllByRole('heading', { level: 3 });

    expect(options.length).toBe(3);
  });

  it('renders the correct description for each study option', () => {
    const options = screen.getAllByTestId('option-item');

    options.forEach((option, index) => {
      const description = within(option).getByTestId('paragraph');

      expect(description).toBeInTheDocument();
      expect(description.textContent).toBe(studyOptions[index].description);
    });
  });

  it('renders the picture with correct alt text', () => {
    const image = screen.getByAltText('education');

    expect(image).toBeInTheDocument();
  });
});
