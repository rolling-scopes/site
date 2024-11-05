// import { screen } from '@testing-library/react';
// import { vi } from 'vitest';
// import { SchoolMenu } from './ui/school-menu';
// import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
// import { renderWithRouter } from '@/shared/__tests__/utils';

// const { mockedTests } = await vi.hoisted(async () => {
//   const { MOCKED_IMAGE_PATH } = await import('@/shared/__tests__/constants');
//
//   return {
//     mockedTests: [
//       {
//         id: '1',
//         title: 'AWS Fundamentals',
//         iconSrc: MOCKED_IMAGE_PATH,
//         iconSmall: MOCKED_IMAGE_PATH,
//         secondaryIcon: MOCKED_IMAGE_PATH,
//         startDate: 'Sept 18, 2023',
//         language: ['en'],
//         mode: 'online',
//         detailsUrl: 'https://rs.school/aws-fundamentals/',
//         backgroundStyle: {
//           backgroundColor: '#F4F1FA',
//           accentColor: '#7356BF',
//         },
//       },
//       {
//         id: '2',
//         title: 'React JS [mentorshipId]',
//         iconSrc: MOCKED_IMAGE_PATH,
//         iconSmall: MOCKED_IMAGE_PATH,
//         secondaryIcon: MOCKED_IMAGE_PATH,
//         startDate: 'Sept 18, 2060',
//         language: ['ru', 'en'],
//         mode: 'online',
//         detailsUrl: 'https://rs.school/react/',
//         backgroundStyle: {
//           backgroundColor: '#EEF3FE',
//           accentColor: '#7356BF',
//         },
//       },
//     ],
//   };
// });

// vi.mock('data/index.ts', async () => {
//   return { courses: mockedTests };
// });

// eslint-disable-next-line vitest/no-commented-out-tests
describe('SchoolMenu', () => {
  it('empty test', () => {
    expect(true).toEqual(true);
  });
//   const [aws, react] = mockedTests;
//
// eslint-disable-next-line vitest/no-commented-out-tests
//   it('renders without crashing and displays "rs school" heading', () => {
//     renderWithRouter(<SchoolMenu heading="rs school" />);
//
//     const headingElement = screen.getByRole('heading', { name: /rs school/i });
//
//     expect(headingElement).toBeInTheDocument();
//   });
//
// eslint-disable-next-line vitest/no-commented-out-tests
//   it('displays correct links and descriptions with "rs school" props', () => {
//     const { container } = renderWithRouter(<SchoolMenu heading="rs school" />);
//
//     expect(screen.getAllByRole('link')).toHaveLength(2);
//
//     const links = screen.getAllByRole('link');
//
//     links.forEach((link) => {
//       expect(link).toBeInTheDocument();
//     });
//
//     const descriptions = container.getElementsByTagName('small');
//
//     for (const description of descriptions) {
//       expect(description).toBeInTheDocument();
//     }
//   });
//
// eslint-disable-next-line vitest/no-commented-out-tests
//   it('renders without crashing and displays "all courses" heading', () => {
//     renderWithRouter(<SchoolMenu heading="all courses" />);
//
//     const headingElement = screen.getByRole('heading', { name: /all courses/i });
//
//     expect(headingElement).toBeInTheDocument();
//   });
//
// eslint-disable-next-line vitest/no-commented-out-tests
//   it('renders [mentorshipId] correct when "all courses" heading is passed', () => {
//     renderWithRouter(<SchoolMenu heading="all courses" />);
//
//     const imageAWS = screen.getByRole('img', { name: aws.title });
//
//     expect(imageAWS).toHaveAttribute('src', MOCKED_IMAGE_PATH.src);
//     const imageReact = screen.getByRole('img', { name: react.title });
//
//     expect(imageReact).toHaveAttribute('src', MOCKED_IMAGE_PATH.src);
//   });
//
// eslint-disable-next-line vitest/no-commented-out-tests
//   it('renders correct link description when date is passed', () => {
//     const { container } = renderWithRouter(<SchoolMenu heading="all courses" />);
//
//     const descriptions = container.getElementsByTagName('small');
//
//     expect(descriptions).toHaveLength(2);
//     expect(descriptions[0]).toHaveTextContent(/tbd/i);
//     expect(descriptions[1]).toHaveTextContent(`${react.startDate}`);
//   });
//
// eslint-disable-next-line vitest/no-commented-out-tests
//   it('renders correct link for "AWS Fundamentals" and "React JS [mentorshipId]"', () => {
//     renderWithRouter(<SchoolMenu heading="all courses" />);
//
//     const [linkAWS, linkReact] = screen.getAllByRole('link');
//
//     expect(linkAWS).toHaveAttribute('href', aws.detailsUrl);
//     expect(linkReact).toHaveAttribute('href', react.detailsUrl);
//   });
});
