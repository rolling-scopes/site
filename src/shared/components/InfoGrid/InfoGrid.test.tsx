import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { InfoGrid } from './InfoGrid';

describe('InfoGrid component', () => {
  const dummyData = [
    { id: 1, title: 'Title 1', info: 'Info 1', icon: 'mocked-image-path' },
    { id: 2, title: 'Title 2', info: 'Info 2', icon: 'mocked-image-path' }
  ];

  it('renders correct number of items', () => {
    render(<InfoGrid items={dummyData} />);

    const itemElements = screen.getAllByTestId('info-grid-item');
    expect(itemElements).toHaveLength(dummyData.length);
  });

  it('renders correct content for each item', () => {
    render(<InfoGrid items={dummyData} />);

    dummyData.forEach(({ title, info }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(info)).toBeInTheDocument();
    });
  });

  it('renders correct image for each item', () => {
    render(<InfoGrid items={dummyData} />);

    dummyData.forEach(({ title }) => {
      expect(screen.getByAltText(title).getAttribute('src')).toEqual('mocked-image-path');
    });
  });
});
