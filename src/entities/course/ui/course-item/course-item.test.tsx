import { screen } from '@testing-library/react';
import dayjs from 'dayjs';
import { CourseItem, CourseItemData } from '@/entities/course';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants.ts';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { COURSE_TITLES } from 'data';

const mockedProps: CourseItemData = {
  title: COURSE_TITLES.REACT,
  language: ['en'],
  startDate: '2024-05-01',
  detailsUrl: '/courses/react-intro',
  iconSrc: MOCKED_IMAGE_PATH,
};

const expectedDate = dayjs(mockedProps.startDate).toISOString();

describe('CourseItem Component', () => {
  beforeEach(() => {
    renderWithRouter(<CourseItem {...mockedProps} />);
  });

  it('renders the component data as expected', () => {
    const titleElement = screen.getByText(mockedProps.title);
    const languageInitial = mockedProps.language[0].toUpperCase();
    const dateElement = screen.getByTestId('course-language');
    const courseDate = screen.getByTestId('course-date');

    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveTextContent(`• ${languageInitial}`);
    expect(courseDate).toHaveAttribute('datetime', expectedDate);
  });

  it('renders the LinkCustom component with correct href and text', () => {
    const link = screen.getByTestId('course-link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockedProps.detailsUrl);
  });
});
