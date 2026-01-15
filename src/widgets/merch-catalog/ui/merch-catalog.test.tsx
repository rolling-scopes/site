import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { MerchCatalog } from './merch-catalog';
import { MOCKED_PRODUCTS, MOCKED_TAGS } from '@/shared/__tests__/constants';
import { URL_PARAMS } from '@/shared/constants';

vi.mock('./merch-filter/merch-filter', () => ({
  MerchFilter: ({ tags }: { tags: string[] }) => (
    <div data-testid="merch-filter">{`Tags: ${tags.join(',')}`}</div>
  ),
}));

vi.mock('./merch-list/merch-list', () => ({
  MerchList: ({ products }: { products: typeof MOCKED_PRODUCTS }) => (
    <div data-testid="merch-list">{`Product count: ${products.length}`}</div>
  ),
}));

vi.mock('./no-merch/no-merch', () => ({
  NoMerch: ({ isFiltered = false }: { isFiltered?: boolean }) => (
    <div data-testid="no-merch">{`isFiltered: ${isFiltered}`}</div>
  ),
}));

vi.mock('../helpers/get-tags', () => ({ getTags: vi.fn(() => MOCKED_TAGS) }));

let mockedSearchParams: URLSearchParams = new URLSearchParams();

vi.mock('next/navigation', () => ({ useSearchParams: () => mockedSearchParams }));

describe('MerchCatalog', () => {
  it('should render all products when no filters are applied', () => {
    mockedSearchParams = new URLSearchParams('');
    render(<MerchCatalog products={MOCKED_PRODUCTS} />);

    expect(screen.getByTestId('merch-list')).toHaveTextContent('Product count: 3');
    expect(screen.queryByTestId('no-merch')).not.toBeInTheDocument();
    expect(screen.getByTestId('merch-filter')).toHaveTextContent(`Tags: ${MOCKED_TAGS.join(',')}`);
  });

  it('should filter products by search term (case-insensitive)', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=t-shirts`);
    render(<MerchCatalog products={MOCKED_PRODUCTS} />);

    expect(screen.getByTestId('merch-list')).toHaveTextContent('Product count: 2');
  });

  it('should filter products by a single type', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.TYPE}=hoodie`);
    render(<MerchCatalog products={MOCKED_PRODUCTS} />);

    expect(screen.getByTestId('merch-list')).toHaveTextContent('Product count: 1');
  });

  it('should filter products by multiple types', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.TYPE}=hoodie&${URL_PARAMS.TYPE}=cups`);
    render(<MerchCatalog products={MOCKED_PRODUCTS} />);

    expect(screen.getByTestId('merch-list')).toHaveTextContent('Product count: 2');
  });

  it('should filter by both search term and type', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=cool&${URL_PARAMS.TYPE}=hoodie`);
    render(<MerchCatalog products={MOCKED_PRODUCTS} />);

    expect(screen.getByTestId('merch-list')).toHaveTextContent('Product count: 1');
  });

  it('should render NoMerch component when no products match filters', () => {
    mockedSearchParams = new URLSearchParams(`${URL_PARAMS.SEARCH}=nonexistent`);
    render(<MerchCatalog products={MOCKED_PRODUCTS} />);
    const noMerch = screen.getByTestId('no-merch');

    expect(screen.queryByTestId('merch-list')).not.toBeInTheDocument();
    expect(noMerch).toBeInTheDocument();
    expect(noMerch).toHaveTextContent('isFiltered: true');
  });
});
