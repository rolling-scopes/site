import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import TagFilters from './tag-filters';

describe('TagFilters', () => {
  const user = userEvent.setup();
  const mockAllTags = ['Hoodie', 'Sticker', 'Cup'];

  it('should render nothing if no tags are provided', () => {
    const { container } = render(
      <TagFilters allAvailableTags={[]} selectedTags={[]} onTagChange={() => {}} />,
    );

    expect(container.firstChild).toBeNull();
  });

  it('should render a checkbox for each available tag', () => {
    render(<TagFilters allAvailableTags={mockAllTags} selectedTags={[]} onTagChange={() => {}} />);

    const checkboxes = screen.getAllByRole('checkbox');

    expect(checkboxes).toHaveLength(mockAllTags.length);

    expect(screen.getByLabelText('Hoodie')).toBeInTheDocument();
    expect(screen.getByLabelText('Sticker')).toBeInTheDocument();
    expect(screen.getByLabelText('Cup')).toBeInTheDocument();
  });

  it('should correctly check the checkboxes based on the selectedTags prop', () => {
    const mockSelectedTags = ['Sticker'];

    render(
      <TagFilters
        allAvailableTags={mockAllTags}
        selectedTags={mockSelectedTags}
        onTagChange={() => {}}
      />,
    );

    expect(screen.getByLabelText('Sticker')).toBeChecked();

    expect(screen.getByLabelText('Hoodie')).not.toBeChecked();
    expect(screen.getByLabelText('Cup')).not.toBeChecked();
  });

  it('should call onTagChange with the correct tag when a label is clicked', async () => {
    const handleTagChangeMock = vi.fn();

    render(
      <TagFilters
        allAvailableTags={mockAllTags}
        selectedTags={[]}
        onTagChange={handleTagChangeMock}
      />,
    );

    const cupLabel = screen.getByText('Cup');

    await user.click(cupLabel);

    expect(handleTagChangeMock).toHaveBeenCalledTimes(1);

    expect(handleTagChangeMock).toHaveBeenCalledExactlyOnceWith('Cup');
  });
});
