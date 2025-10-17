import { fireEvent, render, screen } from '@testing-library/react';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import { MerchSearch } from './merch-search';
import { MOCKED_ROUTER } from '@/shared/__tests__/constants';

let mockedSearchParams: URLSearchParams = new URLSearchParams();

vi.mock('next/navigation', () => ({
  useRouter: () => MOCKED_ROUTER,
  usePathname: () => '/merch',
  useSearchParams: () => mockedSearchParams,
}));

describe('MerchSearch', () => {
  beforeEach(() => {
    MOCKED_ROUTER.replace.mockClear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should reflect the URL search parameter on initial render', () => {
    mockedSearchParams = new URLSearchParams('search=t-shirt');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    expect(input).toHaveValue('t-shirt');
  });

  it('should have an empty value if there is no search parameter in the URL', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    expect(input).toHaveValue('');
  });

  it('should update the URL query after the user types with a debounce', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    fireEvent.change(input, { target: { value: 'hoodie' } });

    expect(input).toHaveValue('hoodie');
    expect(MOCKED_ROUTER.replace).not.toHaveBeenCalled();
    vi.runAllTimers();
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledTimes(1);
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledExactlyOnceWith('/merch?search=hoodie', { scroll: false });
  });

  it('should remove the search parameter from URL when input is cleared', () => {
    mockedSearchParams = new URLSearchParams('search=hoodie');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    fireEvent.change(input, { target: { value: '' } });
    vi.runAllTimers();
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledTimes(1);
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledExactlyOnceWith('/merch?', { scroll: false });
  });

  it('should remove the "page" parameter when performing a new search', () => {
    mockedSearchParams = new URLSearchParams('search=t-shirt&page=2');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    fireEvent.change(input, { target: { value: 'cups' } });
    vi.runAllTimers();
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledTimes(1);
    expect(MOCKED_ROUTER.replace).toHaveBeenCalledExactlyOnceWith('/merch?search=cups', { scroll: false });
  });

  it('should not call router.replace if the search term matches the URL', () => {
    mockedSearchParams = new URLSearchParams('search=hoodie');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    fireEvent.change(input, { target: { value: 'hoodie' } });
    vi.runAllTimers();
    expect(MOCKED_ROUTER.replace).not.toHaveBeenCalled();
  });

  it('should update its value when the URL search parameter changes externally', () => {
    mockedSearchParams = new URLSearchParams('search=t-shirt');
    const { rerender } = render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    expect(input).toHaveValue('t-shirt');
    mockedSearchParams = new URLSearchParams('search=hoodie');
    rerender(<MerchSearch />);
    expect(input).toHaveValue('hoodie');
  });
});
