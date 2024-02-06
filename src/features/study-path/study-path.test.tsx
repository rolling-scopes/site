import { render, screen } from '@testing-library/react';
import { StudyPath } from './study-path';
import { MOCKED_IMAGE_PATH } from '@/__tests__/constants';

const testStages = [
  {
    id: '1',
    title: 'Stage 1',
    description: 'Stages Description',
    logoIcon: MOCKED_IMAGE_PATH,
    links: [{ href: 'test.com', linkTitle: 'test title', isActive: true }],
    topics: ['Advanced Javascript', 'Security'],
    imageSrc: MOCKED_IMAGE_PATH,
    actions: ['Action 1', 'Action 2']
  }
];

vi.mock('@/app/hooks', () => ({
  useDataByName: vi.fn().mockImplementation(() => ({
    data: testStages
  }))
}));

describe('StudyPath Component', () => {
  it('renders the title and paragraph text correctly for angularPath', () => {
    const path = 'angularPath';
    render(<StudyPath path={path} />);

    expect(screen.getByText('Course Curriculum')).toBeInTheDocument();
    expect(
      screen.getByText('This program will have theory and practice on the following topic:')
    ).toBeInTheDocument();
  });

  it('renders the title and paragraph text correctly for awsDevPath', () => {
    const path = 'awsDevPath';
    render(<StudyPath path={path} />);

    expect(screen.getByText('Course Curriculum')).toBeInTheDocument();
    expect(
      screen.getByText('This program will have theory and practice on the following topic:')
    ).toBeInTheDocument();
  });

  it('renders the title and paragraph text correctly for other paths', () => {
    const path = 'javascriptPath';
    render(<StudyPath path={path} />);

    expect(screen.getByText('Choose what you want to learn')).toBeInTheDocument();
    expect(
      screen.getByText(/A full-stack developer is someone who has expertise in both frontend/)
    ).toBeInTheDocument();
  });

  it('renders stages and their details correctly', () => {
    const path = 'angularPath';

    render(<StudyPath path={path} />);

    testStages.forEach((stage) => {
      const { title, description, topics, actions } = stage;

      expect(screen.getByText(title)).toBeInTheDocument();

      if (description) {
        expect(screen.getByText(description)).toBeInTheDocument();
      }

      if (topics) {
        topics.forEach((topic) => {
          expect(screen.getByText(topic)).toBeInTheDocument();
        });
      }

      if (actions) {
        actions.forEach((action) => {
          expect(screen.getByText(action)).toBeInTheDocument();
        });
      }
    });
  });
});
