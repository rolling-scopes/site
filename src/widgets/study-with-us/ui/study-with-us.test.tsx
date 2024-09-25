import { render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { StudyWithUs } from './study-with-us';
import { studyOptions } from '../constants';

describe('School Component', () => {
  let widget: HTMLElement;
  let title: HTMLElement;
  let description: HTMLElement[];
  let options: HTMLElement[];

  beforeEach(() => {
    render(<StudyWithUs />);
    widget = screen.getByTestId('study-with-us');
    title = screen.getByTestId('widget-title');
    description = screen.getAllByTestId('paragraph');
    options = screen.getAllByTestId('option-item');
  });

  it('renders widget without crashing', () => {
    expect(widget).toBeVisible();
  });

  it('renders the component content correctly', () => {
    expect(title).toBeVisible();
    description.forEach((item) => {
      expect(item).toBeVisible();
    });
  });

  it('renders the correct options content', () => {
    options.forEach((option, index) => {
      const subtitle = within(option).getByTestId('subtitle');
      const description = within(option).getByTestId('paragraph');

      expect(subtitle).toBeInTheDocument();
      expect(subtitle.textContent).toBe(studyOptions[index].title);
      expect(description).toBeInTheDocument();
      expect(description.textContent).toBe(studyOptions[index].description);
    });
  });

  it('renders the picture with correct alt text', () => {
    const image = screen.getByAltText('Slot - mascot in glasses and works at a laptop');

    expect(image).toBeInTheDocument();
  });
});
