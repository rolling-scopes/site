import { fireEvent, render, screen } from '@testing-library/react';
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

const mockRouter = { replace: vi.fn() };
let mockSearchParams: URLSearchParams;

vi.mock('next/navigation', () => ({
  useRouter: () => mockRouter,
  usePathname: () => '/merch',
  useSearchParams: () => mockSearchParams,
}));

import { MerchSearch } from './merch-search';

describe('MerchSearch', () => {
  beforeEach(() => {
    mockRouter.replace.mockClear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should reflect the URL search parameter on initial render', () => {
    mockSearchParams = new URLSearchParams('search=t-shirt');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    expect(input).toHaveValue('t-shirt');
  });

  it('should have an empty value if there is no search parameter in the URL', () => {
    mockSearchParams = new URLSearchParams('');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    expect(input).toHaveValue('');
  });

  it('should update the URL query after the user types with a debounce', () => {
    mockSearchParams = new URLSearchParams('');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    fireEvent.change(input, { target: { value: 'hoodie' } });

    expect(input).toHaveValue('hoodie');
    expect(mockRouter.replace).not.toHaveBeenCalled();
    vi.runAllTimers();
    expect(mockRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockRouter.replace).toHaveBeenCalledExactlyOnceWith('/merch?search=hoodie', { scroll: false });
  });

  it('should remove the search parameter from URL when input is cleared', () => {
    mockSearchParams = new URLSearchParams('search=hoodie');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    fireEvent.change(input, { target: { value: '' } });
    vi.runAllTimers();
    expect(mockRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockRouter.replace).toHaveBeenCalledExactlyOnceWith('/merch?', { scroll: false });
  });

  it('should remove the "page" parameter when performing a new search', () => {
    mockSearchParams = new URLSearchParams('search=t-shirt&page=2');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    fireEvent.change(input, { target: { value: 'cups' } });
    vi.runAllTimers();
    expect(mockRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockRouter.replace).toHaveBeenCalledExactlyOnceWith('/merch?search=cups', { scroll: false });
  });

  it('should not call router.replace if the search term matches the URL', () => {
    mockSearchParams = new URLSearchParams('search=hoodie');
    render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    fireEvent.change(input, { target: { value: 'hoodie' } });
    vi.runAllTimers();
    expect(mockRouter.replace).not.toHaveBeenCalled();
  });

  it('should update its value when the URL search parameter changes externally', () => {
    mockSearchParams = new URLSearchParams('search=t-shirt');
    const { rerender } = render(<MerchSearch />);
    const input = screen.getByLabelText('Search merch');

    expect(input).toHaveValue('t-shirt');
    mockSearchParams = new URLSearchParams('search=hoodie');
    rerender(<MerchSearch />);
    expect(input).toHaveValue('hoodie');
  });
});
