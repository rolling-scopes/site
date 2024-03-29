import { render, screen } from '@testing-library/react';
import { it, vi, expect, describe, beforeEach, Mock } from 'vitest';
import { Courses } from './courses';
import { useWindowSize } from '@/app/hooks';

describe('Courses', () => {
  vi.mock('@/app/hooks', () => ({
    useWindowSize: vi.fn().mockReturnValue({ width: 1440, height: 900 })
  }));

  beforeEach(() => {
    render(<Courses />);
  });

  it('renders the title correctly', () => {
    const titleElement = screen.getByText('Upcoming courses');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders course info correctly', () => {
    const courseElement = screen.getByText('Node.js (EN)');
    expect(courseElement).toBeInTheDocument();
  });

  it('renders three course cards', () => {
    const courseCards = screen.getAllByRole('link', { name: 'More arrow_forward' });
    expect(courseCards.length).toBe(3);
  });

  it('renders link with arrow only on window size 810px', () => {
    (useWindowSize as Mock).mockReturnValue({ width: 810, height: 900 });
    render(<Courses />);
    const courseCards = screen.getAllByRole('link', { name: 'arrow_forward' });
    expect(courseCards.length).toBe(3);
  });

  it('renders link with "More details arrow_forward" on window size 810px', () => {
    (useWindowSize as Mock).mockReturnValue({ width: 1441, height: 900 });
    render(<Courses />);
    const courseCards = screen.getAllByRole('link', { name: 'More details arrow_forward' });
    expect(courseCards.length).toBe(3);
  });

  it('renders the Go to RS School button', () => {
    const goButton = screen.getByText('Go to RS School');
    expect(goButton).toBeInTheDocument();
  });

  it('should render RSLogo', () => {
    const rsLogo = screen.getByTestId('rslogo');
    expect(rsLogo).toBeInTheDocument();
  });
});
