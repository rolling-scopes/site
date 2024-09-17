import { communicationSectionLocales } from './locales';
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

export const Communication = ({ courseName, lang = 'en' }: CommunicationProps) => {
  const {
    title,
    subTitle,
    firstParagraphFirstHalf,
    discordLink,
    firstParagraphSecondHalf,
    secondParagraphFirstHalf,
    telegramLink,
    secondParagraphSecondHalf,
    thirdParagraphFirstHalf,
    rsDocsLink,
    thirdParagraphSecondHalf,
  } = communicationSectionLocales[lang];

  return (
    <section className="communication container">
      <article className="communication content info-wrapper">
        <WidgetTitle mods="asterisk">{title}</WidgetTitle>
        <div className="column-2">
          <figure className="disclogo-wrapper">
            <DiscordLogo />
          </figure>
          <div>
            <Subtitle>{subTitle}</Subtitle>
            <Paragraph className="communication-paragraph">
              {firstParagraphFirstHalf}
              <LinkCustom href={DISCORD_LINKS[courseName]} external>
                {discordLink}
              </LinkCustom>
              {firstParagraphSecondHalf}
            </Paragraph>
            <Paragraph className="communication-paragraph">
              {secondParagraphFirstHalf}
              <LinkCustom href={RS_DOCS_TELEGRAM_CHATS_LINK} external>
                {telegramLink}
              </LinkCustom>
              {secondParagraphSecondHalf}
            </Paragraph>
            <Paragraph className="communication-paragraph">
              {thirdParagraphFirstHalf}
              <LinkCustom href={RS_DOCS_COMMUNICATION_LINK} external>
                {rsDocsLink}
              </LinkCustom>
              {thirdParagraphSecondHalf}
            </Paragraph>
          </div>
        </div>
      </article>
    </section>
  );
};
