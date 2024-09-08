/* eslint-disable @stylistic/jsx-one-expression-per-line */
import { TextLinkIcon } from '@/shared/icons';
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

interface RequiredProps {
  courseName: CourseNamesChannels;
  lang?: 'ru' | 'en';
}

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

export const Communication = ({ courseName, lang = 'en' }: RequiredProps) => {
  return (
    <section className="communication container">
      <article className="communication content info-wrapper">
        <WidgetTitle mods="asterisk">{localizedContent[lang].title}</WidgetTitle>
        <div className="column-2">
          <figure className="disclogo-wrapper">
            <DiscordLogo />
          </figure>
          <div>
            <Subtitle text={localizedContent[lang].subTitle} />
            <Paragraph>
              {localizedContent[lang].firstParagraphFirstHalf}{' '}
              <LinkCustom href={DISCORD_LINKS[courseName]} icon={<TextLinkIcon />} target="_blank">
                {localizedContent[lang].discordLink}
              </LinkCustom>
              {localizedContent[lang].firstParagraphSecondHalf}
            </Paragraph>
            <Paragraph>
              {localizedContent[lang].secondParagraphFirstHalf}{' '}
              <LinkCustom
                href={RS_DOCS_TELEGRAM_CHATS_LINK}
                icon={<TextLinkIcon />}
                target="_blank"
              >
                {localizedContent[lang].telegramLink}
              </LinkCustom>
              {localizedContent[lang].secondParagraphSecondHalf}
            </Paragraph>
            <Paragraph>
              {localizedContent[lang].thirdParagraphFirstHalf}{' '}
              <LinkCustom href={RS_DOCS_COMMUNICATION_LINK} icon={<TextLinkIcon />} target="_blank">
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
