import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

import { NavItem } from './Navbar';

describe('NavItem', () => {
  const mockToggleMenu = vi.fn();

  it('renders correctly', () => {
    render(
      <BrowserRouter>
        <NavItem label="Test" href="/test" toggleMenu={mockToggleMenu} />
      </BrowserRouter>
    );
    const linkElement = screen.getByText('Test');
    expect(linkElement).toBeInTheDocument();
  });

  it('calls toggleMenu on click when window innerWidth is less than or equal to 810', () => {
    render(
      <BrowserRouter>
        <NavItem label="Test" href="#test" toggleMenu={mockToggleMenu} />
      </BrowserRouter>
    );
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 810 });

    const linkElement = screen.getByText('Test');
    fireEvent.click(linkElement);

    expect(mockToggleMenu).toHaveBeenCalledTimes(1);
  });
});

import { Navbar } from './Navbar';

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const navbarElement = screen.getByTestId('navigation');
    expect(navbarElement).toBeInTheDocument();
  });
});
