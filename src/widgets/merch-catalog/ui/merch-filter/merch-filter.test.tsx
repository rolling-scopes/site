import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MerchFilter } from './merch-filter';
import { MOCKED_TAGS } from '@/shared/__tests__/constants';
import { ROUTES, URL_PARAMS } from '@/shared/constants';

vi.mock('./merch-search/merch-search', () => ({ MerchSearch: () => <input data-testid="search-input" /> }));

vi.mock('./merch-tags-dropdown/merch-tags-dropdown', () => ({
  MerchTagsDropdown: ({ isOpen, onClick }: { isOpen: boolean;
    onClick: () => void; }) => (
    <button type="button" onClick={onClick} data-testid="dropdown-button">
      {isOpen ? 'Hide tags' : 'Show tags'}
    </button>
  ),
}));

vi.mock('./merch-tags/merch-tags', () => ({ MerchTags: () => <div data-testid="merch-tags">Tags List</div> }));

let mockedSearchParams: URLSearchParams = new URLSearchParams();
const mockedRouter = { replace: vi.fn() };

vi.mock('next/navigation', () => ({
  useRouter: () => mockedRouter,
  usePathname: () => ROUTES.MERCH,
  useSearchParams: () => mockedSearchParams,
}));

describe('MerchFilter', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    mockedRouter.replace.mockClear();
  });

  it('should not have an active "Clear" button when no filters are applied', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchFilter tags={MOCKED_TAGS} />);
    const clearButton = screen.getByTestId('clear-button');

    expect(clearButton.classList.contains('active')).toBe(false);
  });

  it('should have an active "Clear" button when a "type" filter is applied', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.TYPE}=Hoodie`);
    render(<MerchFilter tags={MOCKED_TAGS} />);
    const clearButton = screen.getByTestId('clear-button');

    expect(clearButton.classList.contains('active')).toBe(true);
  });

  it('should have an active "Clear" button when a "search" filter is applied', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=logo`);
    render(<MerchFilter tags={MOCKED_TAGS} />);
    const clearButton = screen.getByTestId('clear-button');

    expect(clearButton.classList.contains('active')).toBe(true);
  });

  it('should call router.replace with the correct pathname when "Clear" button is clicked', async () => {
    mockedSearchParams = new URLSearchParams(
      `${URL_PARAMS.TYPE}=Sticker&${URL_PARAMS.SEARCH}=awesome`,
    );
    render(<MerchFilter tags={MOCKED_TAGS} />);

    await user.click(screen.getByTestId('clear-button'));

    expect(mockedRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockedRouter.replace).toHaveBeenCalledExactlyOnceWith(`${ROUTES.MERCH}`, { scroll: false });
  });

  it('should toggle the visibility of the tags list on click', async () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchFilter tags={MOCKED_TAGS} />);

    const dropdownButton = screen.getByTestId('dropdown-button');
    const tagsList = screen.getByText('Tags List').parentElement;

    expect(tagsList?.classList.contains('expanded')).toBe(false);

    await user.click(dropdownButton);

    expect(tagsList?.classList.contains('expanded')).toBe(true);
    expect(screen.getByTestId('dropdown-button')).toBeInTheDocument();

    await user.click(dropdownButton);

    expect(tagsList?.classList.contains('expanded')).toBe(false);
    expect(screen.getByTestId('dropdown-button')).toBeInTheDocument();
  });

  it('should render all components correctly when tags are provided', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchFilter tags={MOCKED_TAGS} />);

    expect(screen.getByTestId('button-title')).toBeInTheDocument();
    expect(screen.getByTestId('search-input')).toBeInTheDocument();
    expect(screen.getByTestId('clear-button')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-button')).toBeInTheDocument();
    expect(screen.getByTestId('merch-tags')).toBeInTheDocument();
  });

  it('should not render tag components if tags array is empty', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchFilter tags={[]} />);

    expect(screen.queryByTestId('dropdown-button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('merch-tags')).not.toBeInTheDocument();
  });
});
