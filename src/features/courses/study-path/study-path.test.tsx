import { screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';
import { renderWithRouter } from '@/__tests__/utils';
import { StudyPath } from './study-path';

describe('StudyPath', () => {
  beforeEach(() => {
    renderWithRouter(<StudyPath />);
  });

  it('renders the title', () => {
    expect(screen.getByText('Choose what you want to learn')).toBeVisible();
  });

  it('renders the paragraph', () => {
    const paragraphElem = screen.getByTestId('my-paragraph');
    expect(paragraphElem.textContent).toMatch(/^A full-stack developer is.+/);
    expect(paragraphElem.textContent).toMatch(/.+faster product development.$/);
  });

  it('renders the StageCard for "Pre-school"', () => {
    expect(screen.getByText('Pre-school')).toBeVisible();
    expect(screen.getByText('Pre-school upturn')).toBeVisible();
    expect(screen.getByRole('link', { name: /Pre-school upturn/i })).toHaveAttribute(
      'href',
      'https://rs.school/js-stage0/'
    );
  });

  it('renders the StageCard for "JS/TS/FE Fundamentals"', () => {
    expect(screen.getByText('JS/TS/FE Fundamentals')).toBeVisible();
    expect(screen.getByText('JS/TS/FE Fundamentals (RU) invert')).toBeVisible();
    expect(screen.getByText('JS/TS/FE Fundamentals (EN) invert')).toBeVisible();
    expect(
      screen.getByRole('link', { name: /JS\/TS\/FE Fundamentals \(RU\) invert/i })
    ).toHaveAttribute('href', 'https://rs.school/js/');
    expect(
      screen.getByRole('link', { name: /JS\/TS\/FE Fundamentals \(EN\) invert/i })
    ).toHaveAttribute('href', 'https://rs.school/js-en/');
  });

  it('renders the StageCard for "React or Angular"', () => {
    expect(screen.getByText('React or Angular')).toBeVisible();
    expect(screen.getByText('React invert')).toBeVisible();
    expect(screen.getByRole('link', { name: /React invert/i })).toHaveAttribute(
      'href',
      'https://rs.school/react/'
    );
  });
});
