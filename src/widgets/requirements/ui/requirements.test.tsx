import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Requirements } from './requirements';
import { renderWithRouter } from '@/shared/__tests__/utils';

const registerLink = 'https://app.rs.school/registry/mentor';
const requirements = [
  "Desire to help students. If you've been working with JS/TS in production for more than 6 months, then that's great",
  'Desire to mentor 2 to 6 students online or in person',
  'Ability to spend 3 to 5 hours per week',
];
const responsibilities = [
  'Conducting an interview',
  'Code review tasks',
  "Answers to students' questions",
];

describe('Requirements', () => {
  beforeEach(() => {
    renderWithRouter(<Requirements />);
  });

  it('renders without crashing', () => {
    const requirementWidget = screen.getByTestId('requirements');

    expect(requirementWidget).toBeVisible();
  });

  it('renders the "Requirements for mentors" title', () => {
    expect(screen.getByText('Requirements for mentors')).toBeVisible();
  });

  it.each([requirements])('renders the "Requirements for mentors" description with string %s', (s) => {
    expect(screen.getByText(s)).toBeVisible();
  });

  it('renders the "Mentor responsibilities" title', () => {
    expect(screen.getByText('Mentor responsibilities')).toBeVisible();
  });

  it.each([responsibilities])('renders the "Mentor responsibilities" description with string %s', (s) => {
    expect(screen.getByText(s)).toBeVisible();
  });

  it('renders the "Register as a mentor" button', () => {
    const button = screen.getByRole('link', { name: /Register as a mentor/i });

    expect(button).toHaveAttribute('href', registerLink);
  });
});
