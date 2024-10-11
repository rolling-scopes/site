import { cleanup, screen } from '@testing-library/react';
import { Communication } from './communication';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { DISCORD_LINKS, communicationText } from 'data';

describe('Communication section', () => {
  it.each([
    {
      languageProp: undefined,
      texts: communicationText.en,
    },
    {
      languageProp: 'en',
      texts: communicationText.en,
    },
    {
      languageProp: 'ru',
      texts: communicationText.ru,
    },
  ])(
    'should render component correctly with $languageProp language prop',
    ({ languageProp, texts }) => {
      const firstCourse = Object.keys(DISCORD_LINKS)[0] as keyof typeof DISCORD_LINKS;

      const { title, subTitle, firstParagraphFirstHalf, discordLink } = texts;

      renderWithRouter(<Communication courseName={firstCourse} lang={languageProp as 'en' | 'ru' | undefined} />);
      const titleElement = screen.getByText(title);
      const subtitleElement = screen.getByText(subTitle);
      const firstParagraphElement = screen.getByText(`${firstParagraphFirstHalf}`, { exact: false });
      const linkElement = screen.getByText(discordLink);

      expect(titleElement).toBeVisible();
      expect(subtitleElement).toBeVisible();
      expect(firstParagraphElement).toBeVisible();
      expect(linkElement).toBeVisible();
      expect(linkElement.getAttribute('href')).toMatch(DISCORD_LINKS[firstCourse]);
      cleanup();
    },
  );

  it.each(Object.entries(DISCORD_LINKS))(
    'should render correct link of %s course',
    (courseName, link) => {
      renderWithRouter(<Communication courseName={courseName as keyof typeof DISCORD_LINKS} />);
      const linkElement = screen.getByText(/course discord server/i);

      expect(linkElement).toBeVisible();
      expect(linkElement.getAttribute('href')).toMatch(link);
      cleanup();
    },
  );
});
