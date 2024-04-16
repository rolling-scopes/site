import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Numbers } from './numbers';

describe('Numbers', () => {
  beforeEach(() => {
    render(<Numbers />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('The Rolling Scopes in numbers');
    expect(titleElement).toBeVisible();
  });

  it('renders the subtitle correctly', () => {
    const subtitleElement = screen.getByText(/Everyone can discover/i);
    expect(subtitleElement).toBeInTheDocument();
  });

  it('renders the numbers correctly', () => {
    const numbers = screen.getAllByText(/\d+\+?/, { exact: false });
    expect(numbers.length).toBe(4);
  });

  it('renders the map image', () => {
    const mapImage = screen.getByAltText('map');
    expect(mapImage).toBeInTheDocument();
  });
});
