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
    alt: '',
  },
  {
    id: 2,
    title: 'Title 2',
    info: 'Info 2',
    icon: MOCKED_IMAGE_PATH,
    alt: '',
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

  it.each([[mockedData[0]], [mockedData[1]]])(
    'should render title, info and image with its attributes of %o grid-item',
    (o) => {
      const title = screen.getByText(o.title);
      const info = screen.getByText(o.info);
      const images = screen.getAllByTestId('grid-icon');

      expect(title).toBeVisible();
      expect(info).toBeVisible();

      images.forEach((image) => {
        expect(image).toBeVisible();
        expect(image).toHaveAttribute('src', o.icon.src);
        expect(image).toHaveAttribute('alt', o.alt);
      });
    },
  );
});
