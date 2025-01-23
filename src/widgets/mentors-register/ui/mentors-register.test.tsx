import { render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

import { MentorsRegister } from './mentors-register';

describe('MentorsRegister Component', () => {
  let widget: HTMLElement;
  let title: HTMLElement;
  let text: HTMLElement[];

  beforeEach(() => {
    render(<MentorsRegister />);
    widget = screen.getByTestId('mentoring-register-wrapper');
    title = screen.getByTestId('widget-title');
    text = screen.getAllByTestId('paragraph');
  });

  afterEach(() => {
    // Clean up after each test
  });

  it('renders widget without crashing', () => {
    expect(widget).toBeVisible();
  });

  it('displays correct title', () => {
    expect(title).toBeVisible();
  });

  it('displays correct text', () => {
    text.forEach((paragraph) => {
      expect(paragraph).toBeVisible();
      expect(paragraph).not.toBeEmptyDOMElement();
      expect(paragraph.innerHTML).not.toBeNull();
    });
  });

  it('should render without crashing', () => {
    expect(screen.getByTestId('mentors-register')).toBeInTheDocument();
  });
});
