import { cleanup, screen } from '@testing-library/react';
import { Communication } from './communication';
import { communicationSectionLocales } from './locales';
import { renderWithRouter } from '@/shared/__tests__/utils';
import { DISCORD_LINKS } from 'data';

describe('Communication section', () => {
  it('should render "Communication" section texts correctly', async () => {
    const firstCourse = Object.keys(DISCORD_LINKS)[0] as keyof typeof DISCORD_LINKS;

    const {
      title,
      subTitle,
      firstParagraphFirstHalf,
      discordLink,
    } = communicationSectionLocales.en;

    renderWithRouter(<Communication courseName={firstCourse} />);
    const titleElement = screen.getByText(title);
    const subtitleElement = screen.getByText(subTitle);
    const firstParagraphElement = screen.getByText(`${firstParagraphFirstHalf}`, { exact: false });
    const linkElement = screen.getByText(discordLink);

    expect(titleElement).toBeVisible();
    expect(subtitleElement).toBeVisible();
    expect(firstParagraphElement).toBeVisible();
    expect(linkElement).toBeVisible();
    expect(linkElement.getAttribute('href')).toMatch(DISCORD_LINKS[firstCourse]);
  });

  it('should render "Communication" section texts correctly on russian language', async () => {
    const firstCourse = Object.keys(DISCORD_LINKS)[0] as keyof typeof DISCORD_LINKS;

    const {
      title,
      subTitle,
      firstParagraphFirstHalf,
      discordLink,
    } = communicationSectionLocales.ru;

    renderWithRouter(<Communication courseName={firstCourse} lang="ru" />);
    const titleElement = screen.getByText(title);
    const subtitleElement = screen.getByText(subTitle);
    const firstParagraphElement = screen.getByText(`${firstParagraphFirstHalf}`, { exact: false });
    const linkElement = screen.getByText(discordLink);

    expect(titleElement).toBeVisible();
    expect(subtitleElement).toBeVisible();
    expect(firstParagraphElement).toBeVisible();
    expect(linkElement).toBeVisible();
    expect(linkElement.getAttribute('href')).toMatch(DISCORD_LINKS[firstCourse]);
  });

  Object.entries(DISCORD_LINKS).forEach(([courseName, link]) => {
    it(`should render correct link of ${courseName}`, () => {
      renderWithRouter(<Communication courseName={courseName as keyof typeof DISCORD_LINKS} />);
      const linkElement = screen.getByText(/course discord server/i);

      expect(linkElement).toBeVisible();
      expect(linkElement.getAttribute('href')).toMatch(link);
      cleanup();
    });
  });
});
