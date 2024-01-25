import { render, screen } from '@testing-library/react';
import { expect, it, describe, beforeEach } from 'vitest';

import { Required } from './Required';

describe('Required', () => {
  beforeEach(() => {
    render(<Required />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('What you should know before starting');
    expect(titleElement).toBeVisible();
  });

  it('renders the subtitle correctly', () => {
    const subtitleElement = screen.getByText('Required before the start');
    expect(subtitleElement).toBeVisible();
  });

  it('renders the paragraph text correctly', () => {
    const paragraphElement = screen.getByText(
      'Solid knowledge of JavaScript, including ES6, is required for this course.'
    );
    expect(paragraphElement).toBeVisible();
  });
});
