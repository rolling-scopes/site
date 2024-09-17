import { DiscordLogo } from '@/shared/icons/discord-logo';
import { LinkCustom } from '@/shared/ui/link-custom';
import { Paragraph } from '@/shared/ui/paragraph';
import { Subtitle } from '@/shared/ui/subtitle';
import { WidgetTitle } from '@/shared/ui/widget-title';
import {
  CourseNamesChannels,
  DISCORD_LINKS,
  RS_DOCS_COMMUNICATION_LINK,
  RS_DOCS_TELEGRAM_CHATS_LINK,
} from 'data';

import './communication.scss';

type CommunicationProps = {
  courseName: CourseNamesChannels;
  lang?: 'ru' | 'en';
};

const localizedContent = {
  en: {
    title: 'Communication',
    subTitle: 'Discord is the main communication channel in RS School',
    firstParagraphFirstHalf: 'Here is link for the',
    discordLink: 'course Discord server',
    firstParagraphSecondHalf: ', where you can see latest news and chat with students.',
    secondParagraphFirstHalf: 'There are channels in',
    telegramLink: 'Telegram',
    secondParagraphSecondHalf:
      ' for discussing events related to your location. For example, offline lectures or just informal chats among students from the same location.',
    thirdParagraphFirstHalf: 'Please read the information about communication in RS School in the',
    rsDocsLink: 'RS Docs',
    thirdParagraphSecondHalf: ', where you can find rules, descriptions of channels, FAQ.',
  },
  ru: {
    title: 'Общение',
    subTitle: 'Дискорд — основной способ общения в RS School',
    firstParagraphFirstHalf: 'Вот ссылка на',
    discordLink: 'Дискорд сервер курса',
    firstParagraphSecondHalf:
      ', где вы можете посмотреть последние новости, задать вопросы и общаться со студентами.',
    secondParagraphFirstHalf: 'Также есть каналы в',
    telegramLink: 'Телеграм',
    secondParagraphSecondHalf:
      ' для обсуждения мероприятий, относящихся к вашему городу. Например, офлайн лекции или просто для общения студентов из одной локации.',
    thirdParagraphFirstHalf: 'Обязательно прочитайте информацию об общении в RS School в',
    rsDocsLink: 'RS Docs',
    thirdParagraphSecondHalf: ', где вы можете найти правила, описание каналов, FAQ.',
  },
};

export const Communication = ({ courseName, lang = 'en' }: CommunicationProps) => {
  return (
    <section className="communication container">
      <article className="communication content info-wrapper">
        <WidgetTitle mods="asterisk">{localizedContent[lang].title}</WidgetTitle>
        <div className="column-2">
          <figure className="disclogo-wrapper">
            <DiscordLogo />
          </figure>
          <div>
            <Subtitle>{localizedContent[lang].subTitle}</Subtitle>
            <Paragraph className="communication-paragraph">
              {localizedContent[lang].firstParagraphFirstHalf}
              {' '}
              <LinkCustom href={DISCORD_LINKS[courseName]} external>
                {localizedContent[lang].discordLink}
              </LinkCustom>
              {localizedContent[lang].firstParagraphSecondHalf}
            </Paragraph>
            <Paragraph className="communication-paragraph">
              {localizedContent[lang].secondParagraphFirstHalf}
              {' '}
              <LinkCustom
                href={RS_DOCS_TELEGRAM_CHATS_LINK}
                external
              >
                {localizedContent[lang].telegramLink}
              </LinkCustom>
              {localizedContent[lang].secondParagraphSecondHalf}
            </Paragraph>
            <Paragraph className="communication-paragraph">
              {localizedContent[lang].thirdParagraphFirstHalf}
              {' '}
              <LinkCustom href={RS_DOCS_COMMUNICATION_LINK} external>
                {localizedContent[lang].rsDocsLink}
              </LinkCustom>
              {localizedContent[lang].thirdParagraphSecondHalf}
            </Paragraph>
          </div>
        </div>
      </article>
    </section>
  );
};
