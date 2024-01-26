import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Title, TitleType } from './Title';

describe('Title component', () => {
  it('renders without crashing', () => {
    render(<Title text="TestTitle" />);
    const title = screen.getByText('TestTitle');
    expect(title).toBeInTheDocument();
  });

  it('applies correct CSS based on Title Type Extra Big', () => {
    render(<Title text="TestTitle" type={TitleType.ExtraBig} />);
    const title = screen.getByText('TestTitle');
    expect(title.parentElement).toHaveClass('extra-big');
  });

  it('displays an asterisk when hasAsterisk prop is set', () => {
    render(<Title text="TestTitle" hasAsterisk />);
    const asterisk = screen.getByText('*');
    expect(asterisk).toBeInTheDocument();
  });

  it('displays lines when hasLines prop is set', () => {
    render(<Title text="TestTitle" hasLines />);
    const lines = screen.getByText('‖');
    expect(lines).toBeInTheDocument();
  });

  it('renders children correctly', () => {
    render(
      <Title>
        <div>Child element</div>
      </Title>
    );

    const child = screen.getByText('Child element');
    expect(child).toBeInTheDocument();
  });
});
