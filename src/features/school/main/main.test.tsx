import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Main } from './main';
import { renderWithRouter } from '@/__tests__/utils';

describe('Main', () => {
  beforeEach(() => {
    renderWithRouter(<Main />);
  });

  it.skip('renders the RS School title', () => {
    expect(screen.getByText('RS School')).toBeVisible();
  });

  it.skip('renders the course title and motivation text', () => {
    expect(screen.getByText('Free courses. High motivation')).toBeVisible();
  });

  it('renders the description', () => {
    expect(screen.getByText('Connecting people, growing together, having fun')).toBeVisible();
  });
});
