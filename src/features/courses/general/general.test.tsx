import { screen } from '@testing-library/react';
import { it, expect, describe, beforeEach } from 'vitest';
import { renderWithRouter } from '@/__tests__/utils';
import { General } from './general';

describe('General', () => {
  beforeEach(() => {
    renderWithRouter(<General />);
  });

  it('displays the General title', () => {
    expect(screen.getByText('General')).toBeVisible();
  });

  it('displays the Materials section', () => {
    expect(screen.getByText('Materials')).toBeVisible();
    expect(screen.getByText('https://docs.rs.school')).toBeVisible();
  });

  it('displays the Certificate section', () => {
    expect(screen.getByText('Certificate')).toBeVisible();
  });

  it('displays the Chat section', () => {
    expect(screen.getByText('Chat')).toBeVisible();
  });
});
