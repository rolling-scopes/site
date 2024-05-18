import { Paragraph, Subtitle, Title } from '@/app/components';
import ExternalLink from '@/app/components/externalLink/external-link';
import { CourseNames, DISCORD_LINKS, RS_DOCS_COMMUNICATION_LINK } from '@/data/communication.data';
import { DiscordLogo } from '@/icons/discord-logo';

import './communication.scss';

interface RequiredProps {
  courseName: CourseNames;
  lang?: 'ru' | 'en';
}

const localizedContent = {
  en: {
    title: 'Communication',
    subTitle: 'Discord is the main communication channel in RS School',
    firstParagraphFirstHalf: 'Here is link for the',
    discordLink: 'course discord server',
    firstParagraphSecondHalf: 'where you can see latest news and chat with students.',
    secondParagraphFirstHalf: 'More info about communication at RS School in the',
    rsDocsLink: 'RS Docs',
    secondParagraphSecondHalf:
      'Here you could find rules, links to other courses and Telegram channels related to your country or even city. Feel free to use it :)',
  },
  ru: {
    title: 'Коммуникации',
    subTitle: 'Дискорд — основной способ коммуникации в RS School',
    firstParagraphFirstHalf: 'Здесь есть ссылка на',
    discordLink: 'дискорд сервер курса',
    firstParagraphSecondHalf:
      'где вы можете посмотреть последние новости и общаться со студентами.',
    secondParagraphFirstHalf: 'Более подробная информация об общении в RS School в',
    rsDocsLink: 'RS Docs',
    secondParagraphSecondHalf:
      'где вы можете найти правила, ссылки на другие курсы и каналы Telegram, связанные с вашей страной или даже городом. Не стесняйтесь использовать их :)',
  },
};

export const Communication = ({ courseName, lang = 'en' }: RequiredProps) => {
  return (
    <section className="communication container">
      <article className="communication content info-wrapper">
        <Title text={localizedContent[lang].title} hasAsterisk />
        <div className="column-2">
          <figure className="disclogo-wrapper">
            <DiscordLogo />
          </figure>
          <div>
            <Subtitle text={localizedContent[lang].subTitle} />
            <Paragraph>
              {localizedContent[lang].firstParagraphFirstHalf}{' '}
              <ExternalLink
                href={DISCORD_LINKS[courseName]}
                text={localizedContent[lang].discordLink}
              />
              {localizedContent[lang].firstParagraphSecondHalf}
            </Paragraph>
            <Paragraph>
              {localizedContent[lang].secondParagraphFirstHalf}{' '}
              <ExternalLink
                href={RS_DOCS_COMMUNICATION_LINK}
                text={localizedContent[lang].rsDocsLink}
              />
              {localizedContent[lang].secondParagraphSecondHalf}
            </Paragraph>
          </div>
        </div>
      </article>
    </section>
  );
};
