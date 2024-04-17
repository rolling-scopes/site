import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { General } from './general';
import { renderWithRouter } from '@/__tests__/utils';

describe('General', () => {
  beforeEach(() => {
    renderWithRouter(<General />);
  });

  it('displays the General title', () => {
    expect(screen.getByText('General')).toBeVisible();
  });

  it('displays the Materials section', () => {
    expect(screen.getByText('Materials')).toBeVisible();
    expect(screen.getByText('documentation')).toBeVisible();
  });

  it('displays the Certificate section', () => {
    expect(screen.getByText('Certificate')).toBeVisible();
  });

  it('displays the Chat section', () => {
    expect(screen.getByText('Chat')).toBeVisible();
  });
});
