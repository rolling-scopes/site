import { screen } from '@testing-library/react';
import dayjs from 'dayjs';

import { CourseItem, CourseItemData } from '@/entities/course';
import { COURSE_DATE_FORMAT } from '@/entities/course/constants';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { dayJS } from '@/shared/helpers/day-js';
import { COURSE_TITLES } from 'data';

const mockedProps: CourseItemData = {
  title: COURSE_TITLES.REACT,
  language: 'en',
  startDate: dayJS().format(COURSE_DATE_FORMAT),
  registrationEndDate: dayJS().add(1, 'd').format(COURSE_DATE_FORMAT),
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
    const dateElement = screen.getByTestId('course-language');
    const courseDate = screen.getByTestId('date-time-start');

    expect(titleElement).toBeInTheDocument();
    expect(dateElement).toBeInTheDocument();
    expect(dateElement).toHaveTextContent('English');
    expect(courseDate).toHaveAttribute('datetime', expectedDate);
  });

  it('renders the LinkCustom component with correct href and text', () => {
    const link = screen.getByTestId('course-link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockedProps.detailsUrl);
  });
});
