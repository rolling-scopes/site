import { render, screen } from '@testing-library/react';
import { Trainers } from './trainers';

describe('Trainer', () => {
  it('renders the title correctly when 1 trainer', () => {
    render(<Trainers courseName="nodejs" />);
    const titleElement = screen.getByText('Our trainer');
    expect(titleElement).toBeVisible();
  });

  it('renders the title correctly with "reactRu" props', () => {
    render(<Trainers courseName="reactRu" />);
    const titleElement = screen.getByText('Преподаватели курса');
    expect(titleElement).toBeVisible();
  });

  it('renders the title correctly when several trainers', () => {
    render(<Trainers courseName="angular" />);
    const titleElement = screen.getByText('Our mentors and trainers');
    expect(titleElement).toBeVisible();
  });

  it('renders the trainer info correctly with "nodejs" props', () => {
    render(<Trainers courseName="nodejs" />);
    const trainerNameElement = screen.getByText('Maksim Shylau');
    const trainerTitleElement = screen.getByText('Senior Software Engineer at Epam');
    const trainerDescriptionElement = screen.getByText(
      /Maksim Shylau is a professional with around 6 years/i,
    );

    expect(trainerNameElement).toBeVisible();
    expect(trainerTitleElement).toBeVisible();
    expect(trainerDescriptionElement).toBeVisible();
  });

  it('renders all the trainers if passed several (8 in angular)', () => {
    const { container } = render(<Trainers courseName="angular" />);
    const trainers = container.getElementsByClassName('trainer-card');
    expect(trainers).toHaveLength(8);
  });

  it('renders the image with correct alt text', () => {
    render(<Trainers courseName="nodejs" />);
    const imageElement = screen.getByAltText('Maksim Shylau Senior Software Engineer at Epam');
    expect(imageElement).toBeInTheDocument();
  });
});
