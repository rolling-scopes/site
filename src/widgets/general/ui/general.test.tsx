import { screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { General } from './general';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { RS_DOCS_EN_LINK } from 'data';

describe('General', () => {
  beforeEach(() => {
    renderWithRouter(<General />);
  });

  it('displays the General title', () => {
    expect(screen.getByTestId('widget-title')).toBeVisible();
  });

  it('displays the Materials section', () => {
    const documentationLink = screen.getByText('School documentation');

    expect(screen.getByText('Materials')).toBeVisible();
    expect(documentationLink).toBeVisible();
    expect(documentationLink).toHaveAttribute('href', RS_DOCS_EN_LINK);
  });

  it('displays the Certificate section', () => {
    expect(screen.getByText('Certificate')).toBeVisible();
  });

  it('displays the Chat section', () => {
    expect(screen.getByText('Chat')).toBeVisible();
  });
});
