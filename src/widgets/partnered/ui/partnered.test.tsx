import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Partnered } from './partnered';
import aws from '@/shared/assets/icons/aws-gray.svg';
import github from '@/shared/assets/svg/github.svg';
import jetbrains from '@/shared/assets/svg/jetbrains.svg';

describe('Partnered component', () => {
  it('should render the component with correct title', () => {
    render(<Partnered />);

    expect(screen.getByText('Partnered with')).toBeInTheDocument();

    expect(screen.getByTestId('widget-title')).toBeInTheDocument();
  });

  it('renders the title and logos correctly', () => {
    render(<Partnered />);

    const logos = screen.getAllByRole('img');

    expect(logos).toHaveLength(3);

    expect(screen.getByAltText('jetbrains icon')).toHaveAttribute('src', jetbrains.src);
    expect(screen.getByAltText('AWS icon')).toHaveAttribute('src', aws.src);
    expect(screen.getByAltText('github icon')).toHaveAttribute('src', github.src);
  });
});
