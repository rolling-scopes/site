import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Numbers } from '@/widgets/numbers';

describe('Numbers', () => {
  beforeEach(() => {
    render(<Numbers />);
  });

  it('renders the component data correctly', () => {
    const title = screen.getByText('The Rolling Scopes in numbers');
    const subtitle = screen.getByText(/Everyone can discover/i);
    const mapImage = screen.getByTestId('numbers-map');
    const numbers = screen.getAllByText(/\d+\+?/, { exact: false });

    expect(title).toBeVisible();
    expect(subtitle).toBeVisible();
    expect(mapImage).toBeVisible();
    expect(numbers.length).toBe(4);
  });
});
