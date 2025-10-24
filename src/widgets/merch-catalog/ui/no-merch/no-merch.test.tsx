import { ComponentPropsWithoutRef } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { NoMerch } from './no-merch';

vi.mock('@/shared/constants', () => ({ ROUTES: { HOME: '/' } }));

vi.mock('@/shared/ui/link-custom', () => ({
  LinkCustom: (props: ComponentPropsWithoutRef<'a'>) => {
    return <a {...props} />;
  },
}));

vi.mock('@/shared/ui/paragraph', () => ({
  Paragraph: (props: ComponentPropsWithoutRef<'p'>) => {
    return <p {...props} />;
  },
}));

describe('NoMerch', () => {
  it('should always render the "Home" link', () => {
    render(<NoMerch />);
    const homeLink = screen.getByTestId('no-merch-home-link');

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should render "not available" text when not filtered', () => {
    render(<NoMerch isFiltered={false} />);
    const textElement = screen.getByTestId('no-merch-text');
    const imageElement = screen.getByTestId('no-merch-image');

    expect(textElement).toHaveTextContent('No merchandise available at this time');
    expect(imageElement).toHaveAttribute('alt', 'No merchandise available');
  });

  it('should render "no results found" text when filtered', () => {
    render(<NoMerch isFiltered />);
    const textElement = screen.getByTestId('no-merch-text');
    const imageElement = screen.getByTestId('no-merch-image');

    expect(textElement).toHaveTextContent(
      'No merch found. Please try another filter or search term',
    );
    expect(imageElement).toHaveAttribute('alt', 'No results found');
  });
});
