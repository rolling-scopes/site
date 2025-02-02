import { screen } from '@testing-library/react';

import { Stages } from './stages';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';
import { renderWithRouter } from '@/shared/__tests__/utils';

describe('Stages Component', () => {
  const testStages = [
    {
      id: '1',
      title: 'Stage 1',
      description: 'Stages Description',
      logoIcon: MOCKED_IMAGE_PATH,
      links: [
        {
          href: 'test.com',
          linkTitle: 'test title',
          isActive: true,
        },
      ],
      topics: ['Advanced Javascript', 'Security'],
      imageSrc: MOCKED_IMAGE_PATH,
      list: ['Item 1', 'Item 2'],
    },
  ];

  it('renders stages and their details correctly', () => {
    renderWithRouter(<Stages stages={testStages} />);

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

  it('returns null when stages is null', () => {
    const { container } = renderWithRouter(<Stages stages={null} />);

    expect(container.firstChild).toBeNull();
  });

  it('returns null when stages is an empty array', () => {
    const { container } = renderWithRouter(<Stages stages={[]} />);

    expect(container.firstChild).toBeNull();
  });
});
