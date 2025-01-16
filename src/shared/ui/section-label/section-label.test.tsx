import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SectionLabel } from './section-label';

describe('SectionLabel component', () => {
  it('converts non-string label props to string', () => {
    const nonStringChildren = 12345;

    render(<SectionLabel>{nonStringChildren}</SectionLabel>);
    const labelElement = screen.getByText('12345');

    expect(labelElement).toBeInTheDocument();
  });

  it('displays correct label', () => {
    const children = 'Test Label';

    render(<SectionLabel>{children}</SectionLabel>);
    const label = screen.getByText('Test Label');

    expect(label).toBeInTheDocument();
  });
});
