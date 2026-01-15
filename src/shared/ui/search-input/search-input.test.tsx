import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { SearchInput } from './search-input';

describe('SearchInput', () => {
  it('should call the onChange callback with the new value when user types', () => {
    const handleChange = vi.fn();

    render(<SearchInput value="" onChange={handleChange} />);
    const inputElement = screen.getByTestId('search-input');

    fireEvent.change(inputElement, { target: { value: 'test input' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledExactlyOnceWith('test input');
  });

  it('should apply all attributes and classes correctly', () => {
    const testAriaLabel = 'Search for products';
    const testName = 'product-search';
    const testValue = 'hello world';

    render(
      <SearchInput
        value={testValue}
        onChange={() => {}}
        ariaLabel={testAriaLabel}
        name={testName}
      />,
    );
    const inputElement = screen.getByTestId('search-input');

    expect(inputElement).toHaveClass('search-input');
    expect(inputElement).toHaveAttribute('name', testName);
    expect(inputElement).toHaveAttribute('aria-label', testAriaLabel);
    expect(inputElement).toHaveValue(testValue);
  });
});
