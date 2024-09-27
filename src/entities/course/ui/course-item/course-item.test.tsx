import { screen } from '@testing-library/react';
import { CourseItem as TCourseItem } from '@/entities/course';
import { CourseItem } from '@/entities/course/ui/course-item/course-item.tsx';
import { renderWithRouter } from '@/shared/__tests__/utils';

const mockedProps: TCourseItem = {
  title: 'Introduction to React',
  language: ['en'],
  startDate: '2024-05-01',
  detailsUrl: '/courses/react-intro',
  buttonText: 'View Details',
  iconSrc: '/images/react-icon.png',
};

describe('CourseItem Component', () => {
  beforeEach(() => {
    renderWithRouter(<CourseItem {...mockedProps} />);
  });

  it('renders the course title', () => {
    const titleElement = screen.getByText(mockedProps.title);

    expect(titleElement).toBeInTheDocument();
  });

  it('renders the course language with the first letter capitalized', () => {
    const languageInitial = mockedProps.language[0].toUpperCase();
    const dateElement = screen.getByText(`${mockedProps.startDate} • ${languageInitial}`);

    expect(dateElement).toBeInTheDocument();
  });

  it('renders the start date correctly', () => {
    const dateElement = screen.getByText(
      `${mockedProps.startDate} • ${mockedProps.language[0].toUpperCase()}`,
    );

    expect(dateElement).toHaveTextContent(
      `${mockedProps.startDate} • ${mockedProps.language[0].toUpperCase()}`,
    );
  });

  it('renders the LinkCustom component with correct href and text', () => {
    const link = screen.getByTestId('course-link') as HTMLAnchorElement;

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', mockedProps.detailsUrl);
    expect(link).toHaveTextContent(mockedProps.buttonText);
  });
});
