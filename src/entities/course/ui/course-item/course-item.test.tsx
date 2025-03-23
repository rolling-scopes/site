import { screen } from '@testing-library/react';
import dayjs from 'dayjs';

import { CourseItem, CourseItemData } from '@/entities/course';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { dayJS } from '@/shared/helpers/dayJS';
import { COURSE_TITLES } from 'data';

const mockedProps: CourseItemData = {
  title: COURSE_TITLES.REACT,
  language: 'en',
  startDate: dayJS().toISOString(),
  registrationEndDate: dayJS().add(1, 'd').toISOString(),
  detailsUrl: '/courses/react-intro',
  iconSrc: MOCKED_IMAGE_PATH,
};

const expectedDate = dayjs(mockedProps.startDate).toISOString();

describe('CourseItem Component', () => {
  beforeEach(() => {
    renderWithRouter(<CourseItem {...mockedProps} />);
  });

  it('renders the component data as expected', async () => {
    const titleElement = screen.getByText(mockedProps.title);
    const languageInitial = mockedProps.language[0];
    const dateElements = await screen.findAllByTestId('course-language');
    const courseDates = screen.getAllByTestId('date-time-start');

    dateElements.forEach((el) => {
      expect(el).toHaveTextContent(`${languageInitial}`);
      expect(el).toBeInTheDocument();
    });

    courseDates.forEach((el, index) => {
      if (index === 0) {
        expect(el).toHaveAttribute('datetime', expectedDate);
      } else {
        expect(el).toHaveAttribute('datetime', mockedProps.registrationEndDate);
      }
    });

    expect(titleElement).toBeInTheDocument();
  });

  it('renders the LinkCustom component with correct href and text', () => {
    const link = screen.getByTestId('course-link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockedProps.detailsUrl);
  });
});
