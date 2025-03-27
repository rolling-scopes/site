import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Faq } from './faq';
import { MOCKED_FAQ, MOCKED_FAQ_WITH_LINKS } from '@/shared/__tests__/constants';

const widgetTitle = 'FAQ';

describe('FAQ component', () => {
  it('renders widget without crashing and display correct content', () => {
    render(<Faq faqData={MOCKED_FAQ} />);

    const widget = screen.getByTestId('faq');
    const title = screen.getByTestId('widget-title');
    const faqList = screen.getByTestId('faq-list');
    const faqQuestions = screen.getAllByTestId('faq-question');

    expect(widget).toBeVisible();
    expect(title).toBeVisible();
    expect(faqList).toBeVisible();
    expect(title).toHaveTextContent(widgetTitle);
    expect(faqQuestions.length).toBe(MOCKED_FAQ.length);

    faqQuestions.forEach((question) => expect(question).toBeVisible());
    faqQuestions.forEach((faqQuestion) => {
      const question = MOCKED_FAQ.find(
        (item, index) => `${index + 1}. ${item.question}` === faqQuestion.textContent,
      );

      expect(question).toBeDefined();
    });
  });

  it('renders correctly answers with links', () => {
    render(<Faq faqData={MOCKED_FAQ_WITH_LINKS} />);

    const faqQuestions = screen.getAllByTestId('faq-question');
    const faqAnswersLinks = [...screen.getAllByRole('link')];
    const mockedAnswersLinks = MOCKED_FAQ_WITH_LINKS.map(({ answer }) => answer).flat();

    expect(faqQuestions.length).toBe(MOCKED_FAQ_WITH_LINKS.length);
    expect(faqAnswersLinks.length).toBe(mockedAnswersLinks.length);

    mockedAnswersLinks.forEach(({ title: mockedTitle, link: mockedLink }) => {
      const faqAnswerLink = faqAnswersLinks.find(
        (link) => link.getAttribute('href') === mockedLink,
      );

      expect(faqAnswerLink).toBeDefined();
      expect(faqAnswerLink).toHaveTextContent(mockedTitle);
    });
  });
});
