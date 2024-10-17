import { render, screen } from '@testing-library/react';
import { Trainers } from './trainers';
import { MOCKED_ONE_TRAINER, MOCKED_SEVERAL_TRAINERS } from '@/shared/__tests__/constants';

describe('Trainers component', () => {
  const { name, role, bio, photo } = MOCKED_ONE_TRAINER[0];
  const mockedTitle = {
    ru: 'Команда курса',
    en: 'Course Team',
  };

  it('renders without crashing', () => {
    render(<Trainers trainers={MOCKED_ONE_TRAINER} />);
    const trainers = screen.getByTestId('trainers');

    expect(trainers).toBeVisible();
  });

  it('renders the content correctly with mocked props', () => {
    render(<Trainers trainers={MOCKED_ONE_TRAINER} />);
    const titleElement = screen.getByTestId('widget-title');
    const trainerNameElement = screen.getByText(name);
    const trainerTitleElement = screen.getByText(role);
    const trainerDescriptionElement = screen.getByText(bio);
    const trainerImageElement = screen.getByAltText(`${name} ${role}`);

    expect(titleElement).toBeVisible();
    expect(trainerNameElement).toBeVisible();
    expect(trainerTitleElement).toBeVisible();
    expect(trainerDescriptionElement).toBeVisible();
    expect(trainerImageElement).toBeVisible();

    expect(titleElement).toHaveTextContent(mockedTitle.en);
    expect(trainerImageElement).toHaveAttribute('src', photo);
  });

  it('renders the title content correctly with lang ru prop', () => {
    render(<Trainers trainers={MOCKED_ONE_TRAINER} lang="ru" />);
    const titleElement = screen.getByTestId('widget-title');

    expect(titleElement).toHaveTextContent(mockedTitle.ru);
  });

  it('renders all the trainers if passed several (8 in items)', () => {
    render(<Trainers trainers={MOCKED_SEVERAL_TRAINERS} />);
    const trainers = screen.getByTestId('trainers-list');

    expect(trainers.childNodes).toHaveLength(8);
  });
});
