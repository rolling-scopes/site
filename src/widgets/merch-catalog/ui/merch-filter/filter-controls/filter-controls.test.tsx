import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { FilterControls } from './filter-controls';

describe('FilterControls', () => {
  const mockProps = {
    allAvailableTags: ['tag1', 'tag2', 'tag3'],
    searchTerm: '',
    selectedTags: [],
    hasActiveFilters: false,
    onSearchChange: vi.fn(),
    onTagChange: vi.fn(),
    onClearFilters: vi.fn(),
    isMobileLayout: false,
    areTagsExpandedMobile: false,
    onToggleTagsExpansionMobile: vi.fn(),
  };

  it('renders search input', () => {
    render(<FilterControls {...mockProps} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders tags checkboxes', () => {
    render(<FilterControls {...mockProps} />);
    expect(screen.getByText('tag1')).toBeInTheDocument();
    expect(screen.getByText('tag2')).toBeInTheDocument();
    expect(screen.getByText('tag3')).toBeInTheDocument();
  });

  it('calls onTagChange when a tag checkbox is clicked', async () => {
    const user = userEvent.setup();

    render(<FilterControls {...mockProps} />);
    const tagLabel = screen.getByText('tag1');

    await user.click(tagLabel);
    expect(mockProps.onTagChange).toHaveBeenCalledWith('tag1');
  });

  it('shows Clear button only if hasActiveFilters is true', () => {
    const { rerender } = render(<FilterControls {...mockProps} hasActiveFilters={false} />);

    expect(screen.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();

    rerender(<FilterControls {...mockProps} hasActiveFilters={true} />);
    expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument();
  });

  it('renders mobile toggle button and hides tags by default in mobile layout', () => {
    render(<FilterControls {...mockProps} isMobileLayout={true} areTagsExpandedMobile={false} />);
    expect(screen.getByRole('button', { name: /Filter By:/i })).toBeInTheDocument();
    expect(screen.queryByText('tag1')).not.toBeInTheDocument();
  });

  it('shows tags when mobile toggle button is clicked and areTagsExpandedMobile is true', () => {
    render(<FilterControls {...mockProps} isMobileLayout={true} areTagsExpandedMobile={true} />);
    expect(screen.getByRole('button', { name: /Filter By:/i })).toBeInTheDocument();
    expect(screen.getByText('tag1')).toBeVisible();
  });
});
