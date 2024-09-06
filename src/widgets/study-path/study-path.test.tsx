import { screen } from '@testing-library/react';
import { StudyPath } from './ui/study-path';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';

const testStages = [
  {
    id: '1',
    title: 'Stage 1',
    description: 'Stages Description',
    logoIcon: MOCKED_IMAGE_PATH,
    links: [{
      href: 'test.com',
      linkTitle: 'test title',
      isActive: true,
    }],
    topics: ['Advanced Javascript', 'Security'],
    imageSrc: MOCKED_IMAGE_PATH,
    list: ['Item 1', 'Item 2'],
  },
];

vi.mock('@/shared/hooks/use-data-by-name', () => ({ useDataByName: vi.fn().mockImplementation(() => ({ data: testStages })) }));

describe('StudyPath Component', () => {
  it('renders the title and paragraph text correctly for angularPath', () => {
    renderWithRouter(<StudyPath path="angular" />);

    expect(screen.getByText('Course Curriculum')).toBeInTheDocument();
    expect(
      screen.getByText('This program will have theory and practice on the following topic:'),
    ).toBeInTheDocument();
  });

  it('renders the title and paragraph text correctly for awsDevPath', () => {
    renderWithRouter(<StudyPath path="awsDev" />);

    expect(screen.getByText('Course Curriculum')).toBeInTheDocument();
    expect(
      screen.getByText('This program will have theory and practice on the following topic:'),
    ).toBeInTheDocument();
  });

  it('renders the title and paragraph text correctly for other paths', () => {
    renderWithRouter(<StudyPath path="javascript" />);

    expect(screen.getByText('Choose what you want to learn')).toBeInTheDocument();
    expect(
      screen.getByText(/A full-stack developer is someone who has expertise in both frontend/),
    ).toBeInTheDocument();
  });

  it('renders stages and their details correctly', () => {
    renderWithRouter(<StudyPath path="angular" />);

    testStages.forEach((stage) => {
      const { title, description, topics, list } = stage;

      expect(screen.getByText(title)).toBeInTheDocument();

      if (description) {
        expect(screen.getByText(description)).toBeInTheDocument();
      }

      if (topics) {
        topics.forEach((topic) => {
          expect(screen.getByText(topic)).toBeInTheDocument();
        });
      }

      list?.forEach((listItem) => {
        expect(screen.getByText(listItem)).toBeInTheDocument();
      });
    });
  });
});
