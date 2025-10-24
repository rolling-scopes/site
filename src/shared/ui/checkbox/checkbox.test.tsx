import { ChangeEvent } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import {
  type Mock,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest';

import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  let handleChange: Mock<(event: ChangeEvent<HTMLInputElement>) => void>;

  beforeEach(() => {
    handleChange = vi.fn();
  });

  it('should render unchecked by default', () => {
    render(
      <Checkbox id="test-checkbox" checked={false} onChange={handleChange}>
        Text
      </Checkbox>,
    );

    const checkboxInput = screen.getByRole('checkbox', { name: 'Text' });

    expect(checkboxInput).not.toBeChecked();
  });

  it('should render checked when the checked prop is true', () => {
    render(
      <Checkbox id="test-checkbox" checked={true} onChange={handleChange}>
        Text
      </Checkbox>,
    );
    const checkboxInput = screen.getByRole('checkbox', { name: 'Text' });

    expect(checkboxInput).toBeChecked();
  });

  it('should call the onChange handler when clicked', () => {
    render(
      <Checkbox id="test-checkbox" checked={false} onChange={handleChange}>
        Text
      </Checkbox>,
    );

    const labelText = screen.getByText('Text');

    fireEvent.click(labelText);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
