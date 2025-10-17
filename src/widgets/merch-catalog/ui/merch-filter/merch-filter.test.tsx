import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MerchFilter } from './merch-filter';
import { MOCKED_ROUTER, MOCKED_TAGS } from '@/shared/__tests__/constants';

vi.mock('./merch-search/merch-search', () => ({ MerchSearch: () => <input aria-label="Search merch" /> }));

vi.mock('./merch-tags-toggle/merch-tags-toggle', () => ({
  MerchTagsToggle: ({ isOpen, onClick }: { isOpen: boolean;
    onClick: () => void; }) => (
    <button type="button" onClick={onClick}>
      {isOpen ? 'Hide tags' : 'Show tags'}
    </button>
  ),
}));

vi.mock('./merch-tags/merch-tags', () => ({ MerchTags: () => <div>Tags List</div> }));

let mockedSearchParams: URLSearchParams = new URLSearchParams();

vi.mock('next/navigation', () => ({
  useRouter: () => MOCKED_ROUTER,
  usePathname: () => '/merch',
  useSearchParams: () => mockedSearchParams,
}));

describe('MerchFilter', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    MOCKED_ROUTER.replace.mockClear();
  });

  it('should not have an active "Clear" button when no filters are applied', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchFilter tags={MOCKED_TAGS} />);
    const clearButton = screen.getByRole('button', { name: /clear/i });

    expect(clearButton.classList.contains('active')).toBe(false);
  });

  it('should have an active "Clear" button when a "type" filter is applied', () => {
    mockedSearchParams = new URLSearchParams('type=Hoodie');
    render(<MerchFilter tags={MOCKED_TAGS} />);
    const clearButton = screen.getByRole('button', { name: /clear/i });

    expect(clearButton.classList.contains('active')).toBe(true);
  });

  it('should have an active "Clear" button when a "search" filter is applied', () => {
    mockedSearchParams = new URLSearchParams('search=logo');
    render(<MerchFilter tags={MOCKED_TAGS} />);
    const clearButton = screen.getByRole('button', { name: /clear/i });

    expect(clearButton.classList.contains('active')).toBe(true);
  });

  it('should call router.replace with the correct pathname when "Clear" button is clicked', async () => {
    mockedSearchParams = new URLSearchParams('type=Sticker&search=awesome');
    render(<MerchFilter tags={MOCKED_TAGS} />);

    await user.click(screen.getByRole('button', { name: /clear/i }));

    expect(MOCKED_ROUTER.replace).toHaveBeenCalledTimes(1);
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledExactlyOnceWith('/merch', { scroll: false });
  });

  it('should toggle the visibility of the tags list on click', async () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchFilter tags={MOCKED_TAGS} />);

    const toggleButton = screen.getByRole('button', { name: /show tags/i });
    const tagsList = screen.getByText('Tags List').parentElement;

    expect(tagsList?.classList.contains('expanded')).toBe(false);

    await user.click(toggleButton);
    expect(tagsList?.classList.contains('expanded')).toBe(true);
    expect(screen.getByRole('button', { name: /hide tags/i })).toBeInTheDocument();
    await user.click(toggleButton);
    expect(tagsList?.classList.contains('expanded')).toBe(false);
    expect(screen.getByRole('button', { name: /show tags/i })).toBeInTheDocument();
  });
});
