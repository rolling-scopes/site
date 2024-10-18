import { screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { Contribute } from './contribute';
import { renderWithRouter } from '@/shared/__tests__/utils';
import contributeImage from '@/shared/assets/contribute.webp';

const descriptions = [
  /Contributing to The Rolling Scopes/i,
  /Remember, teaching others is one of the best ways/i,
  /Additionally, we provide feedback on LinkedIn/i,
];
const optionsMock = [
  {
    title: 'Mentorship',
    description:
      'Become a mentor and guide the next generation of developers. Sign up as a mentor here.',
    linkLabel: 'Register as a mentor',
    href: 'https://app.rs.school/registry/mentor',
  },
  {
    title: 'Developer / Coordinator / Trainer',
    description:
      'Contribute your skills as a developer, coordinator, or trainer. Fill out this form to get started.',
    linkLabel: 'Become a contributor',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdGKdEHK1CnZjgll9PpMU0xD1m0hm6xGoXc98H7woCDulyQkg/viewform',
  },
];

let widget: HTMLElement;
let title: HTMLElement;
let paragraph: HTMLElement[];
let options: HTMLElement[];
let image: HTMLElement;

describe('Contribute component', () => {
  beforeEach(() => {
    renderWithRouter(<Contribute />);
    widget = screen.getByTestId('contribute');
    title = screen.getByTestId('widget-title');
    paragraph = screen.getAllByTestId('paragraph');
    options = screen.getAllByTestId('option-item');
    image = screen.getByTestId('contribute-image');
  });

  it('renders the component content correctly', () => {
    expect(widget).toBeVisible();
    expect(title).toBeVisible();
    expect(title).toHaveTextContent('How to Contribute');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('alt', 'Sloth mascot dressed in a superhero costume');
    expect(image).toHaveAttribute('src', contributeImage);
  });

  describe('Paragraph content checks', () => {
    test.each(descriptions)('checks that the paragraph contains the text: %s', (description) => {
      const matches = paragraph.some((item) => description.test(item.textContent || ''));

      expect(matches).toBe(true);
    });
  });

  describe('Option content checks', () => {
    it.each(optionsMock.map((option, index) => [option, index]))(
      'renders the correct options content for option %#',
      (option, index) => {
        const optionElement = options[index];
        const subtitle = within(optionElement).getByTestId('subtitle');
        const description = within(optionElement).getByTestId('paragraph');

        expect(subtitle).toBeInTheDocument();
        expect(subtitle).toHaveTextContent(option.title);
        expect(description).toBeInTheDocument();
        expect(description).toHaveTextContent(option.description);
      },
    );
  });
});
