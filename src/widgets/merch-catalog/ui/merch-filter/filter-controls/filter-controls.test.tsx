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
    isTabletLayout: false,
    areTagsExpandedTablet: false,
    onToggleTagsExpansionTablet: vi.fn(),
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

  it('renders tablet toggle button and hides tags by default in tablet layout', () => {
    render(<FilterControls {...mockProps} isTabletLayout={true} areTagsExpandedTablet={false} />);
    expect(screen.getByRole('button', { name: /Filter By:/i })).toBeInTheDocument();
    expect(screen.queryByText('tag1')).not.toBeInTheDocument();
  });

  it('shows tags when tablet toggle button is clicked and areTagsExpandedTablet is true', () => {
    render(<FilterControls {...mockProps} isTabletLayout={true} areTagsExpandedTablet={true} />);
    expect(screen.getByRole('button', { name: /Filter By:/i })).toBeInTheDocument();
    expect(screen.getByText('tag1')).toBeVisible();
  });
});
