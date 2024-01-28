import { screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';
import { renderWithRouter } from '@/__tests__/utils';
import { Mentors } from './Mentors';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

describe('Mentors', () => {
  beforeEach(() => {
    renderWithRouter(<Mentors />);
  });

  it('renders the title', () => {
    expect(screen.getByText('Mentors wanted!')).toBeVisible();
  });

  it('renders the subtitle', () => {
    const subtitle =
      'The Rolling Scopes School is constantly looking for mentors from all over the world to teach everyone who wants to learn the JavaScript language and the world of Front-end. Over the past few years, over 1500+ people have successfully completed our six month training program.';
    expect(screen.getByText(subtitle)).toBeVisible();
  });

  it('renders the become a mentor button', () => {
    const button = screen.getByRole('link', { name: /Become a mentor/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute('href', 'https://app.rs.school/registry/mentor');
  });

  it('renders the mentor image', () => {
    const img = screen.getByAltText('Become a mentor');
    expect(img).toBeVisible();
    expect(img).toHaveAttribute('src', MOCKED_IMAGE_PATH);
  });
});
