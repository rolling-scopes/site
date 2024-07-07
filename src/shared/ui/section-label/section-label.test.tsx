import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SectionLabel, cx } from './section-label';

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

  it('applies default variants correctly', () => {
    render(<SectionLabel label="Default Variant Label" />);
    const labelElement = screen.getByText('Default Variant Label');

    expect(labelElement).toHaveClass(cx('margin-large'));
    expect(labelElement).toHaveClass(cx('font-large'));
  });

  it('applies custom marginSize variant correctly', () => {
    render(<SectionLabel label="Custom Margin" marginSize="small" />);
    const labelElement = screen.getByText('Custom Margin');

    expect(labelElement).toHaveClass(cx('margin-small'));
  });

  it('applies custom fontSize variant correctly', () => {
    render(<SectionLabel label="Custom Font" fontSize="small" />);
    const labelElement = screen.getByText('Custom Font');

    expect(labelElement).toHaveClass(cx('font-small'));
  });

  it('merges className correctly', () => {
    render(
      <SectionLabel
        label="Custom Class"
        className="custom-class"
      />,
    );
    const labelElement = screen.getByText('Custom Class');

    expect(labelElement).toHaveClass(cx('label'));
    expect(labelElement).toHaveClass('custom-class');
  });
});
