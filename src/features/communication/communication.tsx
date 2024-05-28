import { Paragraph, Subtitle, Title } from '@/app/components';
import ExternalLink from '@/app/components/externalLink/external-link';
import {
  CourseNames,
  DISCORD_LINKS,
  RS_DOCS_COMMUNICATION_LINK,
  RS_DOCS_TELEGRAM_CHATS_LINK,
} from '@/data/communication.data';
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
    firstParagraphSecondHalf: ' where you can see latest news and chat with students.',
    secondParagraphFirstHalf: 'There are channels in',
    telegramLink: 'Telegram',
    secondParagraphSecondHalf:
      ', for discussing events related to your location. For example, offline lectures. And informal chats among students from the same location.',
    thirdParagraphFirstHalf: 'Please read the information about communication in RS School in the',
    rsDocsLink: 'RS Docs',
    thirdParagraphSecondHalf: ', where you can find rules, descriptions of channels, FAQ.',
  },
  ru: {
    title: 'Общение',
    subTitle: 'Дискорд — основной способ общения в RS School',
    firstParagraphFirstHalf: 'Вот ссылка на',
    discordLink: 'дискорд сервер курса',
    firstParagraphSecondHalf:
      ', где вы можете посмотреть последние новости, задать вопросы и общаться со студентами.',
    secondParagraphFirstHalf: 'Также есть каналы в',
    telegramLink: 'телеграм',
    secondParagraphSecondHalf:
      ', для обсуждения мероприятий, относящихся к вашему городу. Например, офлайн лекции. И неформального общения студентов из одной локации',
    thirdParagraphFirstHalf: 'Обязательно прочитайте информацию об общении в RS School в',
    rsDocsLink: 'RS Docs',
    thirdParagraphSecondHalf: ', где вы можете найти правила, описание каналов, FAQ.',
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
                href={RS_DOCS_TELEGRAM_CHATS_LINK}
                text={localizedContent[lang].telegramLink}
              />
              {localizedContent[lang].secondParagraphSecondHalf}
            </Paragraph>
            <Paragraph>
              {localizedContent[lang].thirdParagraphFirstHalf}{' '}
              <ExternalLink
                href={RS_DOCS_COMMUNICATION_LINK}
                text={localizedContent[lang].rsDocsLink}
              />
              {localizedContent[lang].thirdParagraphSecondHalf}
            </Paragraph>
          </div>
        </div>
      </article>
    </section>
  );
};
