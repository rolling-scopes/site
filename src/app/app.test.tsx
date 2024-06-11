import { act } from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import App from './app';

describe('App component tests', () => {
  it('renders without crashing', async () => {
    const result = await act(async () => render(<App />));
    const { container } = result;
    expect(container.firstChild).toHaveClass('app-styles');
  });

  it('does not log errors in console', async () => {
    const spy = vi.spyOn(global.console, 'error');
    await act(async () => render(<App />));
    expect(spy).not.toHaveBeenCalled();
  });
});
