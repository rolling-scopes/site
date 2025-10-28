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
import { ROUTES, URL_PARAMS } from '@/shared/constants';

let mockedSearchParams: URLSearchParams = new URLSearchParams();
const mockedRouter = { replace: vi.fn() };

vi.mock('next/navigation', () => ({
  useRouter: () => mockedRouter,
  usePathname: () => ROUTES.MERCH,
  useSearchParams: () => mockedSearchParams,
}));

describe('MerchSearch', () => {
  beforeEach(() => {
    mockedRouter.replace.mockClear();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should reflect the URL search parameter on initial render', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=t-shirt`);
    render(<MerchSearch />);
    const input = screen.getByTestId('search-input');

    expect(input).toHaveValue('t-shirt');
  });

  it('should have an empty value if there is no search parameter in the URL', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchSearch />);
    const input = screen.getByTestId('search-input');

    expect(input).toHaveValue('');
  });

  it('should update the URL query after the user types with a debounce', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchSearch />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'hoodie' } });
    expect(input).toHaveValue('hoodie');
    expect(mockedRouter.replace).not.toHaveBeenCalled();
    vi.runAllTimers();
    expect(mockedRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockedRouter.replace).toHaveBeenCalledExactlyOnceWith(
      `${ROUTES.MERCH}?${URL_PARAMS.SEARCH}=hoodie`,
      { scroll: false },
    );
  });

  it('should remove the search parameter from URL when input is cleared', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=hoodie`);
    render(<MerchSearch />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: '' } });
    vi.runAllTimers();
    expect(mockedRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockedRouter.replace).toHaveBeenCalledExactlyOnceWith(`${ROUTES.MERCH}?`, { scroll: false });
  });

  it('should remove the "page" parameter when performing a new search', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=t-shirt&${URL_PARAMS.PAGE}=2`);
    render(<MerchSearch />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'cups' } });
    vi.runAllTimers();
    expect(mockedRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockedRouter.replace).toHaveBeenCalledExactlyOnceWith(
      `${ROUTES.MERCH}?${URL_PARAMS.SEARCH}=cups`,
      { scroll: false },
    );
  });

  it('should not call router.replace if the search term matches the URL', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=hoodie`);
    render(<MerchSearch />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'hoodie' } });
    vi.runAllTimers();
    expect(mockedRouter.replace).not.toHaveBeenCalled();
  });

  it('should update its value when the URL search parameter changes externally', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=t-shirt`);
    const { rerender } = render(<MerchSearch />);
    const input = screen.getByTestId('search-input');

    expect(input).toHaveValue('t-shirt');
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=hoodie`);
    rerender(<MerchSearch />);
    expect(input).toHaveValue('hoodie');
  });

  it('should remove the search parameter from URL when input contains only whitespace', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=hoodie`);
    render(<MerchSearch />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: '   ' } });
    vi.runAllTimers();
    expect(mockedRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockedRouter.replace).toHaveBeenCalledExactlyOnceWith(`${ROUTES.MERCH}?`, { scroll: false });
  });

  it('should trim leading and trailing whitespace before updating URL', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchSearch />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: '  cups  ' } });
    vi.runAllTimers();
    expect(mockedRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockedRouter.replace).toHaveBeenCalledExactlyOnceWith(
      `${ROUTES.MERCH}?${URL_PARAMS.SEARCH}=cups`,
      { scroll: false },
    );
  });

  it('should normalize multiple internal whitespaces to a single space', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchSearch />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: 'coffee     yellow' } });
    vi.runAllTimers();
    expect(mockedRouter.replace).toHaveBeenCalledTimes(1);
    expect(mockedRouter.replace).toHaveBeenCalledExactlyOnceWith(
      `${ROUTES.MERCH}?${URL_PARAMS.SEARCH}=coffee+yellow`,
      { scroll: false },
    );
  });

  it('should not call router.replace if the trimmed search term matches the URL', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=hoodie`);
    render(<MerchSearch />);
    const input = screen.getByTestId('search-input');

    fireEvent.change(input, { target: { value: '  hoodie  ' } });
    vi.runAllTimers();
    expect(mockedRouter.replace).not.toHaveBeenCalled();
  });
});
