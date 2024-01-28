import { render, screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';

import { CourseMain } from './course-main';

describe('CourseMain', () => {
  beforeEach(() => {
    render(<CourseMain />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('Node.js course');
    expect(titleElement).toBeVisible();
  });

  it('renders the section label correctly', () => {
    const labelElement = screen.getByText('avialable');
    expect(labelElement).toBeVisible();
  });

  it('renders enroll button with correct label and href', () => {
    const buttonElement = screen.getByRole('link', { name: /enroll/i });
    expect(buttonElement).toBeVisible();
    expect(buttonElement).toHaveAttribute(
      'href',
      'https://wearecommunity.io/events/nodejs-rs-2024q1'
    );
  });

  it('renders the image with correct roles', () => {
    const imageElement = screen.getByLabelText('Node.js Icon');
    expect(imageElement).toBeInTheDocument();
  });
});
