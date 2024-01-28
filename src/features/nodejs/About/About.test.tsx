import { render, screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import { About } from './About';
import { nodejsCourseInfo } from './About'; // Assuming it's exported from the file

describe('About', () => {
  beforeEach(() => {
    render(<About />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('About');
    expect(titleElement).toBeVisible();
  });

  it('renders all course info correctly', () => {
    nodejsCourseInfo.forEach(({ title, info }) => {
      const titleElement = screen.getByText(title);
      const infoElement = screen.getByText(info);
      expect(titleElement).toBeVisible();
      expect(infoElement).toBeVisible();
    });
  });

  it('renders button with correct label and href', () => {
    const buttonElement = screen.getByRole('link', { name: /become a student/i });
    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute(
      'href',
      'https://wearecommunity.io/events/nodejs-rs-2024q1'
    );
  });
});
