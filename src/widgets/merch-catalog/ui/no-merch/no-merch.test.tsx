import { render, screen } from '@testing-library/react';
import { ImageProps } from 'next/image';
import { describe, expect, it, vi } from 'vitest';

import { NoMerch } from './no-merch';

vi.mock('next/image', () => ({
  default: (props: ImageProps) => {
    return <img src={props.src as string} alt={props.alt} />;
  },
}));

vi.mock('@/shared/constants', () => ({ ROUTES: { HOME: '/' } }));

vi.mock('@/shared/ui/link-custom', () => ({
  LinkCustom: (props: { href: string;
    children: React.ReactNode; }) => {
    return <a href={props.href}>{props.children}</a>;
  },
}));

describe('NoMerch', () => {
  it('should always render the "Home" link', () => {
    render(<NoMerch />);
    const homeLink = screen.getByRole('link', { name: 'Home' });

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should render "not available" text when not filtered', () => {
    render(<NoMerch isFiltered={false} />);
    expect(screen.getByText('No merchandise available at this time')).toBeInTheDocument();
  });

  it('should render "no results found" text when filtered', () => {
    render(<NoMerch isFiltered />);
    expect(
      screen.getByText('No merch found. Please try another filter or search term'),
    ).toBeInTheDocument();
  });
});
