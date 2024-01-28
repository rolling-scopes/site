import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StageCard } from './StageCard';
import { type StageCardProps } from './StageCard.types';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

describe('StageCard component', () => {
  const props: StageCardProps = {
    id: 1,
    title: 'TestTitle',
    description: 'Test description for the card.',
    logoIcon: MOCKED_IMAGE_PATH,
    links: [
      { href: 'https://test1.com', linkTitle: 'Test link 1' },
      { href: 'https://test2.com', linkTitle: 'Test link 2', isActive: false }
    ]
  };

  it('renders without crashing', () => {
    render(<StageCard {...props} />);
    const card = screen.getByText('TestTitle');
    expect(card).toBeInTheDocument();
  });

  it('displays correct id', () => {
    render(<StageCard {...props} />);
    const id = screen.getByText('1');
    expect(id).toBeInTheDocument();
  });

  it('displays correct title', () => {
    render(<StageCard {...props} />);
    const title = screen.getByText('TestTitle');
    expect(title).toBeInTheDocument();
  });

  it('displays correct description', () => {
    render(<StageCard {...props} />);
    const description = screen.getByText('Test description for the card.');
    expect(description).toBeInTheDocument();
  });

  it('displays correct links', () => {
    render(<StageCard {...props} />);
    const link1 = screen.getByText('Test link 1');
    const link2 = screen.getByText('Test link 2');
    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
  });

  it('assigns correct href to links', () => {
    render(<StageCard {...props} />);
    const link1 = screen.getByText('Test link 1');
    const link2 = screen.getByText('Test link 2');

    expect(link1).toHaveAttribute('href', 'https://test1.com');
    expect(link2).toHaveAttribute('href', 'https://test2.com');
  });

  it('correctly assigns active and inactive classes to links', () => {
    render(<StageCard {...props} />);
    const link1 = screen.getByText('Test link 1');
    const link2 = screen.getByText('Test link 2');
    expect(link1).not.toHaveClass('disabled');
    expect(link2).toHaveClass('disabled');
  });

  it('renders the logo img with correct src and alt attributes', () => {
    render(<StageCard {...props} />);
    const logo = screen.getByAltText('TestTitle');
    expect(logo).toHaveAttribute('src', MOCKED_IMAGE_PATH);
  });
});
