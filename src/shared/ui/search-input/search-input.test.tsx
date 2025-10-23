import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { SearchInput } from './search-input';

describe('SearchInput', () => {
  it('should display the provided value correctly', () => {
    const testValue = 'hello world';

    render(<SearchInput value={testValue} onChange={() => {}} />);
    const inputElement = screen.getByDisplayValue(testValue);

    expect(inputElement).toBeInTheDocument();
  });

  it('should call the onChange callback with the new value when user types', () => {
    const handleChange = vi.fn();

    render(<SearchInput value="" onChange={handleChange} />);
    const inputElement = screen.getByPlaceholderText('Search...');

    fireEvent.change(inputElement, { target: { value: 'test input' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledExactlyOnceWith('test input');
  });

  it('should apply aria-label and name attributes correctly', () => {
    const testAriaLabel = 'Search for products';
    const testName = 'product-search';

    render(<SearchInput value="" onChange={() => {}} ariaLabel={testAriaLabel} name={testName} />);
    const inputElement = screen.getByLabelText(testAriaLabel);

    expect(inputElement).toHaveAttribute('name', testName);
  });

  it('should have the correct class name', () => {
    render(<SearchInput value="" onChange={() => {}} />);
    const inputElement = screen.getByPlaceholderText('Search...');

    expect(inputElement).toHaveClass('search-input');
  });
});
