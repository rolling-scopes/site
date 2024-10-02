import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AboutCourseGrid } from './about-course-grid';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

const mockedData = [
  {
    id: 1,
    title: 'Title 1',
    info: 'Info 1',
    icon: MOCKED_IMAGE_PATH,
    alt: 'facts about the course - Title 1',
  },
  {
    id: 2,
    title: 'Title 2',
    info: 'Info 2',
    icon: MOCKED_IMAGE_PATH,
    alt: 'facts about the course - Title 2',
  },
];

describe('AboutCourseGrid component', () => {
  let itemElements: HTMLElement[];

  beforeEach(() => {
    render(<AboutCourseGrid items={mockedData} />);
    itemElements = screen.getAllByTestId('about-course-grid-item');
  });

  it('renders correct number of items', () => {
    expect(itemElements).toHaveLength(mockedData.length);
  });

  it('renders correct content for each item', () => {
    itemElements.forEach((item, index) => {
      const titles = screen.getAllByTestId('subtitle');
      const infoArray = screen.getAllByTestId('paragraph');

      expect(item).toBeVisible();
      expect(titles[index].textContent).toBe(mockedData[index].title);
      expect(infoArray[index].textContent).toBe(mockedData[index].info);
    });
  });

  it('renders correct image for each item', () => {
    const images = screen.getAllByTestId('grid-icon');

    images.forEach((image, index) => {
      expect(image).toBeVisible();
      expect(image).toHaveAttribute('src', MOCKED_IMAGE_PATH);
      expect(image).toHaveAttribute('alt', mockedData[index].alt);
    });
  });
});
