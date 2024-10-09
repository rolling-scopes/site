import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Mentors } from './mentors';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';

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
    const img = screen.getByAltText('Sloth - mascot dressed as a detective');

    expect(img).toBeVisible();
    expect(img).toHaveAttribute('src', MOCKED_IMAGE_PATH);
  });
});
