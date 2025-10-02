import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Pagination } from './pagination';

describe('Pagination', () => {
  it('renders page items with dots and marks current page as active', () => {
    const onPageChange = vi.fn();

    render(<Pagination currentPage={5} totalPages={10} onPageChange={onPageChange} />);

    // Visible page items from util for (5,10): 4,5,6, dots, 9,10
    expect(screen.getByRole('button', { name: 'Go to page 4' })).toBeInTheDocument();
    const active = screen.getByRole('button', { name: 'Current page, page 5' });

    expect(active).toBeInTheDocument();
    expect(active).toHaveClass('button--pagination-active');
    expect(screen.getByRole('button', { name: 'Go to page 6' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to page 9' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go to page 10' })).toBeInTheDocument();

    // Dots container with three dots
    const dotsContainers = document.querySelectorAll('.pagination-dots');

    expect(dotsContainers.length).toBe(1);
    const dots = dotsContainers[0].querySelectorAll('.dot');

    expect(dots.length).toBe(3);
  });

  it('disables and enables arrows based on current page', () => {
    const onPageChange = vi.fn();

    const { rerender } = render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />,
    );

    const prev = screen.getByRole('button', { name: 'Go to previous page' });
    const next = screen.getByRole('button', { name: 'Go to next page' });

    expect(prev).toBeDisabled();
    expect(next).not.toBeDisabled();

    rerender(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChange} />);

    expect(screen.getByRole('button', { name: 'Go to previous page' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: 'Go to next page' })).toBeDisabled();
  });

  it('invokes onPageChange when clicking arrows', async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();

    render(<Pagination currentPage={3} totalPages={7} onPageChange={onPageChange} />);

    await user.click(screen.getByRole('button', { name: 'Go to previous page' }));
    expect(onPageChange).toHaveBeenCalledExactlyOnceWith(2);

    onPageChange.mockClear();

    await user.click(screen.getByRole('button', { name: 'Go to next page' }));
    expect(onPageChange).toHaveBeenCalledExactlyOnceWith(4);
  });

  it('invokes onPageChange when clicking a specific page number', async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();

    render(<Pagination currentPage={5} totalPages={10} onPageChange={onPageChange} />);

    await user.click(screen.getByRole('button', { name: 'Go to page 10' }));
    expect(onPageChange).toHaveBeenCalledExactlyOnceWith(10);
  });
});
