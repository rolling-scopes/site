import { render, screen } from '@testing-library/react';

import { Stages } from './stages';
import { MOCKED_IMAGE_PATH } from '@/shared/__tests__/constants';

const mockedStages = [
  {
    id: 1,
    title: 'Test stage title 1',
    intro: 'Test stage intro 1',
    modules: [
      {
        id: 1,
        text: '',
        links: [
          {
            id: 1,
            text: '',
            title: 'Test link 1 title',
            link: 'https://test1.com',
            external: false,
          },
        ],
        marked: false,
      },
    ],
    image: {
      src: MOCKED_IMAGE_PATH,
      alt: 'TestTitle 1',
      className: 'stage-image',
    },
  },
  {
    id: 2,
    title: 'Test stage title 2',
    intro: 'Test stage intro 2',
    modules: [
      {
        id: 1,
        text: '',
        links: [
          {
            id: 1,
            text: '',
            title: 'Test link 2 title',
            link: 'https://test2.com',
            external: false,
          },
        ],
        marked: false,
      },
    ],
    image: {
      src: MOCKED_IMAGE_PATH,
      alt: 'TestTitle 2',
      className: 'stage-image',
    },
  },
];

describe('Stages Component', () => {
  it('renders Stages component with all cards correctly if stages is not null', () => {
    render(<Stages stages={mockedStages} />);

    const cardsContainer = screen.getByTestId('stages');
    const itemElements = screen.getAllByTestId('stage-card');

    expect(cardsContainer).toBeVisible();
    expect(itemElements).toHaveLength(mockedStages.length);

    itemElements.forEach((item) => {
      expect(item).toBeVisible();
    });
  });

  it.each([[null], [[]]])(
    'should render empty DOM element when stages is null or empty array',
    (stages) => {
      const stagesContainer = render(<Stages stages={stages} />);

      expect(stagesContainer.container).toBeEmptyDOMElement();
    });
});
