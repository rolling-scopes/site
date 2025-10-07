import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MobileMerchFilter } from './mobile-merch-filters';
import { getMockedProps } from '@/shared/__tests__/constants';

vi.mock('../../search-filters/search-filters', () => ({
  default: (props: { searchTerm: string }) => (
    <div data-testid="search-filtres">
      Search Term:
      {props.searchTerm}
    </div>
  ),
}));

vi.mock('../../tag-filters/tag-filters', () => ({ default: () => <div data-testid="tag-filters">Tag Filters</div> }));

describe('MobileFilterControls', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should always render the search input with the correct search term', () => {
    const props = getMockedProps({ searchTerm: 'Test Query' });

    render(<MobileMerchFilter {...props} />);

    const searchInput = screen.getByTestId('search-filtres');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveTextContent('Search Term:Test Query');
  });

  describe('when filters are collapsed', () => {
    it('should have correct attributes and classes on the toggle button', () => {
      render(<MobileMerchFilter {...getMockedProps({ areTagsExpanded: false })} />);
      const toggleButton = screen.getByRole('button', { name: /Filter By:/i });

      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
      expect(toggleButton).not.toHaveClass('expanded');
    });

    it('should not render the TagFilters component', () => {
      render(<MobileMerchFilter {...getMockedProps({ areTagsExpanded: false })} />);
      expect(screen.queryByTestId('tag-filters')).not.toBeInTheDocument();
    });

    it('should not render the "Clear" button if filters are not active', () => {
      render(<MobileMerchFilter {...getMockedProps({ hasActiveFilters: false })} />);
      expect(screen.queryByRole('button', { name: /Clear/i })).not.toBeInTheDocument();
    });

    it('should render the "Clear" button when filters are active', () => {
      render(
        <MobileMerchFilter
          {...getMockedProps({
            hasActiveFilters: true,
            areTagsExpanded: false,
          })}
        />,
      );
      expect(screen.getByRole('button', { name: /Clear/i })).toBeInTheDocument();
    });
  });

  describe('when filters are expanded', () => {
    it('should have correct attributes and classes on the toggle button', () => {
      render(<MobileMerchFilter {...getMockedProps({ areTagsExpanded: true })} />);
      const toggleButton = screen.getByRole('button', { name: /Filter By:/i });

      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
      expect(toggleButton).toHaveClass('expanded');
    });

    it('should render the TagFilters component', () => {
      render(<MobileMerchFilter {...getMockedProps({ areTagsExpanded: true })} />);
      expect(screen.getByTestId('tag-filters')).toBeInTheDocument();
    });

    it('should NOT apply "has-active-filters" class to the toggle, even if filters are active', () => {
      render(
        <MobileMerchFilter
          {...getMockedProps({
            hasActiveFilters: true,
            areTagsExpanded: true,
          })}
        />,
      );
      const toggleButton = screen.getByRole('button', { name: /Filter By:/i });

      expect(toggleButton).not.toHaveClass('has-active-filters');
    });
  });
});
