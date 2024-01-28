import { render } from '@testing-library/react';
import App from './app';
import { describe, expect, it, vi } from 'vitest';

describe('App component tests', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass('App');
  });

  it('does not log errors in console', () => {
    const spy = vi.spyOn(global.console, 'error');
    render(<App />);
    expect(spy).not.toHaveBeenCalled();
  });
});
