import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Partnered } from '.';

describe('Partnered', () => {
  it('should render Partnered component', () => {
    const { getByTestId } = render(<Partnered />);
    const partnered = getByTestId('partnered');

    expect(partnered).toBeInTheDocument();
  });
});
