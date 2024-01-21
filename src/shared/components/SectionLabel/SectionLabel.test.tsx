import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionLabel } from './SectionLabel';

describe('SectionLabel component', () => {
  const props = {
    label: 'Test Label'
  };

  it('converts non-string label props to string', () => {
    const nonStringLabel = 12345;

    // @ts-ignore
    render(<SectionLabel label={nonStringLabel} />);
    const labelElement = screen.getByText('12345');
    expect(labelElement).toBeInTheDocument();
  });

  it('displays correct label', () => {
    render(<SectionLabel {...props} />);
    const label = screen.getByText('Test Label');
    expect(label).toBeInTheDocument();
  });
});
