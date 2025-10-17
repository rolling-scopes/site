import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ImageProps } from 'next/image';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { NoMerch } from './no-merch';

vi.mock('next/image', () => ({
  default: (props: ImageProps) => {
    return <img src={props.src as string} alt={props.alt} />;
  },
}));

const MOCKED_ROUTER = {
  replace: vi.fn(),
  back: vi.fn(),
};
const MOCKED_PATHNAME = '/merch';

vi.mock('next/navigation', () => ({
  useRouter: () => MOCKED_ROUTER,
  usePathname: () => MOCKED_PATHNAME,
}));

describe('NoMerch', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    MOCKED_ROUTER.replace.mockClear();
    MOCKED_ROUTER.back.mockClear();
  });

  it('should render "not available" text and "Go Back" button when not filtered', () => {
    render(<NoMerch />);
    expect(screen.getByText('No merchandise available at this time.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go Back' })).toBeInTheDocument();
  });

  it('should call router.back() when not filtered and "Go Back" button is clicked', async () => {
    render(<NoMerch />);
    await user.click(screen.getByRole('button', { name: 'Go Back' }));

    expect(MOCKED_ROUTER.back).toHaveBeenCalledTimes(1);
    expect(MOCKED_ROUTER.replace).not.toHaveBeenCalled();
  });

  it('should render "no results found" text and "Clear Filters" button when filtered', () => {
    render(<NoMerch isFiltered />);
    expect(
      screen.getByText('No merch found. Please try another filter or search term'),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Clear Filters' })).toBeInTheDocument();
  });

  it('should call router.replace() when filtered and "Clear Filters" button is clicked', async () => {
    render(<NoMerch isFiltered />);
    await user.click(screen.getByRole('button', { name: 'Clear Filters' }));

    expect(MOCKED_ROUTER.replace).toHaveBeenCalledTimes(1);
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledExactlyOnceWith(MOCKED_PATHNAME, { scroll: false });
    expect(MOCKED_ROUTER.back).not.toHaveBeenCalled();
  });
});
