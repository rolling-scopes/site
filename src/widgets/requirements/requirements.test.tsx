import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Requirements } from './ui/requirements';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('Requirements', () => {
  beforeEach(() => {
    renderWithRouter(<Requirements />);
  });

  it('renders the "Requirements for mentors" title', () => {
    expect(screen.getByText('Requirements for mentors')).toBeVisible();
  });

  it('renders the "Requirements for mentors" description', () => {
    const requirement1 =
      "Desire to help students. If you've been working with JS/TS in production for more than 6 months, then that's great.";

    expect(screen.getByText(requirement1)).toBeVisible();
    expect(screen.getByText('Desire to mentor 2 to 6 students online or in person')).toBeVisible();
    expect(screen.getByText('Ability to spend 3 to 5 hours per week')).toBeVisible();
  });

  it('renders the "Mentor responsibilities" title', () => {
    expect(screen.getByText('Mentor responsibilities')).toBeVisible();
  });

  it('renders the "Mentor responsibilities" description', () => {
    expect(screen.getByText('Conducting an interview')).toBeVisible();
    expect(screen.getByText('Code review tasks')).toBeVisible();
    expect(screen.getByText("Answers to students' questions")).toBeVisible();
  });

  it('renders the "Register as a mentor" button', () => {
    const button = screen.getByRole('link', { name: /Register as a mentor/i });

    expect(button).toBeVisible();
    expect(button).toHaveAttribute('href', 'https://app.rs.school/registry/mentor');
  });
});
