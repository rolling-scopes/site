import { render, screen } from '@testing-library/react';
import { Stages, StagesProps } from './stages';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

describe('Stages Component', () => {
  const testStages: StagesProps['stages'] = [
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
      actions: ['Action 1', 'Action 2'],
    },
  ];

  it('renders stages and their details correctly', () => {
    render(<Stages stages={testStages} />);

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

  it('returns null when stages is null', () => {
    const { container } = render(<Stages stages={null} />);

    expect(container.firstChild).toBeNull();
  });

  it('returns null when stages is an empty array', () => {
    const { container } = render(<Stages stages={[]} />);

    expect(container.firstChild).toBeNull();
  });
});
