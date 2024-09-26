import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AboutCourseGrid } from './about-course-grid';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

describe('AboutCourseGrid component', () => {
  const dummyData = [
    {
      id: 1,
      title: 'Title 1',
      info: 'Info 1',
      icon: MOCKED_IMAGE_PATH,
    },
    {
      id: 2,
      title: 'Title 2',
      info: 'Info 2',
      icon: MOCKED_IMAGE_PATH,
    },
  ];

  it('renders correct number of items', () => {
    render(<AboutCourseGrid items={dummyData} />);

    const itemElements = screen.getAllByTestId('about-course-grid-item');

    expect(itemElements).toHaveLength(dummyData.length);
  });

  it('renders correct content for each item', () => {
    render(<AboutCourseGrid items={dummyData} />);

    dummyData.forEach(({ title, info }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(info)).toBeInTheDocument();
    });
  });

  // TODO fix tests
  it.skip('renders correct image for each item', () => {
    render(<AboutCourseGrid items={dummyData} />);

    dummyData.forEach(({ title }) => {
      expect(screen.getByAltText(title).getAttribute('src')).toEqual(MOCKED_IMAGE_PATH);
    });
  });
});
