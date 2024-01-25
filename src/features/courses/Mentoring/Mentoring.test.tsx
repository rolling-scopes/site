import { screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';
import { renderWithRouter } from '@/shared/utils';
import { Mentoring } from './Mentoring';

describe('Mentoring', () => {
  beforeEach(() => {
    renderWithRouter(<Mentoring />);
  });

  it('renders the title', () => {
    expect(screen.getByText('Mentoring is for you if you')).toBeVisible();
  });

  it('renders mentorship benefit 1', () => {
    expect(
      screen.getByText('Feel the desire to share your experience and knowledge')
    ).toBeVisible();
  });

  it('renders mentorship benefit 2', () => {
    expect(screen.getByText('Feeling a lack of communication')).toBeVisible();
  });

  it('renders mentorship benefit 3', () => {
    expect(screen.getByText('You would like to upgrade your soft & hard skills')).toBeVisible();
  });

  it('renders mentorship benefit 4', () => {
    expect(
      screen.getByText(
        'Do you want to train acquaintances / friends / colleagues, but you do not have a ready curriculum or you studied at The Rollings Scopes School, and it\'s time for "Teach It Forward"'
      )
    ).toBeVisible();
  });

  it('renders mentorship benefit 5', () => {
    expect(
      screen.getByText('Looking for beginner developers to join your company or project')
    ).toBeVisible();
  });
});
