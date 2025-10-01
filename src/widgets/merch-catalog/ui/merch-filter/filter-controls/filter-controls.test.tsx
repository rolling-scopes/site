import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { FilterControls } from './filter-controls';

describe('FilterControls', () => {
  const makeProps = () => ({
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
  });

  it('renders search input', () => {
    render(<FilterControls {...makeProps()} />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it.each(['tag1', 'tag2', 'tag3'])('renders tag checkbox for %s', (tag) => {
    render(<FilterControls {...makeProps()} />);
    expect(screen.getByText(tag)).toBeInTheDocument();
  });

  it('calls onTagChange when a tag checkbox is clicked', async () => {
    const user = userEvent.setup();
    const props = makeProps();

    render(<FilterControls {...props} />);
    const tagLabel = screen.getByText('tag1');

    await user.click(tagLabel);
    expect(props.onTagChange).toHaveBeenCalledWith('tag1');
  });

  it('renders tablet toggle button and hides tags by default in tablet layout', () => {
    render(<FilterControls {...makeProps()} isTabletLayout={true} areTagsExpandedTablet={false} />);
    expect(screen.getByRole('button', { name: /Filter By:/i })).toBeInTheDocument();
    expect(screen.queryByText('tag1')).not.toBeInTheDocument();
  });

  it('shows tags when tablet toggle button is clicked and areTagsExpandedTablet is true', () => {
    render(<FilterControls {...makeProps()} isTabletLayout={true} areTagsExpandedTablet={true} />);
    expect(screen.getByRole('button', { name: /Filter By:/i })).toBeInTheDocument();
    expect(screen.getByText('tag1')).toBeVisible();
  });
});
