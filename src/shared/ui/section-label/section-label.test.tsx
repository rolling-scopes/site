import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SectionLabel } from './section-label';

describe('SectionLabel component', () => {
  const props = { label: 'Test Label' };

  it('converts non-string label props to string', () => {
    const nonStringLabel = 12345;

    // @ts-expect-error unit tests
    render(<SectionLabel label={nonStringLabel} />);
    const labelElement = screen.getByText('12345');

    expect(labelElement).toBeInTheDocument();
  });

  it('displays correct label', () => {
    render(<SectionLabel {...props} />);
    const label = screen.getByText('Test Label');

    expect(label).toBeInTheDocument();
  });

  it('renders with default variants', () => {
    render(<SectionLabel label="Default Variant Label" />);
    const labelElement = screen.getByText('Default Variant Label');

    expect(labelElement).toBeInTheDocument();
  });

  it('renders with custom marginSize variant', () => {
    render(<SectionLabel label="Custom Margin" marginSize="small" />);
    const labelElement = screen.getByText('Custom Margin');

    expect(labelElement).toBeInTheDocument();
  });

  it('renders with custom fontSize variant', () => {
    render(<SectionLabel label="Custom Font" fontSize="small" />);
    const labelElement = screen.getByText('Custom Font');

    expect(labelElement).toBeInTheDocument();
  });

  it('merges className correctly', () => {
    render(<SectionLabel label="Custom Class" className="custom-class" />);
    const labelElement = screen.getByText('Custom Class');

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveClass('custom-class');
  });
});
