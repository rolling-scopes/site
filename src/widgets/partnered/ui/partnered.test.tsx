import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Partnered } from './partnered';
import { partners } from '../constants';

describe('Partnered component', () => {
  beforeEach(() => {
    render(<Partnered />);
  });
  it('renders correct content for component', async () => {
    const title = await screen.findByTestId('widget-title');
    const partnersList = await screen.findByTestId('partners-list');

    expect(title).toBeVisible();
    expect(title.textContent).toBe('Partnered with');

    expect(partnersList).toBeVisible();
    expect(partnersList.children).toHaveLength(partners.length);
  });
});
