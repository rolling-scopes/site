import { screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';
import { renderWithRouter } from '@/__tests__/utils';
import { Main } from './main';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

describe('Main', () => {
  beforeEach(() => {
    renderWithRouter(<Main />);
  });

  it('renders the RS School title', () => {
    expect(screen.getByText('RS School')).toBeVisible();
  });

  it('renders the course title and motivation text', () => {
    expect(screen.getByText('Free courses. High motivation')).toBeVisible();
  });

  it('renders the description', () => {
    expect(screen.getByText('Journey to full stack mastery')).toBeVisible();
  });

  it('renders the picture of mentors with students', () => {
    const img = screen.getByAltText('Mentors with students');
    expect(img).toBeVisible();
    expect(img).toHaveAttribute('src', MOCKED_IMAGE_PATH);
  });
});
