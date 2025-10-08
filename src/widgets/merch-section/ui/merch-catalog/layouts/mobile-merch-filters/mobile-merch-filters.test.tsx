import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { MobileMerchFilters } from './mobile-merch-filters';

describe('MobileMerchFilters', () => {
  const user = userEvent.setup();

  const mockSearchFilters = <div data-testid="search-filters">Mock Search</div>;
  const mockTagFilters = <div data-testid="tag-filters">Mock Tags</div>;

  it('should always render the search slot and the filter toggle button', () => {
    render(
      <MobileMerchFilters
        searchFilters={mockSearchFilters}
        tagFilters={mockTagFilters}
        hasActiveFilters={false}
        onClearFilters={() => {}}
        areTagsExpanded={false}
        onToggleTagsExpansion={() => {}}
      />,
    );

    expect(screen.getByTestId('search-filters')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Filter By:/i })).toBeInTheDocument();
  });

  it('should render the "Clear" button only when hasActiveFilters is true', async () => {
    const handleClearFiltersMock = vi.fn();
    const { rerender } = render(
      <MobileMerchFilters
        searchFilters={mockSearchFilters}
        tagFilters={mockTagFilters}
        hasActiveFilters={false}
        onClearFilters={handleClearFiltersMock}
        areTagsExpanded={false}
        onToggleTagsExpansion={() => {}}
      />,
    );

    expect(screen.queryByRole('button', { name: /Clear/i })).not.toBeInTheDocument();

    rerender(
      <MobileMerchFilters
        searchFilters={mockSearchFilters}
        tagFilters={mockTagFilters}
        hasActiveFilters={true}
        onClearFilters={handleClearFiltersMock}
        areTagsExpanded={false}
        onToggleTagsExpansion={() => {}}
      />,
    );

    const clearButton = screen.getByRole('button', { name: /Clear/i });

    expect(clearButton).toBeInTheDocument();

    await user.click(clearButton);
    expect(handleClearFiltersMock).toHaveBeenCalledTimes(1);
  });

  it('should correctly handle the accordion state', async () => {
    const handleToggleExpansionMock = vi.fn();
    const { rerender } = render(
      <MobileMerchFilters
        searchFilters={mockSearchFilters}
        tagFilters={mockTagFilters}
        hasActiveFilters={false}
        onClearFilters={() => {}}
        areTagsExpanded={false}
        onToggleTagsExpansion={handleToggleExpansionMock}
      />,
    );

    const toggleButton = screen.getByRole('button', { name: /Filter By:/i });

    expect(screen.queryByTestId('tag-filters')).not.toBeInTheDocument();
    expect(toggleButton).not.toHaveClass('expanded');

    await user.click(toggleButton);
    expect(handleToggleExpansionMock).toHaveBeenCalledTimes(1);

    rerender(
      <MobileMerchFilters
        searchFilters={mockSearchFilters}
        tagFilters={mockTagFilters}
        hasActiveFilters={false}
        onClearFilters={() => {}}
        areTagsExpanded={true}
        onToggleTagsExpansion={handleToggleExpansionMock}
      />,
    );

    expect(screen.getByTestId('tag-filters')).toBeInTheDocument();
    expect(toggleButton).toHaveClass('expanded');

    const arrow = toggleButton.querySelector('.filter-toggle-arrow');

    expect(arrow).toHaveClass('rotate');
  });
});
