import { render, screen } from '@testing-library/react';

import { Trainers } from './ui/trainers';
import {
  MOCKED_MULTIPLE_TRAINERS,
  MOCKED_ONE_TRAINER,
  MOCKED_SEVERAL_TRAINERS,
} from '@/shared/__tests__/constants';

describe('Trainer', () => {
  it('renders the title correctly when 1 trainer', () => {
    render(<Trainers trainers={MOCKED_ONE_TRAINER} />);
    const titleElement = screen.getByText('Our trainer');

    expect(titleElement).toBeVisible();
  });

  it('renders the title correctly with lang ru prop', () => {
    render(<Trainers trainers={MOCKED_MULTIPLE_TRAINERS} lang="ru" />);
    const titleElement = screen.getByText('Преподаватели курса');

    expect(titleElement).toBeVisible();
  });

  it('renders the title correctly when several trainers', () => {
    render(<Trainers trainers={MOCKED_MULTIPLE_TRAINERS} />);
    const titleElement = screen.getByText('Our mentors and trainers');

    expect(titleElement).toBeVisible();
  });

  it('renders the trainer info correctly with "nodejs" props', () => {
    render(<Trainers trainers={MOCKED_ONE_TRAINER} />);
    const trainerNameElement = screen.getByText('Maksim Shylau');
    const trainerTitleElement = screen.getByText('Senior Software Engineer at Epam');
    const trainerDescriptionElement = screen.getByText(
      /Maksim Shylau is a professional with around 6 years/i,
    );

    expect(trainerNameElement).toBeVisible();
    expect(trainerTitleElement).toBeVisible();
    expect(trainerDescriptionElement).toBeVisible();
  });

  it('renders all the trainers if passed several (8 in items)', () => {
    const { container } = render(<Trainers trainers={MOCKED_SEVERAL_TRAINERS} />);
    const trainers = container.getElementsByClassName('trainer-card');

    expect(trainers).toHaveLength(8);
  });

  it('renders the image with correct alt text', () => {
    render(<Trainers trainers={MOCKED_ONE_TRAINER} />);
    const imageElement = screen.getByAltText('Maksim Shylau Senior Software Engineer at Epam');

    expect(imageElement).toBeInTheDocument();
  });
});
