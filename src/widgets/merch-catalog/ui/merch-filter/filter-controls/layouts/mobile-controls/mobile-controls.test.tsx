import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { MobileFilterControls } from './mobile-controls';
import { getMockedProps } from '@/shared/__tests__/constants';

vi.mock('../../search-input/search-input', () => ({
  default: (props: { searchTerm: string }) => (
    <div data-testid="search-input">
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

    render(<MobileFilterControls {...props} />);

    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveTextContent('Search Term:Test Query');
  });

  describe('when filters are collapsed', () => {
    it('should have correct attributes and classes on the toggle button', () => {
      render(<MobileFilterControls {...getMockedProps({ areTagsExpandedTablet: false })} />);
      const toggleButton = screen.getByRole('button', { name: /Filter By:/i });

      expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
      expect(toggleButton).not.toHaveClass('expanded');
    });

    it('should not render the TagFilters component', () => {
      render(<MobileFilterControls {...getMockedProps({ areTagsExpandedTablet: false })} />);
      expect(screen.queryByTestId('tag-filters')).not.toBeInTheDocument();
    });

    it('should not render the "Clear" button if filters are not active', () => {
      render(<MobileFilterControls {...getMockedProps({ hasActiveFilters: false })} />);
      expect(screen.queryByRole('button', { name: /Clear/i })).not.toBeInTheDocument();
    });

    it('should render the "Clear" button and apply active class to toggle if filters are active', () => {
      render(
        <MobileFilterControls
          {...getMockedProps({
            hasActiveFilters: true,
            areTagsExpandedTablet: false,
          })}
        />,
      );

      expect(screen.getByRole('button', { name: /Clear/i })).toBeInTheDocument();

      const toggleButton = screen.getByRole('button', { name: /Filter By:/i });

      expect(toggleButton).toHaveClass('has-active-filters');
    });
  });

  describe('when filters are expanded', () => {
    it('should have correct attributes and classes on the toggle button', () => {
      render(<MobileFilterControls {...getMockedProps({ areTagsExpandedTablet: true })} />);
      const toggleButton = screen.getByRole('button', { name: /Filter By:/i });

      expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
      expect(toggleButton).toHaveClass('expanded');
    });

    it('should render the TagFilters component', () => {
      render(<MobileFilterControls {...getMockedProps({ areTagsExpandedTablet: true })} />);
      expect(screen.getByTestId('tag-filters')).toBeInTheDocument();
    });

    it('should NOT apply "has-active-filters" class to the toggle, even if filters are active', () => {
      render(
        <MobileFilterControls
          {...getMockedProps({
            hasActiveFilters: true,
            areTagsExpandedTablet: true,
          })}
        />,
      );
      const toggleButton = screen.getByRole('button', { name: /Filter By:/i });

      expect(toggleButton).not.toHaveClass('has-active-filters');
    });
  });
});
